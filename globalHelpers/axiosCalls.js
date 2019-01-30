import axios from 'axios';

export const GraphQlDevURI = 'http://localhost:5000/graphql';

export const GraphQlMutate = async (uri, query) => {
  try {
    let headers = { 'Content-Type': 'application/json' };
    const graphQlQuery = {
      query: `
        ${query}
      `
    };
    return axios.post(uri,
      JSON.stringify(graphQlQuery),
      { headers })
  } catch (e) {
    return e;
  }
};
