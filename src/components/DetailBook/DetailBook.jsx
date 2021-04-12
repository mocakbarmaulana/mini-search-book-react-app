import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import "./DetailBook.css";

const DetailBook = ({ id, title, authors, publishers, rilis, page }) => {
  return (
    <div className="detail-book-box">
      <div className="detail-book">
        <div className="detail-logo">
          <img
            src={`http://books.google.com/books/content?id=${id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
            alt="logo book"
            className="detail-logo-book"
          />
        </div>
        <ul className="detail-book-info">
          <li>
            <h1>Title : {title}</h1>
          </li>
          <li>
            <strong>Authors : </strong>
            <span>{authors[0]}</span>
          </li>
          <li>
            <strong>Publisher : </strong>
            <span>{publishers}</span>
          </li>
          <li>
            <strong>Rilis : </strong>
            <span>{rilis}</span>
          </li>
          <li>
            <strong>Page Count : </strong>
            <span>{page}</span>
          </li>
        </ul>
      </div>
      <Link to="/" className="btn-back">
        <ArrowBackIcon />
        <span> Back</span>
      </Link>
    </div>
  );
};

DetailBook.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  publishers: PropTypes.string,
  rilis: PropTypes.string,
  page: PropTypes.number,
  authors: PropTypes.array,
};

export default DetailBook;
