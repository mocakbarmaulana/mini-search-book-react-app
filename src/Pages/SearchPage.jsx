import { useState } from "react";
import axios from "axios";

// Components
import Navbar from "../components/Navbar/Navbar";
import Input from "../components/Input/Input";
import ListBooks from "../components/ListBooks/ListBooks";
import Loading from "../components/Loading/Loading";
import Empty from "../components/Empty/Empty";

const SearchPage = () => {
  const [searchBook, setSearchBook] = useState("");
  const [books, setBooks] = useState({ items: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  let API_URL = "https://www.googleapis.com/books/v1/volumes";

  const FetchBooks = async () => {
    setLoading(true);
    try {
      const result = await axios.get(`${API_URL}?q=${searchBook}`);
      setBooks(result.data);
    } catch (err) {
      console.error(err);
      setError(true);
    }
    setLoading(false);
  };

  const HandlerSubmit = (e) => {
    e.preventDefault();
    FetchBooks();
    setBooks({ items: [] });
    setError(false);
  };
  return (
    <>
      <Navbar />
      <div className="content">
        <Input
          change={(e) => setSearchBook(e.target.value)}
          value={searchBook}
          submit={HandlerSubmit}
        />

        {loading && <Loading />}
        {books.items.map((book, index) => (
          <ListBooks
            image={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
            title={book.volumeInfo.title}
            tahun={book.volumeInfo.publishedDate}
            id={book.id}
            key={index}
          />
        ))}
        {error && <Empty />}
      </div>
    </>
  );
};

export default SearchPage;
