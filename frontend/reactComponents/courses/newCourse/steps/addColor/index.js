import React from 'react';
import { Button, Col, Form, Icon, Popover, Row } from 'antd';
import { SketchPicker } from 'react-color'
import { infoPopoverContent } from './popoverContent';
import Localization from '../../localization';
import {updateCourse} from "../../updateCourse";
const AddColorLocalized = Localization.Steps.AddColor;

const AddColor = props => (
    <div>
      <Form layout='horizontal' hideRequiredMark>
        <Row gutter={ 16 }>
          <Col span={ 24 }>
            <label className='new-course-form-main-label'>{ AddColorLocalized.Label }
              <Popover content={ infoPopoverContent } title={ AddColorLocalized.PopoverTitle }>
                <Icon className='new-course-form-main-popover-icon'
                  type='info-circle'>
                </Icon>
              </Popover>
            </label>
            <SketchPicker color={ props.container.state.color } onChange={ color => props.isFromBuildCourse ? updateColor(props, color.hex) : props.container.updateState('color', color.hex) } />
          </Col>
        </Row>
        <div className='new-course-button-container'>
          <Button
              className='new-course-next-and-back-button'
              type="primary"
              disabled={ props.container.state.color.trim() === '' }
              onClick={ () => props.container.nextStep(props) }>
            <Icon type='arrow-right' />
            { Localization.Next }
          </Button>
          <Button
              className='new-course-next-and-back-button'
              type="primary"
              onClick={() => props.container.prevStep()}>
            <Icon type='arrow-left' />
            { Localization.Back }
          </Button>
        </div>
      </Form>
    </div>
);

const updateColor = (props, hex) => {
  updateCourse(props, 'color', hex);
  const course = props.courseBuilderContainer.state.course;
  course.color = hex;
  props.courseBuilderContainer.updateState('course', course);
};

export default AddColor;
