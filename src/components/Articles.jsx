import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
const Articles = (props) => {
  return (
    <>
     <div className="container">
        {props.Article.map((article, index) => (
          
          <Card style={{ width: "18rem" }} key={index} className="article-card">
            <Card.Img variant="top" src={article.thumbnail} alt="blog" />
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>
              <Card.Text>{article.content[0].substring(0, 110)}</Card.Text>
              <Link to={`/article/${article.name}`}>
                <Button variant="success">Learn more</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>    
    </>
  )
}

export default Articles