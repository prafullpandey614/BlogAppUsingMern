import React from "react";

import Article from "./ArticleContent";

import "./al.css"
import Articles from "../components/Articles";
const ArticleList = () => {
  return (
    <>
      {console.log(Article)}
      <h1 className="text-center">
        Articles
      </h1>
      <div className="container"> <Articles Article={Article}/></div>
     
    </>
  );
};

export default ArticleList;
