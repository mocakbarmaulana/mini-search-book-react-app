import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import DetailBook from "../components/DetailBook/DetailBook";
import Empty from "../components/Empty/Empty";
import Loading from "../components/Loading/Loading";
import Navbar from "../components/Navbar/Navbar";

const BookDetailPage = ({ match }) => {
  const {
    params: { id },
  } = match;
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  let API_URL = "https://www.googleapis.com/books/v1/volumes/";

  useEffect(() => {
    setLoading(true);
    const FetchDetailBook = async () => {
      try {
        const result = await axios.get(`${API_URL}${id}`);
        setBook(result.data);
      } catch (err) {
        console.error(err);
        setError(true);
      }
      setLoading(false);
    };

    FetchDetailBook();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="content">
        {loading && <Loading />}
        {book && (
          <DetailBook
            title={book.volumeInfo.title}
            id={book.id}
            page={book.volumeInfo.pageCount}
            publishers={book.volumeInfo.publisher}
            rilis={book.volumeInfo.publishedDate}
            authors={book.volumeInfo.authors}
          />
        )}
        {error && <Empty />}
      </div>
    </>
  );
};

export default BookDetailPage;
