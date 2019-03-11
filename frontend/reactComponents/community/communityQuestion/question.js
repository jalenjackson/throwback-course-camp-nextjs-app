import React from 'react';
import {Avatar, Comment, Icon, Tag, Tooltip} from 'antd';
import moment from "moment";

export default class Question extends React.Component {
  render() {
    const forumQuestion = this.props.container.state.forumQuestion;
    return (
      <div className='community-question'>
        <Comment
          author={<a>{ forumQuestion.creator.name }</a>}
          avatar={(
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt="Han Solo"
            />
          )}
          content={(
            <p>{ forumQuestion.title }</p>
          )}
          datetime={ (<span>{moment(forumQuestion.date).fromNow() }</span>)}
        />
        <Tag color={ forumQuestion.course.color }>{ forumQuestion.course.title }</Tag>
        <Tag color={ forumQuestion.course.color }>{ forumQuestion.course.sections[forumQuestion.sectionIndex].title }</Tag>
        <Tag color={ forumQuestion.course.color }><Icon type="play-circle" /> { forumQuestion.course.sections[forumQuestion.sectionIndex].videos[forumQuestion.videoIndex].title }</Tag>
        { forumQuestion.exercise !== 'undefined'
          ? <Tag color={ forumQuestion.course.color }>{ forumQuestion.exercise }</Tag>
          : null
        }
      </div>
    )
  }
}