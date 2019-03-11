import axios from 'axios';

console.log('enviorment', process.env.NODE_ENV);

export const GraphQlDevURI = 'http://localhost:8080/graphql';
export const host = 'http://localhost:8080';

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
