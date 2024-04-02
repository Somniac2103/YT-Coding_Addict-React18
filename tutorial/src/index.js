import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

// function Greeting() {
//   return <h2>My First Component</h2>;
// }
// function Greeting() {
//   return React.createElement("h2", {}, "hello world");
// }
// function Greeting() {
//   return (
//     <div>
//       <h2>My new element</h2>
//     </div>
//   );
// }
const title = "Interesting Title";

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
    </section>
  );
};

const Book = (props) => {
  return (
    <article className="booklist">
      <Image />
      <Title />
      <Author />
    </article>
  );
};
const author = "Bill";
const Image = () => <h2>Image placeholder</h2>;
const Title = () => <h2>{title}</h2>;
const Author = () => {
  return (
    <h2 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "2rem" }}>
      {author}
    </h2>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
