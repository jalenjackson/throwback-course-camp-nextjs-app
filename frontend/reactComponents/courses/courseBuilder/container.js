import { Container } from 'unstated';

class NavbarContainer extends Container {
  state = {
    sections: [],
  };

  updateState = (state, value) => {
    this.setState({ [state]: value });
  };
}

/*
sections: [
    0: [{ videoLocation: 'idk', ...practiceExercises }, { videoId: '2', videoLocation: 'idk', ...practiceExercises }],
    1: [{ videoLocation: 'idk', ...practiceExercises }, { videoId: '2', videoLocation: 'idk', ...practiceExercises }]
];
*/

export default NavbarContainer;
