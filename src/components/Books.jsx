import BookPreview from "./BookPreview";

export default function Books({ books }) {
  return (
    <div>
      <h2>Books</h2>
      <ul>
        {books.map((book, index) => (
          <BookPreview book={book} key={index} />
        ))}
      </ul>
    </div>
  );
}
