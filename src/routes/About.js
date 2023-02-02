import Navbar from "../components/Navbar"
import "./AboutStyles.css"
import user1 from "../img/maya.jpg"
import user2 from "../img/bec.jpg"
import user3 from "../img/lil.jpg"
import us1 from "../img/about.jpg"
import Footer from "../components/Footer"

function About (){
    return (
        <>
        <Navbar/>
  
        <div className="about">
	<br></br>	<br></br>
		<div className="company">
	
	<h2>About Our Company</h2>
	<p>We’ve spent over 25 years perfecting our services and are happy to offer them to both residential and commercial properties. We’ve helped create brand new parking lots, patios, and driveways for many people and have expertly restored many levels of damaged areas as well. We work with a wide variety of clients and offer the highest quality products for each and every one of our customers. Our company is well-trained and after evaluating your situation, will present you with their expert advice for the best solution. Once we begin your service, we’ll complete our work on time and in a professional manner. As a trusted company you can count on us to leave you with a beautiful, strong, and well-fashioned service. We put our customers above all else, so if at any point you have a question or concern (whether it be before, during, or after our service), please don’t hesitate to address us.</p>
	</div>
	
		<img className="us" src={us1}></img>
		
		</div>
		
		<div className="testimonials">
		<div className="container">
			<h2>Testimonials</h2>
			<span className="line"></span>
			<div className="content">
				<div className="card">
					<img src={user1} alt="user1"/>
					<p>It is not every day that you come across a passionate and trustworthy company. Mario Vilchez is true professional who does his work really well. Thanks Mario!</p>
					<p><span>Maya Perez</span></p>
					<p></p>
				</div>
				<div className="card">
				<img src={user3} alt="user1"/>
					<p>Wonderful guy, very friendly, and has done numerous services for my family; he is without a doubt the finest in Florida.</p>
					<p><span>David Hernandez</span></p>
					<p></p>
				</div>
				<div className="card">
					<img src={user2} alt="user1"/>
					<p>Very good at communicating with clients, offered various alternatives for my budget, and completed my driveway sooner than I expected. Definitely worth recommending.</p>
					<p><span>Cecile Gomez</span></p>
					<p></p>
				</div>
		</div>
		</div>
		</div>
		<Footer />
        </>
    )
    }
    export default About;