import Axios from "axios";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function ShowBlog() {
  let [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs();
  }, [setBlogs]);

  let getBlogs = async () => {
    let blogsData = await Axios.get("http://localhost:3000/Blogs");
    console.log(blogsData);

    setBlogs(blogsData.data);
  };
  return (
    <Container>
      <Row>
        {blogs.map((val, i) => {
          return (
            <Col md="auto">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={val.image} />
                <Card.Body>
                  <Card.Title>{val.title}</Card.Title>
                  <Card.Title>{val.bloggerName}</Card.Title>
                  <Card.Text>{val.description.slice(0, 100)}...</Card.Text>
                  <Link to={`/blogDetails/${val.id}`}>
                    <Button variant="primary">View More</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default ShowBlog;
