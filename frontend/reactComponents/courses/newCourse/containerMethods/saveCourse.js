import btoa from 'btoa';
import { message } from 'antd';
import { cleanData } from './helpers';
import {GraphQlDevURI, headers} from '../../../../../globalHelpers/axiosCalls';
import GlobalLocalization from '../../../../../globalLocalization';
import { Router } from '../../../../../routes';
import axios from "axios";

export const callSaveCourse = async (context, auth) => {
  const loadingIndicator = message.loading('Getting you all set up...', 0);
  try {
    context.setState({ isSavingCourse: true });
    if (allFieldsAreFilledIn(context)) {
      
      const query = `
        mutation($courseInput: CourseInput) {
        createCourse(courseInput: $courseInput) {
          _id
          title
        }
      }
      `;
  
      const updateVideoDetailsResponse = await axios.post(GraphQlDevURI, JSON.stringify({
        query,
        variables: {
          courseInput: {
            title: cleanData(context.state.title),
            description: btoa(unescape(encodeURIComponent(context.state.description))),
            category: cleanData(context.state.category),
            price: +context.state.price,
            color: context.state.color,
            language: context.state.language,
            learning: context.state.learning,
            summary: context.state.summary,
            rating: 0
          }
        }
      }), { headers: headers(auth.token) });
      
      context.setState({ isSavingCourse: false });
      message.success(`Awesome ${ auth.name }! Now it's time to start adding your content`);
      localStorage.removeItem('newCourseLocalState');
      setTimeout(loadingIndicator, 10);
      Router.pushRoute(`/courses/build/${ updateVideoDetailsResponse.data.data.createCourse._id }?newcourse=true`)
    }
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError);
    setTimeout(loadingIndicator, 10);
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
