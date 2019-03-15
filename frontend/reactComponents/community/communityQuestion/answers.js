import React from 'react';
import { Comment, List } from 'antd';
import moment from 'moment'

export default class Answers extends React.Component {
  render() {
    return (
      <div>
        { this.props.container.state.forumQuestion.answers && this.props.container.state.forumQuestion.answers.length > 0
          ? <div>
              <List
                className="comment-list"
                header={`${this.props.container.state.forumQuestion.answers.length} answers`}
                itemLayout="horizontal"
                dataSource={ this.props.container.state.forumQuestion.answers }
                renderItem={ forumQuestion => (
                  <Comment
                    author={ _.truncate(forumQuestion.userId.name, { length: 15 }) }
                    avatar={ forumQuestion.userId.profileImage }
                    content={ forumQuestion.answer }
                    datetime={moment(forumQuestion.date).fromNow()}
                  />
                )}
              />
            </div>
          : <h3 style={{ marginTop: 20 }}>No answers yet</h3>
        }
      </div>
    )
  }
}