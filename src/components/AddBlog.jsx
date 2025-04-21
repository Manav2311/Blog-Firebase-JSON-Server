import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';


function AddBlog() {
    let [category, setCategory] = useState(
        ["Entertainment", "Technology", "Sports", "Business", "Health", "Science"]
    );
    let [blog, setBlog] = useState({});
    let navigate = useNavigate();

    let getInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setBlog({ ...blog, [name]: value });
    }

    let submitData = async (e) => {
        e.preventDefault();
        console.log(blog);
        let addBlog = await Axios.post("http://localhost:3000/Blogs", blog)
        navigate("/blog")
    }
    return (
        <Container className="add-blog-wrapper">
            <Row>
                <Col>
                    <h2 style={{ textAlign: "center" }}>Add Blog Details</h2>
                    <Form onSubmit={(e) => submitData(e)} method='post'>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                Category
                            </Form.Label>
                            <Col sm="10">
                                <Form.Select
                                    aria-label="Default select example"
                                    name='category'
                                    onChange={(e) => getInput(e)}
                                >
                                    <option value="">--Select Category--</option>
                                    {category.map((v, i) => {
                                        return <option value={v}>{v}</option>
                                    })}
                                </Form.Select>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                Title
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control
                                    type='text'
                                    name='title'
                                    onChange={(e) => getInput(e)}
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Blogger Name
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control
                                    type="text"
                                    name='bloggerName'
                                    onChange={(e) => getInput(e)}
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Description
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    name='description'
                                    onChange={(e) => getInput(e)}
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Image
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control
                                    type="text"
                                    name='image'
                                    onChange={(e) => getInput(e)}
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">

                            </Form.Label>
                            <Col sm="10">
                                <Button type='submit'>Add Blog</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}


export default AddBlog;