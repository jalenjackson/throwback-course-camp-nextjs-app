import { GraphQlMutate, GraphQlDevURI } from "../../../../globalHelpers/axiosCalls";
import { message } from "antd";
import GlobalLocalization from '../../../../globalLocalization';
import { Router } from '../../../../routes';

export const saveReview = async (rating, textAreaValue, props) => {
  try {
    await GraphQlMutate(GraphQlDevURI, `
    mutation {
      reviewCourse(courseId: "${props.course._id}", rating: ${rating}, description: "${textAreaValue}") {
        title
        reviews {
          userId {
            name
          }
          rating
          description
        }
      }
    }
  `, props.auth.token);
    message.success('Thank you for contributing! Your review was saved successfully!');
    props.container.updateState('showReviewModal', false);
    if (props.fromEndCourse) {
      setTimeout(() => {
        window.location.href = `/courses/view/${ props.course._id }/track`;
      }, 500)
    }
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError)
  }
};