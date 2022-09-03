import React from "react";
import Card from 'react-bootstrap/Card';
import image from './images/images.jpg';
function GarageWale() {
    return (
        <body>
            <section className="background-radial-gradient overflow-hidden">
                <div className="container px-4 py-5 px-md-5 text-lg-start my-2">
                    <div className="row gx-lg-5 align-items-flex-start mb-5">
                        <div className="col-md-0 mb-4">
                        </div>
                        <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: "10" }}>
                            <p className="mb-4 opacity-70" style={{ color: "hsl(218, 81%, 85%)" }}>
                                <Card bg="light" text="dark">
                                <Card.Header>List of requests</Card.Header>
                                </Card> <br/>
                                <Card style={{ width: '19rem', height: "25rem" }} className="bg-dark text-white">
                                    <Card.Img variant="top" src={image} />
                                    <Card.Body>
                                        <Card.Title>Rajiv Gandhi &nbsp; &nbsp; <span style={{ fontSize:"0.75rem"}}>02/09/2022  6:20 PM</span></Card.Title>
                                        <Card.Text>
                                        My vehicle was involved in an accident on the road near the Ahmedabd-Mahesana highway. <br />
                                            <button type="submit" className="btn btn-primary btn-block mb-2">
                                                Accept
                                            </button> &nbsp; &nbsp; &nbsp;
                                            <button type="submit" className="btn btn-danger btn-block mb-2">
                                                Reject
                                            </button><br />

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <br/>
                                <Card  style={{ width: '19rem', height: "25rem" }} className="bg-dark text-white">
                                    <Card.Img variant="top" src={image} />
                                    <Card.Body>
                                        <Card.Title> Rahul Gandhi &nbsp; &nbsp;  <span style={{textAlign:"end", fontSize:"0.75rem"}}>02/09/2022  6:20 PM</span></Card.Title>
                                        <Card.Text>
                                        My vehicle was involved in an accident on the road near the Ahmedabd-Palanpur highway. <br />
                                            <button type="submit" className="btn btn-primary btn-block mb-2">
                                                Accept
                                            </button> &nbsp; &nbsp; &nbsp;
                                            <button type="submit" className="btn btn-danger btn-block mb-2">
                                                Reject
                                            </button><br />

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </body>
    )
}

export default GarageWale;