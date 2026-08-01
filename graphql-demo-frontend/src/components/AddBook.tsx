import { useState } from "react";
import { useMutation } from "@apollo/client/react";
import { ADD_BOOK } from "../graphql/mutations";
import { GET_BOOKS } from "../graphql/queries";

import type { GetBooksQuery } from "../generated/graphql";

type BookListItem = GetBooksQuery["books"][number];


interface GetBooksData {
  books: BookListItem[];
}

export function AddBookForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const [addBook, { loading, error }] = useMutation(ADD_BOOK, {
    update(cache, result) {
      const newBook = result.data?.addBook.book;
      if (!newBook) return;

      const existing = cache.readQuery<GetBooksData>({ query: GET_BOOKS });
      if (!existing) return;

      cache.writeQuery<GetBooksData>({
        query: GET_BOOKS,
        data: { books: [...existing.books, newBook] },
      });
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await addBook({
      variables: {
        input: { title, author, clientMutationId: null },
      },
    });

    const payload = result.data?.addBook;

    if (payload?.success) {
      setTitle("");
      setAuthor("");
    } else {
      alert(payload?.message ?? "Failed to add book.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a Book</h2>
      <div>
        <label>
          Title:
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Author:
          <input value={author} onChange={(e) => setAuthor(e.target.value)} />
        </label>
      </div>
      <button type="submit" disabled={loading}>
        {loading ? "Adding..." : "Add Book"}
      </button>
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </form>
  );
}