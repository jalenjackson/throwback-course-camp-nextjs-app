import React from 'react';
import AddQuizDrawer from './addQuiz/index';
import AddPictureDrawer from './addPictureQuiz/index';
import AddMatchingGameDrawer from './addMatchingGame/index';
import AddCrunchChallengeDrawer from './addCrunchChallenge/index';
import AddCodingChallengeDrawer from './addCodingChallenge/index'
import AddCodingProjectDrawer from './addCodingProject/index'

const Drawers = props => (
  <div>
    <AddQuizDrawer { ...props } />
    <AddPictureDrawer { ...props } />
    <AddMatchingGameDrawer { ...props } />
    <AddCrunchChallengeDrawer { ...props } />
    <AddCodingChallengeDrawer { ...props } />
    <AddCodingProjectDrawer { ...props } />
  </div>
);

export default Drawers;
