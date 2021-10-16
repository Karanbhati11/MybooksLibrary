import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import { BooksArray } from "./BooksArray";
import BookComponent from "./BookComponent";
import Navbar from "./Navbar";

function Books() {
  return (
    <>
      <Navbar />
      <section>
        <div className="booklist">
          {BooksArray.map((book) => {
            return <BookComponent key={book.id} {...book}></BookComponent>;
          })}
        </div>
      </section>
    </>
  );
}

ReactDom.render(<Books />, document.getElementById("root"));
