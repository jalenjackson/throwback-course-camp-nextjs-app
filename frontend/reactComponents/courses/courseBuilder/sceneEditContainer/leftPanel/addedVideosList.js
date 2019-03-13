import React from 'react';
import { Collapse, Button, Icon, Dropdown, Menu, Popconfirm, Input, Select } from 'antd';
import { reorderSections } from '../../draggableMethods';
import atob from 'atob';
import _ from 'lodash';
import {pluginsEnabled} from "../../../newCourse/steps/addDescription/pluginsEnabled";

const Panel = Collapse.Panel;

export default class AddedVideoList extends React.Component {
  state = {
    orderOfVideo: 1
  };

  render() {
    return (
      <div id='added-videos-list'>
        {this.renderAddedVideos()}
      </div>
    )
  }

  initiateFroalaEditor = key => {
    const textArea = $(`.video-description-${ key }`);
    if (this.props.container.state.course.sections.length !== 0) {
      console.log(textArea);
      console.log(key)
      console.log($(`.video-description-${ key }`))
      textArea.froalaEditor({
        placeholderText: 'Create a description for this section!',
        fontFamily: { 'GothamMedium, sans-serif': 'GothamMedium' },
        codeMirror: true,
        pluginsEnabled,
        toolbarSticky: false,
        buttons: [
          // .... ,
          "insertCode" //custom button
        ],


        customButtons: {
          insertCode: {
            title: 'Insert Code',
            icon: {
              type: 'font',
              value: 'fa fa-dollar' // Font Awesome icon class fa fa-*
            },
            callback: function (editor) {
              editor.saveSelection();

              var codeModal = $("<div>").addClass("froala-modal").appendTo("body");
              var wrapper = $("<div>").addClass("f-modal-wrapper").appendTo(codeModal);
              $("<h4>").append('<span data-text="true">Insert Code</span>')
                  .append($('<i class="fa fa-times" title="Cancel">')
                      .click(function () {
                        codeModal.remove();
                      }))
                  .appendTo(wrapper);

              var dialog = "<textarea id='code_area' style='height: 211px; width: 538px;' /><br/><label>Language:</label><select id='code_lang'><option>CSharp</option><option>VB</option><option>JScript</option><option>Sql</option><option>XML</option><option>CSS</option><option>Java</option><option>Delphi</option></select> <input type='button' name='insert' id='insert_btn' value='Insert' /><br/>";
              $(dialog).appendTo(wrapper);

              $("#code_area").text(editor.text());

              if (!editor.selectionInEditor()) {
                editor.$element.focus();
              }

              $('#insert_btn').click(function () {
                var lang = $("#code_lang").val();
                var code = $("#code_area").val();
                code = code.replace(/\s+$/, ""); // rtrim
                code = $('<span/>').text(code).html(); // encode

                var htmlCode = "<pre language='" + lang + "' name='code'>" + code + "</pre></div>";
                var codeBlock = "<div align='left' dir='ltr'>" + htmlCode + "</div><br/>";

                editor.restoreSelection();
                editor.insertHTML(codeBlock);
                editor.saveUndoStep();

                codeModal.remove();
              });
            }
          }
        },
        fontSizeSelection: true,
      })
      .on('froalaEditor.contentChanged', e => {
        this.props.container.updateVideoDetails('description', key, e.target.value, this.props.auth);
      });
    } else {
      textArea.hide();
    }
  };

