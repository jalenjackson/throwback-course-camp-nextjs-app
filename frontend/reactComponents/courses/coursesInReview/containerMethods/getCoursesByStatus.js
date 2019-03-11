import { GraphQlDevURI, GraphQlMutate } from "../../../../../globalHelpers/axiosCalls";
import GlobalLocalization from "../../../../../globalLocalization";

export const call = async (context, auth, status) => {
  try {
    await context.setState({ isFetching: true });
    const courses = await GraphQlMutate(GraphQlDevURI, `
      {
        courseByStatus(status: "${ status }") {
          title
          _id
          date
          creator {
            name
            _id
          }
        }
      }
    `, auth.token);
    context.setState({ [`currentCourses${ status }`]: courses.data.data.courseByStatus, isFetching: false });
  } catch (e) {
    message.error(GlobalLocalization.UnexpectedError)
  }
};