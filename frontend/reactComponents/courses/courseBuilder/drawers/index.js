import React from 'react';
import AddQuizDrawer from './addQuiz/index';
import AddPictureDrawer from './addPictureQuiz/index';
import AddMatchingGameDrawer from './addMatchingGame/index';

const Drawers = props => (
  <div>
    <AddQuizDrawer { ...props } />
    <AddPictureDrawer { ...props } />
    <AddMatchingGameDrawer { ...props } />
  </div>
);

export default Drawers;
