import React from 'react';
import { Button, Col, Form, Icon, Popover, Row } from 'antd';
import { infoPopoverContent } from './popoverContent';
import { pluginsEnabled } from './pluginsEnabled';
import Localization from '../../localization';
import {updateCourse} from "../../updateCourse";
const AddDescriptionLocalized = Localization.Steps.AddDescription;

export default class AddDescription extends React.Component {
  componentDidMount() {
    const textArea = $('#new-course-description-text-area');
    textArea.froalaEditor({
      key: process.env.froalaKey,
      placeholderText: 'Create your summary here!',
      fontFamily: { 'GothamMedium, sans-serif': 'GothamMedium' },
      codeMirror: true,
      pluginsEnabled
    });
    textArea.on('froalaEditor.contentChanged', e => {
      this.props.isFromBuildCourse ? updateCourse(this.props, 'description', e.target.value) : this.props.container.updateState('description', e.target.value);
    });
  }

  render() {
    return (
      <div>
        <img style={{ width: 80 }} className='new-course-form-icon' alt={ AddDescriptionLocalized.IconAlt } src='/static/icons/microphone.svg' />
        <Form layout='horizontal' hideRequiredMark>
          <Row gutter={ 16 }>
            <Col span={ 24 }>
              <label className='new-course-form-main-label'>{ AddDescriptionLocalized.Label }
                <Popover content={ infoPopoverContent } title={ AddDescriptionLocalized.PopoverTitle }>
                  <Icon className='new-course-form-main-popover-icon'
                    type='info-circle'>
                  </Icon>
                </Popover>
              </label>
              <textarea value={ this.props.container.state.description } id='new-course-description-text-area' />
            </Col>
          </Row>
          <div className="new-course-button-container">
            <Button
                className='new-course-next-and-back-button'
                type='primary'
                disabled={ this.props.container.state.description.trim() === '' }
                onClick={ () => this.props.container.nextStep(this.props) }>
              <Icon type='arrow-right' />
              { Localization.Next }
            </Button>
            <Button
                className='new-course-next-and-back-button'
                type='primary'
                onClick={() => this.props.container.prevStep()}>
              <Icon type='arrow-left' />
              { Localization.Back }
            </Button>
          </div>
        </Form>
      </div>
    )
  }
}
