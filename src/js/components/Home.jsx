import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import profilePicture from "../../img/profile-picture.jpeg";
import unrealLogo from "../../img/Unreal-logo.png";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<div className="border border-3 rounded w-100">
				<div className=" d-flex flex-column justify-content-center align-items-start half-screen">
					<p className="ms-3">Updated</p>
					<div className="d-flex justify-content-start align-items-start">
						<h1 className="ms-2">PORTFOLIO</h1>
						<p class="border rounded-5 bg-warning my-2 mx-2  px-4">2025</p>
					</div>
					<div className="d-flex justify-content-start align-items-center w-75  px-3">
						<p className="col-2">Fullstack Developer</p>
						<hr class="my-4 col-6 mx-auto  border-1 opacity-100 border-secondary bg-light border-white" />
						<p className="col-4 px-3">Tobias Lonardi</p>
					</div>
				</div>

				
			</div>
			
			<div className="container border border-4 border-dark-subtle rounded rounded my-3  d-flex text-center justify-content-center align-items-center p-0">
				<div className="row w-100">
					<div className="col-1 border border-3 border-dark d-flex align-items-center justify-content-center  skills p-0">
					<p className="m-0">Python <i class="fa-brands fa-python"></i></p>
					
				</div>
				<div className="col-1 border border-3 border-dark d-flex align-items-center justify-content-center p-0 skills">
					<p className="m-0 ">JavaScript <i class="fa-brands fa-js"></i></p>
					
				</div>
				<div className="col-1 border border-3 border-dark d-flex align-items-center justify-content-center p-0 skills">
					<p className="m-0">HTML5 <i class="fa-brands fa-html5"></i></p>
					
				</div>
				<div className="col-1 border border-3 border-dark d-flex align-items-center justify-content-center skills">
					<p className="m-0">CSS <i class="fa-brands fa-css"></i></p>
					
				</div>
				<div className="col-1 border border-3 border-dark d-flex align-items-center justify-content-center p-0 skills">
					<p className="m-0">Bootstrap <i class="fa-brands fa-bootstrap"></i></p>
					
				</div>
				<div className="col-1 border border-3 border-dark d-flex align-items-center justify-content-center skills p-0">
					<p className="m-0">React.js <i class="fa-brands fa-react"></i></p>
					
				</div>
				<div className="col-1 border border-3 border-dark d-flex align-items-center justify-content-center skills">
					<p className="m-0">Flask <i class="fa-solid fa-flask"></i></p>
					
				</div>
				<div className="col-1 border border-3 border-dark d-flex align-items-center justify-content-center skills">
					<p className="m-0">SQL <i class="fa-solid fa-database"></i></p>
					
				</div>

				<div className="col-1 border border-3 border-dark d-flex align-items-center justify-content-center skills p-0">
					<p className="m-0">GitHub <i class="fa-brands fa-github"></i></p>
					
				</div>
				<div className="col-1 border border-3 border-dark d-flex align-items-center justify-content-center skills">
					<p className="m-0">C#</p>
				</div >
				<div className="col-1 border border-3 border-dark d-flex align-items-center justify-content-center skills">
					<p className="m-0">Unity <i class="fa-brands fa-unity"></i></p>
					
				</div>
				<div className="col-1 border border-3 border-dark d-flex align-items-center justify-content-center skills p-0">
					<p className="m-0">Unreal <img src={unrealLogo} alt="" className="others-logos" /></p>
					
					
				</div>
				</div>
				
			</div>

			<div className="border border-3 rounded w-100 my-3 p-3 d-flex justify-content-start align-items-center">
				<img src={profilePicture} alt="" className="w-25 h-25"/>
		
			</div>
			
			

		</div>
	);
};

export default Home;