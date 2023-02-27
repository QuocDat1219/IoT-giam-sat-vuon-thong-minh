import React from "react";
import "../Style/review.scss"
const Review = () => {
  return (
    <div>
      <div className="title-rv">
        <h2>Our reviews</h2>
        <div className="underline"></div>
      </div>

      <article class="review">
			<div class="img-container">
				<img src="person-1.jpeg" id="person-img" alt=""/>
			</div>
			<h4 id="author">Sara Jones</h4>
			<p id="job">UX Designer</p>
			<p id="info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate quasi id fugit esse distinctio reiciendis officia vero consequatur. Vero, distinctio!</p>

		
			<div class="button-container">
				<button class="prev-btn"><i class="fas fa-chevron-left"></i></button>
				<button class="next-btn"><i class="fas fa-chevron-right"></i></button>
			</div>
	
			<button class="random-btn">surprise me</button>
		</article>
    </div>
  );
};

export default Review;
