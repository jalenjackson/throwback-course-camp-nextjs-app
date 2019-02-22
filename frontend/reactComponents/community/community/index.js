import React from 'react';
import { Comment, Tooltip, Avatar, Divider, Tag, Icon, AutoComplete, Input } from 'antd';
import moment from 'moment';
import { Link } from '../../../../routes';

export default class Community extends React.Component {
  componentDidMount() {
    $('body').css({ background: '#EDEFF0' })
  }
  
  render() {
    const questionActions = [
      <span>
        <Tooltip title="2 Answers">
          <b style={{ paddingLeft: 8, cursor: 'auto' }}>
            2 Answers
          </b>
        </Tooltip>
      </span>
    ];
    
    return (
      <div id='community'>
        <h1 className="community-title">Community</h1>
        <AutoComplete
          dropdownStyle={{ width: 300 }}
          size="large"
          style={{ width: '100%' }}
          placeholder="input here"
          optionLabelProp="value"
        >
          <Input suffix={<Icon type="search" className="certain-category-icon" />} />
        </AutoComplete>
        <Divider />
        
        { this.props.forumQuestions.map((forumQuestion) => (
          <div className='community-question'>
            <Comment
              actions={ questionActions }
              author={<a>{ forumQuestion.creator.name }</a>}
              avatar={(
                <Avatar
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  alt="Han Solo"
                />
              )}
              content={(
                <p>
                  <Link to={ `/community/${ forumQuestion._id }` }>
                    <a>{ forumQuestion.title }</a>
                  </Link>
                </p>
              )}
              datetime={(<span>{moment(forumQuestion.date).fromNow()}</span>)}
            />
            <Tag color={ forumQuestion.course.color }>{ forumQuestion.course.title }</Tag>
            <Tag color={ forumQuestion.course.color }>{ forumQuestion.course.sections[forumQuestion.sectionIndex].title }</Tag>
            <Tag color={ forumQuestion.course.color }><Icon type="play-circle" /> { forumQuestion.course.sections[forumQuestion.sectionIndex].videos[forumQuestion.videoIndex].title }</Tag>
            { forumQuestion.exercise !== 'undefined'
              ? <Tag color={ forumQuestion.course.color }>{ forumQuestion.exercise }</Tag>
              : null
            }
            <Divider />
          </div>
        )) }
      </div>
    );
  }
}