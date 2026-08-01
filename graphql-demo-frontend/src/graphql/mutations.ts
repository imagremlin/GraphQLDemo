import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      success
      token
      message
    }
  }
`;

export const REGISTER = gql`
  mutation Register($username: String!, $password: String!) {
    register(username: $username, password: $password) {
      success
      message
    }
  }
`;

export const ADD_BOOK = gql`
  mutation AddBook($input: AddBookInput!) {
    addBook(input: $input) {
      success
      message
      book {
        id
        title
        author
        reviews {
          id
          content
          rating
        }
      }
    }
  }
`;

export const UPDATE_BOOK = gql`
  mutation UpdateBook($input: UpdateBookInput!) {
    updateBook(input: $input) {
      success
      message
      book {
        id
        title
        author
      }
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation DeleteBook($input: DeleteBookInput!) {
    deleteBook(input: $input) {
      success
      message
      bookId
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation AddReview($input: AddReviewInput!) {
    addReview(input: $input) {
      success
      message
      review {
        id
        content
        rating
      }
    }
  }
`;