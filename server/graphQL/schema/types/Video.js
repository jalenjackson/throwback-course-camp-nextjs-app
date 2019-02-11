exports.Video = `
  type Video {
    title: String!
    description: String!
    videoLocation: String!
    quiz: [Quiz]
    pictureQuiz: [PictureQuiz]
  }
`;
