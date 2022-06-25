import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {data} from "./books";
import SpecificBook from "./Book";
function BookList() {
    return (
        <section className="booklist">
            {data.map((book, index) => {
                return <SpecificBook key={index} {...book}></SpecificBook>;
            })}
        </section>
    );
}
const Book = () => {
    return (
        <article className="book">
            <img
                src="https://images-na.ssl-images-amazon.com/images/I/91tO0NfkvcL._AC_UL302_SR302,200_.jpg"
                alt="books"
            />
            <h2>The 7 Habits of Highly Effective Teens</h2>
            <h4>Sean Covey</h4>
        </article>
    );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
