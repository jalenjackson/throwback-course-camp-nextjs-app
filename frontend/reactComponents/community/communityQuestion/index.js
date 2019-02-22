import React from 'react';
import { Avatar, Comment, Button, Icon, Tag, Tooltip, List } from "antd";
import moment from "moment";
import { Link } from '../../../../routes';

export default class Community extends React.Component {
  render() {
    const { forumQuestion } = this.props;
    
    const questionActions = [
      <span>
        <Tooltip title="2 Answers">
          <b style={{ paddingLeft: 8, cursor: 'auto' }}>
            2 Answers
          </b>
        </Tooltip>
      </span>
    ];
  
    const data = [
      {
        actions: [<span>Reply to</span>],
        author: 'Han Solo',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        content: (
          <p>We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.</p>
        ),
        datetime: (
          <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
            <span>{moment().subtract(1, 'days').fromNow()}</span>
          </Tooltip>
        ),
      },
      {
        actions: [<span>Reply to</span>],
        author: 'Han Solo',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        content: (
          <p>We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.</p>
        ),
        datetime: (
          <Tooltip title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
            <span>{moment().subtract(2, 'days').fromNow()}</span>
          </Tooltip>
        ),
      },
    ];
    
    return (
      <div id='community'>
        <p>
          <Link to='/community'>
            <a>
              <Icon type="arrow-left" /> Back
            </a>
          </Link>
        </p>
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
              <p>{ forumQuestion.title }</p>
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
        </div>
        
        <Button style={{ marginTop: 30 }}>Answer Question</Button>
  
        <List
          style={{ marginTop: 30 }}
          className="comment-list"
          header={`${data.length} Answers`}
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <Comment
              actions={item.actions}
              author={item.author}
              avatar={item.avatar}
              content={item.content}
              datetime={item.datetime}
            />
          )}
        />
      </div>
    );
  }
}