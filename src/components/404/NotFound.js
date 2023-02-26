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
                    <h1 class="text-center ">404</h1>
                    <div className="img"></div>
                  </div>

                  <div class="contant_box_404">
                    <h3 class="h2">Bạn đi đâu đó </h3>

                    <p>Trang bạn đang tìm không có sẵn!</p>
                    <Link to={"/"}>
                      <button className="Back" type="submit">
                        <span>Quay về trang home</span>
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
