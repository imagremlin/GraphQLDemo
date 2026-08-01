import { gql, type TypedDocumentNode } from "@apollo/client";
import type { AddBookMutation, AddBookMutationVariables, AddReviewMutation, AddReviewMutationVariables, DeleteBookMutation, DeleteBookMutationVariables, LoginMutation, LoginMutationVariables, RegisterMutation, RegisterMutationVariables, UpdateBookMutation, UpdateBookMutationVariables } from "../generated/graphql";


export const LOGIN : TypedDocumentNode<LoginMutation, LoginMutationVariables>  = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      success
      token
      message
    }
  }
`;

export const REGISTER: TypedDocumentNode<RegisterMutation, RegisterMutationVariables>= gql`
  mutation Register($username: String!, $password: String!) {
    register(username: $username, password: $password) {
      success
      message
    }
  }
`;

export const ADD_BOOK: TypedDocumentNode<AddBookMutation, AddBookMutationVariables> = gql`
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

export const UPDATE_BOOK: TypedDocumentNode<UpdateBookMutation, UpdateBookMutationVariables> = gql`
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

export const DELETE_BOOK : TypedDocumentNode<DeleteBookMutation, DeleteBookMutationVariables> = gql`
  mutation DeleteBook($input: DeleteBookInput!) {
    deleteBook(input: $input) {
      success
      message
      bookId
    }
  }
`;

export const ADD_REVIEW: TypedDocumentNode<AddReviewMutation, AddReviewMutationVariables> = gql`
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