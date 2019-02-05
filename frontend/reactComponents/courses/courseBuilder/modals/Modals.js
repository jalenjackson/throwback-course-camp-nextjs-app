import React from 'react';
import ConfirmDeleteSectionModal from './DeleteSectionModal/DeleteSectionModal';
import AddNewVideoModal from './AddNewVideoModal/AddNewVideoModal';
import EditVideoModal from './EditVideoModal/EditVideoModal';
import AddQuizToVideoModal from './AddQuizToVideoModal/AddQuizToVideoModal';
import ErrorModal from './ErrorModal/ErrorModal';
import AddCodingChallengeModal from './AddCodingChallenge/AddCodingChallenge';
import AddCrunchModal from './AddCrunchModal/AddCrunchModal';
import AddCodingProjectModal from './AddCodingProject/AddCodingProjectModal';
import AddPictureQuizModal from './AddPictureQuizModal/AddPictureQuizModal';
import AddMatchGameModal from './AddMatchGameModal/AddMatchGameModal';
import AddExerciseModal from './AddExerciseModal';

const Modals = props => (
  <div>
    <ConfirmDeleteSectionModal { ...props } />
    <AddNewVideoModal { ...props } />
    <EditVideoModal { ...props } />
    <AddQuizToVideoModal { ...props } />
    <AddCodingChallengeModal { ...props } />
    <AddCrunchModal { ...props } />
    <AddCodingProjectModal { ...props } />
    <AddPictureQuizModal { ...props } />
    <AddMatchGameModal { ...props } />
    <AddExerciseModal { ...props } />
    <ErrorModal />
  </div>
);

export default Modals;
