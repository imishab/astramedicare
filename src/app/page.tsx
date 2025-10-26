import Navbar from "@/components/common/Navbar";
import About from "@/components/Home/About";
import Banner from "@/components/Home/Banner";
import Section1 from "@/components/Home/Section1";
import Section2 from "@/components/Home/Section2";
import Section3 from "@/components/Home/Section3";
import Service from "@/components/Home/Service";
import Team from "@/components/Home/Team";
import Testimonials from "@/components/Home/Testimonials";
import Appointment from "@/components/Home/Appointment";
import Footer from "@/components/Home/Footer";
export default function Home() {
  return (
   <>
   <Navbar />
   <Banner />
   <About />
   <Service />
   <Section1 />
   <Section2 />
   <Section3 />
   <Team />
   <Testimonials />
   <Appointment />
   <Footer />
   </>
  );
}
