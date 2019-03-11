import React from 'react';
import { Comment, List } from 'antd';

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
                    author={ forumQuestion.userId.name }
                    avatar={ forumQuestion.userId.profileImage }
                    content={ forumQuestion.answer }
                    datetime={ forumQuestion.date }
                  />
                )}
              />
            </div>
          : <h1>No answers yet</h1>
        }
      </div>
    )
  }
}