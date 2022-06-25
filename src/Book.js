import React from "react";

const Book = ({title, img, author}) => {
    return (
        <article className="book">
            <img src={img} alt="img" />
            <h2>{title}</h2>
            <h4>{author}</h4>
        </article>
    );
};

export default Book;
