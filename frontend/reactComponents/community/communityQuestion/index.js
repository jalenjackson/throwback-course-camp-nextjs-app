import React from 'react';
import { Button } from "antd";
import { Link } from '../../../../routes';
import Question from "./question";
import AnswerQuestion from "./answerQuestion";
import BackLink from "./backLink";
import CommunityQuestionContainer from './container';
import { Subscribe } from "unstated";
import SetQuestionInState from "./setQuestionInState";
import Answers from "./answers";
import PageLoader from "../../globalComponents/pageLoader";

export default class Community extends React.Component {
  state = {
    loaded: false
  };
  
  async componentDidMount() {
    $(window).scrollTop(0);
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
      <Subscribe to={[CommunityQuestionContainer]}>
        { container => (
          <div>
            { this.state.loaded
              ? <div id='community'>
                  <SetQuestionInState container={ container } { ...this.props } />
                  { container.state.forumQuestion
                    ? <div>
                      <BackLink />
                      <Question { ...this.props } container={ container } />
                      <Button onClick={ () => container.updateState('newAnswerModalVisible', true) } style={{ marginTop: 30 }}>Answer Question</Button>
                      <Answers { ...this.props } container={ container } />
                      <AnswerQuestion { ...this.props } container={ container } />
                    </div>
                    : null
                  }
                </div>
              : <PageLoader />
            }
          </div>
        ) }
      </Subscribe>
    );
  }
}