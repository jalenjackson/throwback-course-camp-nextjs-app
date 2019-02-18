import btoa from 'btoa';
import { message } from 'antd';
import { cleanData } from './helpers';
import { sessionExpired } from './helpers';
import { GraphQlDevURI, GraphQlMutate } from '../../../../../globalHelpers/axiosCalls';
import GlobalLocalization from '../../../../../globalLocalization';

export const callSaveCourse = async (context, token, navbarContainer, auth) => {
  try {
    const loadingIndicator = message.loading('Getting you all set up...', 0);
    context.setState({isSavingCourse: true});
    if (allFieldsAreFilledIn(context)) {
      const saveCourseResponse = await GraphQlMutate(GraphQlDevURI, `
      mutation {
        createCourse(courseInput: {
          title: "${cleanData(context.state.title)}",
          description: "${ btoa(unescape(encodeURIComponent(context.state.description))) }",
          category: "${cleanData(context.state.category)}", 
          price: ${+context.state.price},
          color: "${context.state.color}",
          language: "${context.state.language}",
          learning: "${context.state.learning}",
          summary: "${context.state.summary}",
          rating: 0
        }) {
          title
        }
      }
    `, token);
      const courseResponseBody = saveCourseResponse.data;
      console.log(courseResponseBody.errors)
      if (courseResponseBody.errors && courseResponseBody.errors.length > 0) {
        if (courseResponseBody.errors[0].message === 'Unauthenticated!') {
          context.setState({isSavingCourse: false});
          setTimeout(loadingIndicator, 10);
          sessionExpired(navbarContainer);
        } else {
          context.setState({isSavingCourse: false});
          setTimeout(loadingIndicator, 0.01);
          message.error(GlobalLocalization.UnexpectedError);
        }
      } else {
        if (courseResponseBody.data.createCourse !== null) {
          context.setState({isSavingCourse: false});
          message.success(`Awesome ${auth.name}! Now it's time to start adding your content`);
          localStorage.removeItem('newCourseLocalState');
          setTimeout(loadingIndicator, 10);
        } else {
          setTimeout(loadingIndicator, 10);
          message.error(GlobalLocalization.UnexpectedError);
        }
      }
    } else {
      setTimeout(loadingIndicator, 10);
      context.setState({isSavingCourse: false});
      message.error(GlobalLocalization.FieldsNotFilledIn)
    }
  } catch (e) {
    console.log(e)
  }
};

const allFieldsAreFilledIn = context => {
  return (context.state.title
    && context.state.description
    && context.state.category
    && context.state.summary
    && context.state.price
    && context.state.color
    && context.state.learning.length > 0
    && context.state.language);
};
