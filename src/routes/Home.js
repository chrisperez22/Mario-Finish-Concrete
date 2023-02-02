import "./HomeStyles.css"
import work2 from "../img/fence.jpg";
import work3 from "../img/euro.jpg";
import work4 from "../img/tile.jpg";
import work5 from "../img/artificial.jpg";
import work6 from "../img/plain4.jpg";
import pool from "../img/pooldeck.jpg";
import sone from "./../img/greyjob.jpg";
import stwo from "./../img/favorite2.jpg";
import sthree from "./../img/cars.jpg";
import sfour from "./../img/back2.jpg";
import sfive from "./../img/favorite.jpg";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import {FaBuilding} from "react-icons/fa"
import {FaRegHandshake} from "react-icons/fa"
import {FaRegCalendarAlt} from "react-icons/fa"

function Home (){
return (
    <>
    <Navbar />
    <div className="every bg-light">
    <div className="slide">
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img id="slideshow" src={stwo} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img id="slideshow" src={sone} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img id="slideshow" src={sfour} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img id="slideshow" src={sthree} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img id="slideshow" src={sfive} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon bg-black" aria-hidden="true"></span>
          <span class="visually-hidden">P</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon bg-black" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <br></br>

    <div class="sec row">
    <div class="col">
   <div className="exper"><h1>Experience <FaBuilding color="grey" size={25}/></h1>   
      <p1>With over 25 years of experience, Our company can consistently offer high quality concrete services for your projects need.</p1>
    </div>
    </div>
    <div class="col">
    <div className="exper"><h1>Quality&nbsp; <FaRegHandshake color="grey" size={30}/></h1>  
    <p1>To achieve your desired service, high-strength and high-performance concrete will be used.</p1>
    </div>
    </div>
    <div class="col">
    <div className="exper"><h1>Reliability &nbsp;<FaRegCalendarAlt color="grey" size={25}/></h1> 
      <p1>Expect us there on time, prepared, and on budget. <strong>EVERY TIME</strong></p1>
      </div>
      </div>
  </div>

  <div className="services">
		<div className="container">
			<h2>We Offer The Following Services :</h2>
			<span className="line"></span>
			<div className="content">
				<div className="card">
					<img src={work4} alt="user1"/>
					<strong>𝙎𝙩𝙖𝙢𝙥𝙚𝙙 𝘾𝙤𝙣𝙘𝙧𝙚𝙩𝙚 </strong>
					<p>The appealing and long-lasting alternative to
            conventional concrete is stamped concrete. Because it can produce a
            distinctive and fashionable look that is also long-lasting and
            simple to maintain.</p>
					
				</div>
				<div className="card">
				<img src={work3} alt="user1"/>
				<strong>𝙀𝙪𝙧𝙤 𝙏𝙞𝙡𝙚</strong>
					<p>Eurotile is a product that consists of acrylic and concrete. It is applied over concrete and most any other sound and solid surface.</p>
					
					<p></p>
				</div>
				<div className="card">
					<img src={work5} alt="user1"/>
				<strong>𝘼𝙧𝙩𝙞𝙛𝙞𝙘𝙞𝙖𝙡 𝙂𝙧𝙖𝙨𝙨</strong>
					<p>Artificial grass is material that is made of synthetic, man-made fibers that look like real grass. The synthetic grass blades are green and come in different pile heights.</p>
					
					<p></p>
				</div>

				<div className="card">
					<img src={work2} alt="user1"/>
					<strong>𝘼𝙡𝙪𝙢𝙞𝙣𝙪𝙢 𝙁𝙚𝙣𝙘𝙞𝙣𝙜 𝙄𝙣𝙨𝙩𝙖𝙡𝙡𝙖𝙩𝙞𝙤𝙣</strong>
					<p>They are durable, easy to install, maintenance free and an
            affordable fencing solution for every property. Above all, when
            installed correctly they look great and enhance the style of your
            property.</p>
					
					<p></p>
				</div>
				<div className="card">
				<img src={pool} alt="user1"/>
				<strong>𝘾𝙤𝙣𝙘𝙧𝙚𝙩𝙚 𝙋𝙤𝙤𝙡 𝘿𝙚𝙘𝙠</strong>
					<p>For a pool deck, concrete is a fantastic material because it is
            sturdy and long-lasting.Your pool deck can also be made
            more interesting and beautiful by stamping concrete. </p>
				
					<p></p>
				</div>
				<div className="card">
					<img src={work6} alt="user1"/>
					<strong>𝙋𝙡𝙖𝙞𝙣 𝘾𝙤𝙣𝙘𝙧𝙚𝙩𝙚</strong>
					<p>Plain concrete is most commonly used for paving and flooring. Made
            from a mix of cement, aggregate, and water the different types of
            aggregate and ratio of materials used will give different types of
            cement.</p>
				
					<p></p>
				</div>
	
			
		</div>
		</div>
		</div>
    {/* <Link to="/services">
				<button className="btn-primary">Services</button>
			</Link> */}
      <div className="video">
			<div className="container">
			<div className="vid">
			<iframe width="470" height="300" src="https://www.youtube.com/embed/LwUL2YHnsh4" frameborder="0" allowfullscreen></iframe>
			</div>
			</div>
			

		</div>

    <br></br>
    </div>
<Footer />
</>
)
}
export default Home;