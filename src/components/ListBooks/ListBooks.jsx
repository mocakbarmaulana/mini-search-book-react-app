import React from "react";
import PropTypes from "prop-types";

// Styling
import "./ListBooks.css";
import { Link } from "react-router-dom";

const ListBooks = ({ image, title, tahun, id }) => {
  return (
    <div className="list-books">
      <div className="book">
        <img src={image} alt="book logo" className="img-book" />
        <div className="book-info">
          <h3>{title}</h3>
          <p>{tahun}</p>
        </div>
        <Link to={`/book/${id}`} className="btn-detail">
          Show Detail
        </Link>
      </div>
    </div>
  );
};

ListBooks.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  tahun: PropTypes.string,
};

export default ListBooks;
