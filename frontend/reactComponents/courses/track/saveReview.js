import { GraphQlMutate, GraphQlDevURI } from "../../../../globalHelpers/axiosCalls";
import { message } from "antd";
import GlobalLocalization from '../../../../globalLocalization';

export const saveReview = async (rating, textAreaValue, props) => {
  try {
    await GraphQlMutate(GraphQlDevURI, `
    mutation {
      reviewCourse(courseId: "${props.course._id}", rating: ${rating}, description: "${textAreaValue}") {
        title
        reviews {
          userId
          rating
          description
        }
      }
    }
  `, props.auth.token);
    message.success('Thank you for contributing! You review was saved successfully!');
    props.container.updateState('showReviewModal', false);
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError)
  }
};