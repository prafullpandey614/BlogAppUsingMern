import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
// import articles from "./ArticleContent";
import articleContent from "./ArticleContent";
import Articles from "../components/Articles";
import NotFound from "./NotFound";

const Article = () => {
  const { name } = useParams();
  const article = articleContent.find((article) => article.name === name);
  if (!article) return <NotFound/>;
  const OtherArticles = articleContent.filter((article) => article.name!==name);
  return (
    <>
    <div className="container">
      <h1>{article.title}</h1>
      {article.content.map((paragraph, index) => (
        <p key={index}>
          {paragraph}
          
        </p>
      ))}
    </div>
    <h2 className="text-center container">Other Articles Published</h2>
    <Articles Article={OtherArticles} />
      
  </>
  );
};

export default Article;
