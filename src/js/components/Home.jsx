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
			<div className="border border-3 background-blue border-black rounded w-100">
				<div className=" d-flex flex-column justify-content-center align-items-start half-screen">
					<p className="ms-3">Updated</p>
					<div className="d-flex justify-content-start align-items-start">
						<h1 className="ms-2">PORTFOLIO</h1>
						<p className="border rounded-5 orange my-2 mx-2  px-4">2025</p>
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

			<div className="container border border-4 border-lightblue  rounded rounded my-3  d-flex text-center justify-content-center align-items-center p-0">
				<div className="row w-100">
					<div className="col-1 border border-3 border-black background-lightBlue d-flex align-items-center justify-content-center  skills p-0">
						<p className="m-0">Python <i class="fa-brands fa-python"></i></p>

					</div>
					<div className="col-1 border border-3 border-black d-flex background-lightBlue align-items-center justify-content-center p-0 skills">
						<p className="m-0 ">JavaScript <i class="fa-brands fa-js"></i></p>

					</div>
					<div className="col-1 border border-3 border-black d-flex background-lightBlue align-items-center justify-content-center p-0 skills">
						<p className="m-0">HTML5 <i class="fa-brands fa-html5"></i></p>

					</div>
					<div className="col-1 border border-3 border-black d-flex background-lightBlue align-items-center justify-content-center skills">
						<p className="m-0">CSS <i class="fa-brands fa-css"></i></p>

					</div>
					<div className="col-1 border border-3 border-black d-flex background-lightBlue align-items-center justify-content-center p-0 skills">
						<p className="m-0">Bootstrap <i class="fa-brands fa-bootstrap"></i></p>

					</div>
					<div className="col-1 border border-3 border-black d-flex background-lightBlue align-items-center justify-content-center skills p-0">
						<p className="m-0">React.js <i class="fa-brands fa-react"></i></p>

					</div>
					<div className="col-1 border border-3 border-black d-flex background-lightBlue align-items-center justify-content-center skills">
						<p className="m-0">Flask <i class="fa-solid fa-flask"></i></p>

					</div>
					<div className="col-1 border border-3 border-black d-flex background-lightBlue align-items-center justify-content-center skills">
						<p className="m-0">SQL <i class="fa-solid fa-database"></i></p>

					</div>

					<div className="col-1 border border-3 border-black d-flex background-lightBlue align-items-center justify-content-center skills p-0">
						<p className="m-0">GitHub <i class="fa-brands fa-github"></i></p>

					</div>
					<div className="col-1 border border-3 border-black d-flex background-lightBlue align-items-center justify-content-center skills">
						<p className="m-0">C#</p>
					</div >
					<div className="col-1 border border-3 border-black background-lightBlue d-flex align-items-center justify-content-center skills">
						<p className="m-0">Unity <i class="fa-brands fa-unity"></i></p>

					</div>
					<div className="col-1 border border-3 border-black background-lightBlue d-flex align-items-center justify-content-center skills p-0">
						<p className="m-0">Unreal <img src={unrealLogo} alt="" className="others-logos" /></p>


					</div>
				</div>

			</div>

			<div className="container row border border-3 rounded background-blue border-black w-100 my-3 p-3 d-flex justify-content-between align-items-center">
				<div className="image-container col-4">
					<img src={profilePicture} alt="" className="overlay-img" />
					<img src={backgroundProfile} alt="Superpuesta" className="background-img"></img>
				</div>
				<div className="d-flex flex-column justify-content-center align-items-center col-8">
					<div class="card w-100 mx-3 border-4 border-black ">
						<div class="card-body ">
							<h4>why hire me?</h4>
							<p>Fullstack Developer with a background in Game Development, combining creativity and strong logical thinking to craft complete web solutions. Skilled in building dynamic and responsive interfaces with React and JavaScript, while also leveraging Python and Flask for robust backend development. My experience designing game mechanics enhances my problem-solving and innovation, enabling me to deliver engaging and functional applications.</p>
						</div>

					</div>
					<div className="d-flex justify-content-between align-items-center m-5">
						<div class="card w-25 mx-3 w-50  background-blue border-0">
							<ul class="list-group list-group-flush">
								<h6 className="text-center border rounded-5 orange my-2 mx-2 py-3">Education</h6>
								<li class="list-group-item border border-2 border-black mt-3 "> Fullstack Software Development Certificate, 4Geeks Academy 02/2025 - 07/2025 | Remote</li>
								<li class="list-group-item border border-2 border-black mt-3 "> Video game programming and development, Da Vinci Institute 03/2018 – 08/2021 | Buenos Aires, Argentina</li>
								<li class="list-group-item border border-2 border-black mt-3 "> Advanced level of 3D backgrounds and scenarios in Unreal Engine, Video Games and Programming 08/2021 - 01/2022 | Image Campus</li>
								<li class="list-group-item border border-2 border-black mt-3 "> Web Developer CoderHouse 08/2024 - 12/2024</li>
							</ul>


						</div>
						<div class="card w-25 mx-3 w-50  background-blue border-0">
							<ul class="list-group list-group-flush">
								<h6 className="text-center border rounded-5 orange my-2 mx-2 py-3">Professional Experience</h6>
								<li class="list-group-item border border-2 border-black mt-3 "> Freelance Developer - Web and Videogames 10/2023 – 06/2025
									Developed a rental platform with React and CSS, built interactive online game experiences, designed game mechanics, and optimized Unity C# code to improve performance and scalability.</li>
								<li class="list-group-item border border-2 border-black mt-3 "> Freelance 3D Level Designer (07/2022–06/2025). Designed environments, architecture, and natural settings in Unreal Engine 5 for films, games, and YouTube. Collaborated with 5 clients, applying spatial design and storytelling to deliver immersive, functional, and high-quality 3D levels on time.</li>
								
							</ul>


						</div>
					</div>

				</div>


			</div>



		</div>
	);
};

export default Home;