import React from "react";
import "./NotFound.scss";
import { Link } from "react-router-dom";
const Notfount = () => {
  return (
    <div>
     
      <div>
        <section class="page_404">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 ">
                <div class="col-sm-10 col-sm-offset-1  text-center">
                  <div class="four_zero_four_bg">
                    <h1 style={{textAlign:"center", fontFamily:"monospace"}}>404 - Oops!!!</h1>
                    <div className="img"></div>
                  </div>

                  <div class="contant_box_404">
                    <h3 class="h2" style={{fontFamily:"monospace"}}>Bạn đi đâu đó </h3>

                    <p style={{fontFamily:"monospace"}}>Trang bạn đang tìm không có sẵn!</p>
                    <Link to={"/"}>
                      <button className="Back" type="submit">
                        <span style={{fontFamily:"monospace"}}>Quay về trang home</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Notfount;
