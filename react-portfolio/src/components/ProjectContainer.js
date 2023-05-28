import React from 'react';
import handle from '../images/handle.png';
import { CardBody, CardTitle, CardSubtitle, CardText, Button, Card } from 'reactstrap';
// import { Container, Row, Col } from 'reactstrap';
import { Container, Row, Col } from 'react-bootstrap';
import "../App.css";

function Projects() {
    return (
        <Container className='all-projects'>
            <div className='header'>
                <h1>Here are my projects</h1>
            </div>

            <div className='projects'>

                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col>

                        <Card
                            color="light"
                            style={{
                                width: '18rem'
                            }}
                        >
                            <img
                                alt="Sample"
                                // src="https://picsum.photos/300/200"
                                src={handle}
                                width='100%'
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    Card title
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Card subtitle
                                </CardSubtitle>
                                <CardText>
                                    Some quick example text to build on the card title and make up the bulk of the card‘s content.
                                </CardText>
                                <Button>
                                    Button
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card
                            color="light"
                            style={{
                                width: '18rem'
                            }}
                        >
                            <img
                                alt="Sample"
                                // src="https://picsum.photos/300/200"
                                src={handle}
                                width='100%'
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    Card title
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Card subtitle
                                </CardSubtitle>
                                <CardText>
                                    Some quick example text to build on the card title and make up the bulk of the card‘s content.
                                </CardText>
                                <Button>
                                    Button
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>

                    <Col md={4} className="project-card">
                        <Card
                            color="light"
                            style={{
                                width: '18rem'
                            }}
                        >
                            <img
                                alt="Sample"
                                // src="https://picsum.photos/300/200"
                                src={handle}
                                width='100%'
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    Card title
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Card subtitle
                                </CardSubtitle>
                                <CardText>
                                    Some quick example text to build on the card title and make up the bulk of the card‘s content.
                                </CardText>
                                <Button>
                                    Button
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={4} className="project-card">
                        <Card
                            color="light"
                            style={{
                                width: '18rem'
                            }}
                        >
                            <img
                                alt="Sample"
                                // src="https://picsum.photos/300/200"
                                src={handle}
                                width='100%'
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    Card title
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Card subtitle
                                </CardSubtitle>
                                <CardText>
                                    Some quick example text to build on the card title and make up the bulk of the card‘s content.
                                </CardText>
                                <Button>
                                    Button
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>


            </div>

        </Container >

    )
}
export default Projects;