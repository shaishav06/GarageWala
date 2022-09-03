import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import { useNavigate } from "react-router-dom";

function EndUser() {
    const navigate = useNavigate();
    const FillIssueForm = () =>{
        navigate("/userform");
    }
    return (
        <body>
            <section className="background-radial-gradient overflow-hidden">
                <div className="container px-4 py-5 px-md-5 text-lg-start my-2">
                    <div className="row gx-lg-5 align-items-flex-start mb-5">
                        <div className="col-md-0 mb-4">
                        </div>
                        <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: "10" }}>
                            <p className="mb-4 opacity-70" style={{ color: "hsl(218, 81%, 85%)" }}>
                                <div className="col-md-6 mb-4">
                                    <div style={{ justifyContent: "left", textAlign: "left" }} className="form-outline">
                                        <label className="form-label" htmlFor="titlein">City</label>
                                        <input type="text" id="titlein" className="form-control" autoComplete="on" placeholder="Enter City" />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block mb-4">
                                    Show Places
                                </button><br />
                            </p>
                        </div>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>ABC Garage <br /> ⭐⭐⭐ </Accordion.Header>
                                <Accordion.Body>
                                    Abc garage here to solve issue of 4 wheelers. <br />
                                    Abc garage here to solve issue of 4 wheelers. <br />
                                    Abc garage here to solve issue of 4 wheelers. <br />
                                    Abc garage here to solve issue of 4 wheelers. <br /> <br/>
                                    <button type="submit" onClick={()=>{FillIssueForm();}} className="btn btn-primary btn-block">
                                    Request
                                </button>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>DEF Garage <br /> ⭐⭐⭐⭐ </Accordion.Header>
                                <Accordion.Body>
                                    Def garage here to solve issue of 2 wheelers. <br />
                                    Def garage here to solve issue of 2 wheelers. <br />
                                    Def garage here to solve issue of 2 wheelers. <br />
                                    Def garage here to solve issue of 2 wheelers. <br /> <br/>
                                    <button type="submit" className="btn btn-primary btn-block">
                                    Request
                                </button>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Shubh Garage <br /> ⭐⭐⭐⭐⭐ </Accordion.Header>
                                <Accordion.Body>
                                    Shubh garage here to solve issue of 2 wheelers and 4 wheelers. <br />
                                    Shubh garage here to solve issue of 2 wheelers and 4 wheelers. <br />
                                    Shubh garage here to solve issue of 2 wheelers and 4 wheelers. <br />
                                    Shubh garage here to solve issue of 2 wheelers and 4 wheelers. <br /> <br/>
                                    <button type="submit" className="btn btn-primary btn-block">
                                    Request
                                </button>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </section>
        </body>
    )
}

export default EndUser;