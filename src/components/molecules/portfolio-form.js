import React, { useState } from "react";
import firebase from "../../firebase";

const PortfolioForm = () => {
  const [title, setTitle] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    firebase
      .firestore()
      .collection("portfolio")
      .doc(title.replace(/\s+/g, "").toLowerCase())
      .set({
        title
      })
      .then(() => {
        setTitle("");
      });
  }

  return (
    <div>
      <h2>Add Portfolio</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="p_title">Title</label>
          <input
            id="p_title"
            type="text"
            value={title}
            onChange={e => setTitle(e.currentTarget.value)}
          ></input>
        </div>
        <button>Add Portfolio</button>
      </form>
    </div>
  );
};

export default PortfolioForm;
