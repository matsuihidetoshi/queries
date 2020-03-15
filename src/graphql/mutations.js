/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createConformation = /* GraphQL */ `
  mutation CreateConformation(
    $input: CreateConformationInput!
    $condition: ModelConformationConditionInput
  ) {
    createConformation(input: $input, condition: $condition) {
      id
      answer
      token
    }
  }
`;
export const updateConformation = /* GraphQL */ `
  mutation UpdateConformation(
    $input: UpdateConformationInput!
    $condition: ModelConformationConditionInput
  ) {
    updateConformation(input: $input, condition: $condition) {
      id
      answer
      token
    }
  }
`;
export const deleteConformation = /* GraphQL */ `
  mutation DeleteConformation(
    $input: DeleteConformationInput!
    $condition: ModelConformationConditionInput
  ) {
    deleteConformation(input: $input, condition: $condition) {
      id
      answer
      token
    }
  }
`;
