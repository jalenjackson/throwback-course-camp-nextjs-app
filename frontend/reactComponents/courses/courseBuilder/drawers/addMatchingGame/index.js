import React from 'react';
import { Drawer, Input, Button, Icon, Collapse } from 'antd';
import AddedElement from "./addedQuestion";

const Panel = Collapse.Panel;


export default class AddMatchingGameDrawer extends React.Component {
  state = {
    questionTerm: '',
    answerTerm: '',
    timeAllotted: '',
    isQueryingAPI: false
  };

  saveMatch = async () => {
    this.setState({ isQueryingAPI: true });
    await this.props.container.saveMatchingGameQuestion(this.props.auth, this.state.questionTerm, this.state.answerTerm, this.state.timeAllotted, generateRandomMatchId());
    this.setState({ isQueryingAPI: false });
  };

  deleteQuestion = async matchId => {
    this.setState({ isQueryingAPI: true });
    await this.props.container.deleteMatchingGameQuestion(this.props.auth, matchId);
    this.setState({ isQueryingAPI: false });
  };

  render() {
    const currentActiveVideo = this.props.container.state.course.sections[this.props.container.state.currentActiveSection].videos[this.props.container.state.currentActiveVideoInSection];
    return (
      <Drawer
          width={ 520 }
          title='Add A Matching Game'
          placement='left'
          closable={ true }
          onClose={ () => this.props.container.updateState('addMatchingGameDrawerVisibility', false) }
          visible={ this.props.container.state.addMatchingGameDrawerVisibility }>
        <Icon type="info-circle" /> Enter as many questions along with the corresponding answer. We will create a matching game out of the questions and answers you submit<br/><br/>

        <label style={{ marginTop: 10, display: 'block', marginBottom: 2 }}>Enter A Question</label>
        <Input onChange={ e => this.setState({ questionTerm: e.target.value }) } />
        <label style={{ marginTop: 10, display: 'block', marginBottom: 2 }}>What's the answer to the question you're asking?</label>
        <Input onChange={ e => this.setState({ answerTerm: e.target.value }) } />
        <label style={{ marginTop: 10, display: 'block', marginBottom: 2 }}>How much time are you giving to complete this matching game?</label>
        <Input
            value={ this.state.timeAllotted }
            onChange={ this.onNumberFieldChange }
            placeholder="Enter a number"
            maxLength={25}
        />
        <Button disabled={ this.state.questionTerm.trim() === '' || this.state.answerTerm.trim() === '' || this.state.timeAllotted.trim() === '' } style={{ marginTop: 15 }} onClick={ this.saveMatch } type='primary'>Submit</Button>


        { !currentActiveVideo || !currentActiveVideo.matchingGame || currentActiveVideo.matchingGame.questions.length === 0 || currentActiveVideo.matchingGame.answers.length === 0
          ? null
          : <Collapse style={{ marginTop: 20, marginBottom: 20 }} accordion>
              { currentActiveVideo.matchingGame.questions.map((questionObj) => (
                <Panel header={ questionObj.question } >
                  <AddedElement { ...this.props } timeAllotted={ currentActiveVideo.matchingGame.timeAllotted } type={ 'Time' } />
                  <AddedElement type={ 'Question' } matchId={ questionObj.matchId } elementText={ questionObj.question } {  ...this.props }/>
                  <AddedElement answer={ currentActiveVideo.matchingGame.answers.find(answer => answer.matchId === questionObj.matchId).answer } type={ 'Answer' } matchId={ questionObj.matchId } {  ...this.props }/>
                  <Button onClick={ () => this.deleteQuestion(questionObj.matchId) } loading={ this.state.isQueryingAPI } style={{ marginTop: 10, marginRight: 1, display: 'block' }} type="danger">Delete Question</Button>
                </Panel>
              )) }
          </Collapse>
        }
      </Drawer>
    )
  }

  onNumberFieldChange = (e) => {
    const { value } = e.target;
    const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;
    if ((!Number.isNaN(value) && reg.test(value)) || value === '' || value === '-') {
      this.setState({ timeAllotted: value });
    }
  };
}

const generateRandomMatchId = () => {
  let text = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 10; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
};
