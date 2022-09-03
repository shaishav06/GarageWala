import React from "react";

function HomePage(){
    return(
        <body>
      <section className="background-radial-gradient overflow-hidden">
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-md-6 mb-4"> 
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: "10" }}>
              <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: "hsl(218, 81%, 95%)" }}>
                The best place <br />
                <span style={{ color: "hsl(218, 81%, 75%)" }}>to solve vehicle issue on road</span>
              </h1>
              <p className="mb-4 opacity-70" style={{ color: "hsl(218, 81%, 85%)" }}>
              This website will help you if your vehicle gets stuck anywhere on the road. The nearest garage will 
              be dispayed to you, based on some parameters you can choose anyone and ask them to solve your issue.
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                  </div>
                </div>
              </p>
            </div>
          </div>
        </div>
      </section>
    </body>
    )
}

export default HomePage;