import React from 'react';
import AddQuizDrawer from './addQuiz/index';
import AddPictureDrawer from './addPictureQuiz/index';

const Drawers = props => (
  <div>
    <AddQuizDrawer { ...props } />
    <AddPictureDrawer { ...props } />
  </div>
);

export default Drawers;
