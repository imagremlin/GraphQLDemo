export interface Review {
  id: number;
  content: string;
  rating: number;
}

export interface Book {
  id: number;
  title: string;
  author: string;
  reviews: Review[];
}

export interface AuthPayload {
  success: boolean;
  token?: string | null;
  message?: string | null;
}

export interface AddBookPayload {
  success: boolean;
  message?: string | null;
  book?: Book | null;
}

export interface UpdateBookPayload {
  success: boolean;
  message?: string | null;
  book?: Book | null;
}

export interface DeleteBookPayload {
  success: boolean;
  message?: string | null;
  bookId: number;
}