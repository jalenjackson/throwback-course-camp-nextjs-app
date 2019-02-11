import React from 'react';
import { Collapse, Button, Icon, Dropdown, Menu, Popconfirm, Input } from 'antd';

const { TextArea } = Input;
const Panel = Collapse.Panel;

const AddedVideoList = props => (
  <div id='added-videos-list'>
    { renderAddedVideos(props) }
  </div>
);

const renderAddedVideos = props => {
  const videos = props.container.state.course.sections[props.container.state.currentActiveSection].videos;
  if (videos && videos.length > 0) {
    return (
      <Collapse onChange={ key => fillInVideoDetailsAndRenderVideo(key, videos, props) } style={{ marginTop: 20, marginBottom: 20 }} accordion>
        { videos.map((video, i) =>
          <Panel header={ `${ video.title ? video.title : 'Video ' + (i + 1) }` } key={ i }>
            <label className='collapse-push-label collapse-remove-margin-top'>Enter a title for this video</label>
            <Input value={ props.container.state.videoTitleTerm } onChange={ e => props.container.updateVideoDetails('title', i, e.target.value, props.navbarContainer) } placeholder="Your title goes here..." />
            <label className="collapse-push-label">Enter a description for this video</label>
            <TextArea rows={4} value={ props.container.state.videoDescriptionTerm } onChange={ e => props.container.updateVideoDetails('description', i, e.target.value, props.navbarContainer) } style={{ marginBottom: 20 }} placeholder="Your description goes here..." />
            <Button.Group>
              <Dropdown overlay={ menu(props, i) }>
                <Button>
                  Add Exercise <Icon type="rocket" />
                </Button>
              </Dropdown>
              <Popconfirm title="Are you sure delete this video" onConfirm={ () => props.container.deleteAddedVideo(i, props.navbarContainer, video.videoLocation) } okText="Yes" cancelText="No">
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

const fillInVideoDetailsAndRenderVideo = (key, videos, props) => {
  if (key) {
    $('.video-transition').css({opacity: 1});
    setTimeout(() => {
      props.container.updateState('currentVideoLocation', videos[key].videoLocation);
    }, 300);
    setTimeout(() => {
      $('.video-transition').css({opacity: 0});
    }, 350);

    props.container.updateState('videoTitleTerm', videos[key].title);
    props.container.updateState('videoDescriptionTerm', videos[key].description);
  }
};

const menu = (props, i) => (
  <Menu>
    <Menu.Item onClick={ () => openDrawerFromMenu(props, i, 'addQuizDrawerVisibility') } key='1'>Add A Quiz</Menu.Item>
    <Menu.Item onClick={ () => openDrawerFromMenu(props, i, 'addPictureQuizDrawerVisibility') } key='2'>Add A Picture Quiz</Menu.Item>
    <Menu.Item key="3">Add A Matching Game</Menu.Item>
    <Menu.Item key="3">Add A Crunch Challenge</Menu.Item>
    <Menu.Item key="3">Add A Coding Challenge</Menu.Item>
    <Menu.Item key="3">Add A Coding Project</Menu.Item>
  </Menu>
);

const openDrawerFromMenu = (props, currentActiveVideoInSectionIterator, drawerToOpen) => {
  props.container.updateState('currentActiveVideoInSection', currentActiveVideoInSectionIterator);
  props.container.updateState(drawerToOpen, true);
};

export default AddedVideoList;
