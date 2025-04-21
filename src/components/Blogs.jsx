import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Blog() {
    let [blog, setBlog] = useState([]);
    let [sorting, setSorting] = useState("All");

    let categoryList = [
        "All",
        "Entertainment",
        "Technology",
        "Sports",
        "Business",
        "Health",
        "Science"
    ];

    useEffect(() => {
        getBlog();
    }, []);

    let getBlog = async () => {
        let blogData = await Axios.get("http://localhost:3000/Blogs");
        setBlog(blogData.data);
    };

    let filteredBlogs = sorting === "All"
        ? blog
        : blog.filter(item => item.category === sorting);

    return (
        <Container>
            <Row className='my-3 blog-section'>
                <Col>
                    {categoryList.map((cat, i) => (
                        <Button
                            key={i}
                            variant={sorting === cat ? "dark" : "outline-dark"}
                            onClick={() => setSorting(cat)}
                            className="m-1"
                        >
                            {cat}
                        </Button>
                    ))}
                </Col>
            </Row>

            <Row>
                {filteredBlogs.length === 0 ? (
                    <h5 style={{ textAlign: "center" }}>No blogs are avalable.</h5>
                ) : (
                    filteredBlogs.map((v, i) => (
                        <Col md="auto" key={i}>
                            <Card style={{ width: '18rem' }} className="mb-3">
                                <Card.Img variant="top" src={v.image} />
                                <Card.Body>
                                    <Card.Title>{v.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{v.price}</Card.Subtitle>
                                    <Card.Text>{v.description.slice(0, 100)}...</Card.Text>
                                    <Link to={`/blogDetails/${v.id}`}>
                                        <Button variant="primary">View More</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                )}
            </Row>
        </Container>
    )
}

export default Blog;
