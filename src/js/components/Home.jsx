import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import profilePicture from "../../img/profile-picture.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<div className="border border-1 rounded w-100">
				<div className="text-center d-flex flex-column justify-content-center align-items-start half-screen">
					<p className="ms-3">Updated</p>
					<div className="d-flex justify-content-start align-items-start">
						<h1 className="ms-2">PORTFOLIO</h1>
						<p class="border rounded-5 bg-warning my-2 mx-2  px-4">2025</p>
					</div>
					<div className="d-flex justify-content-center align-items-center w-75">
						<p className="col-4">Fullstack Developer</p>
						<hr class="my-4 col-4 mx-auto  border-1 opacity-75 border-secondary" />
						<p className="col-4">Tobias Lonardi</p>
					</div>
				</div>

				
			</div>

			<div className="border border-1 rounded w-100 my-3 p-3 d-flex justify-content-start align-items-center">
				<img src={profilePicture} alt="" className="w-25 h-25"/>

			</div>
			
			

		</div>
	);
};

export default Home;