import { Link } from "react-router-dom";

export default function BookPreview({ book }) {
  const { author, coverimage, title, id } = book;
  return (
    <li>
      <Link to={{ pathname: `/books/${id}` }} state={{ book }}>
        <h3>{title}</h3>
        <p>By {author}</p>
        <img src={coverimage} alt={title} />
      </Link>
    </li>
  );
}
