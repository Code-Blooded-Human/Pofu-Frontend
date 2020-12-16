import Preloader from "../sections/Preloader.js"
import Navbar from "../sections/Navbar.js"
import Banner from "../sections/Banner.js"
import HowItWorks from "../sections/HowItWorks.js"
import AboutUsSection from "../sections/AboutUsSection.js"


function HomePage() {
  return (
    <div class="main-page-wrapper">
     <Preloader />
     <Navbar />
     <Banner />
     <AboutUsSection />
     <HowItWorks />
    </div>
  );
}

export default HomePage;
