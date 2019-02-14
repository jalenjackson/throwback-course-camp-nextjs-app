import React from 'react';
import _ from 'lodash';
import { Icon, Popconfirm } from 'antd';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { onDragEnd } from '../draggableMethods';

const SectionList = props => (
    <DragDropContext onDragEnd={ result => onDragEnd(props, result, props.container.state.course.sections, true) }>
      <Droppable droppableId='droppable' direction='horizontal'>
        { (provided) => (
          <div ref={ provided.innerRef } { ...provided.droppableProps } className='scenes'>
            { renderSections(props) }
            { provided.placeholder }
          </div>
        ) }
      </Droppable>
    </DragDropContext>
);

const renderSections = props => {
  return props.container.state.course.sections.map((section, i) => (
    <Draggable key={`draggable${i}`} draggableId={`draggable${i}`} index={i}>
      {(provided) => (
        <div ref={ provided.innerRef } { ...provided.draggableProps } { ...provided.dragHandleProps } onClick={ () => props.container.changeCurrentActiveSection(i) } className='video-wrap'>
          <div className='video-scene'>
            <Popconfirm placement="topLeft" title="Are you sure delete this entire section?" onConfirm={ () => props.container.deleteSection(i, props.navbarContainer) } okText="Yes" cancelText="No">
              <div className='delete-section'><Icon style={{ fontSize: 15, color: 'white' }} type='delete' /></div>
            </Popconfirm>
            <div style={ dynamicBorder(props, i === props.container.state.currentActiveSection) } className='video-overlay'>
              <h1>{ _.truncate(section.title ? section.title : 'New Section', { 'length': 10 }) }</h1>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  ));
};

const dynamicBorder = (props, isCurrentActiveSection) => {
  return { border: isCurrentActiveSection ? `3px solid ${ props.container.state.course.color }` : '3px solid transparent' }
};

export default SectionList;
