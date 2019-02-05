import { GraphQlDevURI, GraphQlMutate } from '../../../../../globalHelpers/axiosCalls';

export const call = async (context, term) => {
  if (term !== '') {
    try {
      const queryMainSearch = await GraphQlMutate(GraphQlDevURI, `
          query {
            globalAutocomplete(term: "${term}") {
              title
            }
          }
        `);
      const queryMainSearchResults = queryMainSearch.data.data.globalAutocomplete;
      const tmpQueryMainSearchResultsArray = [];
      if (queryMainSearchResults.length > 0) {
        queryMainSearch.data.data.globalAutocomplete.map((course) => {
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