  renderAddedVideos = () => {
    const videos = this.props.container.state.course.sections[this.props.container.state.currentActiveSection].videos;
    if (videos && videos.length > 0) {
      return (
          <Collapse onChange={ key => this.fillInVideoDetailsAndRenderVideo(key, videos, this.props) } style={{ marginTop: 20, marginBottom: 100 }} accordion>
            { videos.map((video, i) =>
              <Panel className={ `video-panel-${ i }` } header={ `${ video.title ? video.title : 'Video ' + (i + 1) }` } key={ i }>
                <label className='collapse-push-label collapse-remove-margin-top'>Enter a title for this video</label>
                <Input value={ this.props.container.state.videoTitleTerm } onChange={ e => this.props.container.updateVideoDetails('title', i, e.target.value, this.props.auth) } placeholder="Your title goes here..." />
                <label className="collapse-push-label">Enter a description for this video</label>
                <div style={{ marginBottom: 30 }}>
                  <textarea className={ `video-description-${ i }` } rows={4} value={ this.props.container.state.videoDescriptionTerm } placeholder="Your description goes here..." />
                </div>
                <label style={{ marginTop: -10 }} className="collapse-push-label">Reorder Video</label>
                <Select
                    value={ this.state.orderOfVideo }
                    onChange={ endIndex => this.reorderVideo(videos, i, endIndex - 1) }
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Order your video">
                  { _.times(videos.length, (i) => (
                    <Select.Option value={ i + 1 }>{ this.getNumberWithOrdinal(i + 1) }</Select.Option>
                  )) }
                </Select>
                <Button.Group style={{ marginTop: 20 }}>
                  <Dropdown overlay={ this.menu(i) }>
                    <Button>
                      Add Exercise <Icon type="rocket" />
                    </Button>
                  </Dropdown>
                  <Popconfirm title="Are you sure delete this video" onConfirm={ () => this.props.container.deleteAddedVideo(i, this.props.auth, video.videoLocation) } okText="Yes" cancelText="No">
                    <Button type="danger">
                      <Icon type="delete" /> Delete Video
                    </Button>
                  </Popconfirm>
                </Button.Group>
              </Panel>
            )}
          </Collapse>
      );
    }
  };

  reorderVideo = (videos, startIndex, endIndex) => {
    const videosReordered = reorderSections(videos, startIndex, endIndex);
    const course = this.props.container.state.course;
    course.sections[this.props.container.state.currentActiveSection].videos = videosReordered;

    this.props.container.updateState('course', course);
    this.props.container.reorderSections(this.props.auth, course.sections);
    $(`.video-panel-${ startIndex }`).find('.ant-collapse-header').click();
    $(`.video-panel-${ endIndex }`).find('.ant-collapse-header').click();
    this.setState({ orderOfVideo: endIndex + 1 });
  };

  getNumberWithOrdinal = n => {
    let s=["th","st","nd","rd"],
        v=n%100;
    return n+(s[(v-20)%10]||s[v]||s[0]);
  };

  fillInVideoDetailsAndRenderVideo = async (key, videos) => {
    if (key) {
      await this.setState({ orderOfVideo: +key + 1 });
      $('.video-transition').css({opacity: 1});
      setTimeout(() => {
        this.props.container.updateState('currentVideoLocation', videos[key].videoLocation);
      }, 300);
      setTimeout(() => {
        $('.video-transition').css({opacity: 0});
      }, 350);

      await this.props.container.updateState('videoTitleTerm', videos[key].title);
      await this.props.container.updateState('videoDescriptionTerm', atob(videos[key].description));
      this.initiateFroalaEditor(key);
    }
  };

  menu = i => (
    <Menu>
      <Menu.Item onClick={ () => this.openDrawerFromMenu(i, 'addQuizDrawerVisibility') } key='1'>Add A Quiz</Menu.Item>
      <Menu.Item onClick={ () => this.openDrawerFromMenu(i, 'addPictureQuizDrawerVisibility') } key='2'>Add A Picture Quiz</Menu.Item>
      <Menu.Item onClick={ () => this.openDrawerFromMenu(i, 'addMatchingGameDrawerVisibility') } key="3">Add A Matching Game</Menu.Item>
      <Menu.Item onClick={ () => this.openDrawerFromMenu(i, 'addCrunchChallengeVisibility') } key="4">Add A Crunch Challenge</Menu.Item>
      <Menu.Item onClick={ () => this.openDrawerFromMenu(i, 'addCodingChallengeVisibility') } key="5">Add A Coding Challenge</Menu.Item>
      <Menu.Item onClick={ () => this.openDrawerFromMenu(i, 'addCodingProjectVisibility') } key="6">Add A Coding Project</Menu.Item>
    </Menu>
  );

  openDrawerFromMenu = (currentActiveVideoInSectionIterator, drawerToOpen) => {
    this.props.container.updateState('currentActiveVideoInSection', currentActiveVideoInSectionIterator);
    this.props.container.updateState(drawerToOpen, true);
  };
}

