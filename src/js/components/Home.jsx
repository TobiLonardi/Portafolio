import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<div className="text-center d-flex flex-column justify-content-center align-items-start half-screen">
				<p className="ms-3">Updated</p>
				<div className="d-flex justify-content-start align-items-start">
					<h1 className="ms-2">PORTFOLIO</h1>
					<p class="border rounded-5 bg-warning my-2 mx-2  px-4">2025</p>
				</div>
				<div className="d-flex justify-content-center align-items-center w-50">
					<p className="col-3"> Web Developer</p>
					<hr class="my-4 col-6 mx-auto  border-1 opacity-75 border-secondary" />
					<p className="col-3">Tobias Lonardi</p>
				</div>
			</div>

		</div>
	);
};

export default Home;