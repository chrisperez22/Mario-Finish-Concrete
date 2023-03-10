import Navbar from "../components/Navbar"

import Work1 from "../img/euro.jpg"
import Work2 from "../img/artificial.jpg"
import Work3 from "../img/fence.jpg"
import Work4 from "../img/tile.jpg"
import Work5 from "../img/pooldeck.jpg"
import Work6 from "../img/plain4.jpg"
import "./ServicesStyles.css"
import Footer from "../components/Footer"
function Services (){
return (
    <>
    <Navbar />
<div className="map">
  <div className="services">
		<div className="container">
			<h2>Services</h2>
			<span className="line"></span>
			<div className="content">
				<div className="card">
					<img src={Work4} alt="user1"/>
					<strong>ππ©ππ’π₯ππ πΎπ€π£ππ§ππ©π </strong>
					<p>The appealing and long-lasting alternative to
            conventional concrete is stamped concrete. Because it can produce a
            distinctive and fashionable look that is also long-lasting and
            simple to maintain.</p>
					<p></p>
				</div>
				<div className="card">
				<img src={Work1} alt="user1"/>
				<strong>ππͺπ§π€ πππ‘π</strong>
					<p>Eurotile is a product that consists of acrylic and concrete. It is applied over concrete and most any other sound and solid surface.</p>
					
					<p></p>
				</div>
				<div className="card">
					<img src={Work2} alt="user1"/>
				<strong>πΌπ§π©πππππππ‘ ππ§ππ¨π¨</strong>
					<p>Artificial grass is material that is made of synthetic, man-made fibers that look like real grass. The synthetic grass blades are green and come in different pile heights.</p>
					
					<p></p>
				</div>

				<div className="card">
					<img src={Work3} alt="user1"/>
					<strong>πΌπ‘πͺπ’ππ£πͺπ’ πππ£πππ£π ππ£π¨π©ππ‘π‘ππ©ππ€π£</strong>
					<p>They are durable, easy to install, maintenance free and an
            affordable fencing solution for every property. Above all, when
            installed correctly they look great and enhance the style of your
            property.</p>
					
					<p></p>
				</div>
				<div className="card">
				<img src={Work5} alt="user1"/>
				<strong>πΎπ€π£ππ§ππ©π ππ€π€π‘ πΏπππ </strong>
					<p>For a pool deck, concrete is a fantastic material because it is
            sturdy and long-lasting.Your pool deck can also be made
            more interesting and beautiful by stamping concrete. </p>
				
					<p></p>
				</div>
				<div className="card">
					<img src={Work6} alt="user1"/>
					<strong>ππ‘πππ£ πΎπ€π£ππ§ππ©π</strong>
					<p>Plain concrete is most commonly used for paving and flooring. Made
            from a mix of cement, aggregate, and water the different types of
            aggregate and ratio of materials used will give different types of
            cement.</p>
				
					<p></p>
				</div>
	
			
		</div>
		</div>
		</div>
		</div>
 <Footer />
</>
);
}
export default Services;