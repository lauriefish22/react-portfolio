import React, { useState } from 'react';
import handle from '../images/handle.png';
import { CardBody, CardTitle, CardSubtitle, CardText, Button, Card } from 'reactstrap';
// import { Container, Row, Col } from 'reactstrap';
import { Container, Row, Col } from 'react-bootstrap';

function Projects() {
    return (
        <Container fluid className='all-projects'>
            <div className='main'>
                <div className='projects'>
                    <div className='header'>
                        <h1>Here are my projects</h1>
                    </div>
                    <Row xs="2">
                        <Col md={4} className="bg-dark-border">

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
                        <Col md={4} className="bg-dark-border">
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
                        <Col md={4} className="bg-dark-border">
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
                        <Col md={4} className="bg-dark-border">
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
            </div>
        </Container>

    )
}
export default Projects;