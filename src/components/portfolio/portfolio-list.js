import React, { useState, useEffect } from "react";
import firebase from "../../firebase";

const SORT_OPTIONS = {
  TITLE_ASC: { column: "title", direction: "asc" },
  TITLE_DESC: { column: "title", direction: "desc" }
};

const PortfolioList = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [sortBy, setSortBy] = useState("TITLE_ASC");

  useEffect(() => {
    const unsuscribe = firebase
      .firestore()
      .collection("portfolio")
      .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
      .onSnapshot(snapshot => {
        const newPortfolios = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setPortfolios(newPortfolios);
      });

    return () => unsuscribe();
  }, [sortBy]);

  return (
    <div>
      <h2>Portfolio</h2>
      <select value={sortBy} onChange={e => setSortBy(e.currentTarget.value)}>
        <option value="TITLE_ASC">Title (A-Z)</option>
        <option value="TITLE_DESC">Title (Z-A)</option>
      </select>
      <ol>
        {portfolios.map(portfolio => (
          <li key={portfolio.id}>{portfolio.title}</li>
        ))}
      </ol>
    </div>
  );
};

export default PortfolioList;
