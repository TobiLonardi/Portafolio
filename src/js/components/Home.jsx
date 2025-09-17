import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import profilePicture from "../../img/profile-picture.png";
import unrealLogo from "../../img/Unreal-logo.png";
import backgroundProfile from "../../img/imagen-fondo-perfil.png";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<div className="border border-3 background-gray rounded w-100">
				<div className=" d-flex flex-column justify-content-center align-items-start half-screen">
					<p className="ms-3">Updated</p>
					<div className="d-flex justify-content-start align-items-start">
						<h1 className="ms-2">PORTFOLIO</h1>
						<p class="border rounded-5 orange my-2 mx-2  px-4">2025</p>
					</div>
					<div className="d-flex justify-content-start align-items-center w-75  px-3">
						<p className="col-2">Fullstack Developer</p>
						<hr class="my-4 col-6 mx-auto border-1 opacity-100 border-secondary " />
						<p className="col-4 px-3">Tobias Lonardi</p>
					</div>
				</div>


			</div>
			<div className="d-flex justify-content-center align-items-center my-3">
				<h3 className="text-center  border rounded-4 orange my-3 py-3 skills-title">Skills</h3>
			</div>

			<div className="container border border-4 border-dark-subtle  rounded rounded my-3  d-flex text-center justify-content-center align-items-center p-0">
				<div className="row w-100">
					<div className="col-1 border border-3 border-dark background-gray d-flex align-items-center justify-content-center  skills p-0">
						<p className="m-0">Python <i class="fa-brands fa-python"></i></p>

					</div>
					<div className="col-1 border border-3 border-dark d-flex background-gray align-items-center justify-content-center p-0 skills">
						<p className="m-0 ">JavaScript <i class="fa-brands fa-js"></i></p>

					</div>
					<div className="col-1 border border-3 border-dark d-flex background-gray align-items-center justify-content-center p-0 skills">
						<p className="m-0">HTML5 <i class="fa-brands fa-html5"></i></p>

					</div>
					<div className="col-1 border border-3 border-dark d-flex background-gray align-items-center justify-content-center skills">
						<p className="m-0">CSS <i class="fa-brands fa-css"></i></p>

					</div>
					<div className="col-1 border border-3 border-dark d-flex background-gray align-items-center justify-content-center p-0 skills">
						<p className="m-0">Bootstrap <i class="fa-brands fa-bootstrap"></i></p>

					</div>
					<div className="col-1 border border-3 border-dark d-flex background-gray align-items-center justify-content-center skills p-0">
						<p className="m-0">React.js <i class="fa-brands fa-react"></i></p>

					</div>
					<div className="col-1 border border-3 border-dark d-flex background-gray align-items-center justify-content-center skills">
						<p className="m-0">Flask <i class="fa-solid fa-flask"></i></p>

					</div>
					<div className="col-1 border border-3 border-dark d-flex background-gray align-items-center justify-content-center skills">
						<p className="m-0">SQL <i class="fa-solid fa-database"></i></p>

					</div>

					<div className="col-1 border border-3 border-dark d-flex background-gray align-items-center justify-content-center skills p-0">
						<p className="m-0">GitHub <i class="fa-brands fa-github"></i></p>

					</div>
					<div className="col-1 border border-3 border-dark d-flex background-gray align-items-center justify-content-center skills">
						<p className="m-0">C#</p>
					</div >
					<div className="col-1 border border-3 border-dark background-gray d-flex align-items-center justify-content-center skills">
						<p className="m-0">Unity <i class="fa-brands fa-unity"></i></p>

					</div>
					<div className="col-1 border border-3 border-dark background-gray d-flex align-items-center justify-content-center skills p-0">
						<p className="m-0">Unreal <img src={unrealLogo} alt="" className="others-logos" /></p>


					</div>
				</div>

			</div>

			<div className="container row border border-3 rounded background-gray w-100 my-3 p-3 d-flex justify-content-between align-items-center">
				<div className="image-container col-4">
					<img src={profilePicture} alt="" className="overlay-img"/>
					<img src={backgroundProfile} alt="Superpuesta" className="background-img"></img>
				</div>
				<div className="d-flex flex-column justify-content-center align-items-center col-8">
					<div class="card w-100 mx-3 border-4 border-dark">
						<div class="card-body ">
							<h4>why hire me?</h4>
							<p>Fullstack Developer with a background in Game Development, combining creativity and strong logical thinking to craft complete web solutions. Skilled in building dynamic and responsive interfaces with React and JavaScript, while also leveraging Python and Flask for robust backend development. My experience designing game mechanics enhances my problem-solving and innovation, enabling me to deliver engaging and functional applications.</p>
						</div>

					</div>
					<div className="d-flex justify-content-between align-items-center m-5">
						<div class="card w-25 mx-3 border-4 border-dark w-50">
						<div class="card-body  ">
							<h4>why hire me?</h4>
							<p>Fullstack Developer with a background in Game Development, combining creativity and strong logical thinking to craft complete web solutions. Skilled in building dynamic and responsive interfaces with React and JavaScript, while also leveraging Python and Flask for robust backend development. My experience designing game mechanics enhances my problem-solving and innovation, enabling me to deliver engaging and functional applications.</p>
						</div>
						

					</div>
					<div class="card w-25 mx-3 w-50 border-4 border-dark">
						<div class="card-body  ">
							<h4>why hire me?</h4>
							<p>Fullstack Developer with a background in Game Development, combining creativity and strong logical thinking to craft complete web solutions. Skilled in building dynamic and responsive interfaces with React and JavaScript, while also leveraging Python and Flask for robust backend development. My experience designing game mechanics enhances my problem-solving and innovation, enabling me to deliver engaging and functional applications.</p>
						</div>
						

					</div>
					</div>
					
				</div>


			</div>



		</div>
	);
};

export default Home;