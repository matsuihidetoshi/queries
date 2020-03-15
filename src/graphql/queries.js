/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getConformation = /* GraphQL */ `
  query GetConformation($id: ID!) {
    getConformation(id: $id) {
      id
      answer
      token
    }
  }
`;
export const listConformations = /* GraphQL */ `
  query ListConformations(
    $filter: ModelConformationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConformations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        answer
        token
      }
      nextToken
    }
  }
`;
