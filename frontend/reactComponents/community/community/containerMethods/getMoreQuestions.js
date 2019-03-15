import {GraphQlDevURI, GraphQlMutate} from "../../../../../globalHelpers/axiosCalls";

export const call = async (context, skipAmount) => {
  await context.setState({ isPaginating: true });
  const forumQuestions = await GraphQlMutate(GraphQlDevURI, `
      {
        forumQuestions(limit: 5, skip: ${ skipAmount }) {
          forumQuestionLength
          forumQuestions {
            _id
            title
            body
            date
            exercise
            sectionIndex
            videoIndex
            course {
              title
              color
              sections {
                title
                videos {
                  title
                }
              }
            }
            creator {
              _id
              name
              profileImage
            }
          }
      }
    }
  `);
  await context.setState({
    forumQuestions: forumQuestions.data.data.forumQuestions.forumQuestions,
    isPaginating: true
  });
};