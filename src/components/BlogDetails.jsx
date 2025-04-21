import React, { useEffect, useState } from 'react';
import { Links, useParams } from 'react-router-dom';
import Axios from 'axios';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

function BlogDetails() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await Axios.get(`http://localhost:3000/Blogs/${id}`);
                setBlog(response.data);
            } catch (error) {
                console.error("Error fetching blog details:", error);
            }
        };
        fetchBlog();
    }, [id])

    if (!blog) {
        return <div
            style={{ textAlign: "center", marginTop: "50px" }}
        >
            Loading blog details...
        </div>;
    }

    return (
        <Container className="my-5">
            <Row className="mb-4">
                <Col md={12}>
                    <h2>{blog.title}</h2>
                    <h5 className="text-muted">By {blog.bloggerName}</h5>
                    <p className="text-secondary"><strong>Category:</strong> {blog.category}</p>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <Image src={blog.image} alt={blog.title} fluid rounded />
                </Col>
                <Col md={6}>
                    <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>{blog.description}</p>
                </Col>
            </Row> 
        </Container>
    );
}

export default BlogDetails;
