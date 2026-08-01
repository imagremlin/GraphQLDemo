/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import * as Types from './graphql-types';

export type AddBookInput = {
  author: string;
  clientMutationId?: string | null | undefined;
  title: string;
};

export type AddReviewInput = {
  bookId: number;
  clientMutationId?: string | null | undefined;
  content: string;
  rating: number;
};

export type DeleteBookInput = {
  clientMutationId?: string | null | undefined;
  id: number;
};

export type UpdateBookInput = {
  author?: string | null | undefined;
  clientMutationId?: string | null | undefined;
  id: number;
  title?: string | null | undefined;
};

export type LoginMutationVariables = Exact<{
  username: string;
  password: string;
}>;


export type LoginMutation = { login: { success: boolean, token: string | null, message: string | null } };

export type RegisterMutationVariables = Exact<{
  username: string;
  password: string;
}>;


export type RegisterMutation = { register: { success: boolean, message: string | null } };

export type AddBookMutationVariables = Exact<{
  input: Types.AddBookInput;
}>;


export type AddBookMutation = { addBook: { success: boolean, message: string | null, book: { id: number, title: string, author: string, reviews: Array<{ id: number, content: string, rating: number }> } | null } };

export type UpdateBookMutationVariables = Exact<{
  input: Types.UpdateBookInput;
}>;


export type UpdateBookMutation = { updateBook: { success: boolean, message: string | null, book: { id: number, title: string, author: string } | null } };

export type DeleteBookMutationVariables = Exact<{
  input: Types.DeleteBookInput;
}>;


export type DeleteBookMutation = { deleteBook: { success: boolean, message: string | null, bookId: number } };

export type AddReviewMutationVariables = Exact<{
  input: Types.AddReviewInput;
}>;


export type AddReviewMutation = { addReview: { success: boolean, message: string | null, review: { id: number, content: string, rating: number } | null } };

export type GetBooksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBooksQuery = { books: Array<{ id: number, title: string, author: string, reviews: Array<{ id: number, content: string, rating: number }> }> };
