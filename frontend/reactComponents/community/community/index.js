import React from 'react';
import {Comment, Avatar, Divider, Tag, Icon, Pagination} from 'antd';
import moment from 'moment';
import { Link } from '../../../../routes';
import PageLoader from "../../globalComponents/pageLoader";
import { Subscribe } from "unstated";
import QuestionContainer from './container';
import SetQuestions from "./setQuestions";
import _ from 'lodash';

export default class Community extends React.Component {
  state = {
    loaded: false,
    skipAmount: 5
  };
  
  async componentDidMount() {
    if (this.props.isRequestFromServer) {
      setTimeout(async () => {
        this.setState({ loaded: true });
      }, 600);
    } else {
      this.setState({ loaded: true });
    }
  }
  
  render() {
    return (
      <Subscribe to={[QuestionContainer]}>
        { container => (
          <div id='community'>
            {this.state.loaded
              ? <div>
                <h1 className="community-title">Community</h1>
                <Divider/>
                <SetQuestions { ...this.props } container={ container } />
        
                { container.state.forumQuestions && container.state.forumQuestions.length > 0 ? container.state.forumQuestions.map(forumQuestion => (
                  <div className='community-question'>
                    <Comment
                      author={<a>{_.truncate(forumQuestion.creator.name, { length: 15 })}</a>}
                      avatar={(
                        <Avatar
                          src={forumQuestion.creator.profileImage ? forumQuestion.creator.profileImage : '/static/icons/profile-image-placeholder.png'}
                        />
                      )}
                      content={(
                        <p>
                          <Link to={`/community/${forumQuestion._id}`}>
                            <a>{forumQuestion.title}</a>
                          </Link>
                        </p>
                      )}
                      datetime={(<span>{moment(forumQuestion.date).fromNow()}</span>)}
                    />
                    <Tag color={forumQuestion.course.color}>{forumQuestion.course.title}</Tag>
                    <Tag
                      color={forumQuestion.course.color}>{forumQuestion.course.sections[forumQuestion.sectionIndex].title}</Tag>
                    <Tag color={forumQuestion.course.color}><Icon
                      type="play-circle"/> {forumQuestion.course.sections[forumQuestion.sectionIndex].videos[forumQuestion.videoIndex].title}
                    </Tag>
                    {forumQuestion.exercise !== 'undefined'
                      ? <Tag color={forumQuestion.course.color}>{forumQuestion.exercise}</Tag>
                      : null
                    }
                    <Divider/>
                  </div>
                )) : null }
                { container.isPaginating
                  ? <Icon type="loading" />
                  : null
                }
                <Pagination
                  showQuickJumper
                  pageSize={ this.state.skipAmount }
                  onChange={ page => { $(window).scrollTop(0); container.getMoreQuestions(this.getSkipAmount(page)) } }
                  defaultCurrent={ this.props.defaultPageNumber }
                  total={ this.props.forumQuestionsLength } />
              </div>
              : <PageLoader/>
            }
          </div>
        ) }
      </Subscribe>
    );
  }
  
  getSkipAmount = page => {
    if (page === 1) return 0;
    return this.state.skipAmount * (page - 1);
  };
}