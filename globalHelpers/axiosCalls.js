import axios from 'axios';

export const GraphQlDevURI = 'http://localhost:5000/graphql';
export const host = 'http://localhost:5000';

export const GraphQlMutate = async (uri, query, token) => {
  try {
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${ token }` : 'undefined'
    };
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
