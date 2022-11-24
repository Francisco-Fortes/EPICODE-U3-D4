import { Card } from "react-bootstrap";
import "./single-book.css";
// import fantasyBook from "../../Data/books/fantasy.json";

const SingleBook = ({ book }) => {
  return (
    <Card key={book.asin} style={{ width: "18rem" }}>
      <Card.Img variant="top" src={book.img} alt={book.title} />
      <Card.Body>
        <Card.Title class="red-text">{book.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};
export default SingleBook;
