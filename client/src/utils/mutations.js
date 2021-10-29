import { gql } from '@apollo/client';
//original poster 
//ADD USER ID TO POST. MUST KNOW POSTER. 
export const ADD_PRODUCT = gql`
  mutation addProduct(
    $title: String!
    $description: String!
    $price: String!
  ) {
    addProduct(
      title: $title
      description: $description
      price: $price
    ) 
      user {
        _id
      }
  }
`;
