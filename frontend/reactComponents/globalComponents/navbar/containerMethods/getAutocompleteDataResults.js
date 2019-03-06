import { GraphQlDevURI, GraphQlMutate } from '../../../../../globalHelpers/axiosCalls';

export const call = async (context, term) => {
  if (term !== '') {
    try {
      const queryMainSearch = await GraphQlMutate(GraphQlDevURI, `
          query {
            globalAutocomplete(term: "${term}", limit: 9, skip: 0) {
              courses {
                title
              }
            }
          }
        `);
      const queryMainSearchResults = queryMainSearch.data.data.globalAutocomplete.courses;
      const tmpQueryMainSearchResultsArray = [];
      if (queryMainSearchResults.length > 0) {
        queryMainSearch.data.data.globalAutocomplete.courses.map((course) => {
          tmpQueryMainSearchResultsArray.push(course.title);
        });
        context.setState({ autoCompleteDataSource: tmpQueryMainSearchResultsArray });
      } else {
        context.setState({ autoCompleteDataSource: [] });
      }
    } catch (e) {
      context.setState({ autoCompleteDataSource: [] });
    }
  } else {
    context.setState({ autoCompleteDataSource: [] });
  }
};
