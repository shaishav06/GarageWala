import React from 'react';

function UserForm() {
    return (
        <div>
            <body>
                <section className="background-radial-gradient overflow-hidden">
                    <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-0">
                        <div className="row gx-lg-5 align-items-center mb-5">
                            <div className="col-lg-600 mb-500 mb-lg-0" style={{ zIndex: "10" }}>
                                <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: "hsl(218, 81%, 95%)" }}>
                                    Details Form <br />
                                </h1>
                                <div className="col-lg-600 mb-500 mb-lg-0 position-relative">
                                    <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                                    <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>
                                    <div className="card bg-glass">
                                        <div className="card-body px-40 py-5 px-md-50">
                                            <form>
                                                <div className="row">
                                                    <div className="col-md-6 mb-4">
                                                        <div className="form-outline">
                                                            <input type="text" id="firstnamein" className="form-control" />
                                                            <label className="form-label" htmlFor="firstnamein">Vehicle type</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <div className="form-outline">
                                                            <input type="text"  id="agein" className="form-control" />
                                                            <label className="form-label" htmlFor="agein">Vehicle number</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <div className="form-outline">
                                                            <input type="text" id="lastnamein" className="form-control" />
                                                            <label className="form-label" htmlFor="lastnamein">Vehicle problem</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <div className="form-outline">
                                                            <input type="file" id="firstnamein" className="form-control" />
                                                            <label className="form-label" htmlFor="firstnamein">Vehicle picture</label>
                                                        </div>
                                                    </div>
                                                   </div>
                                                <button type="submit" className="btn btn-primary btn-block mb-4">
                                                    Submit
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </body>
        </div>
    )
}

export default UserForm;