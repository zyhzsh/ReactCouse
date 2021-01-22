import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSections";
//Animations 
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
const AboutUs = () => {
  return (
    <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </motion.div>
  );
};
export default AboutUs;
/*
  const titleAnim={
    hidden:{opacity:0},
    show:{opacity: 1, transition: { duration: 2 }},
  }
  const container={
    hidden:{x:100},
    show:{x:0, 
      transition: { 
        duration: 1 , 
        ease:"easeOut",
        staggerChildren:0.5,
      }
    },
  }

*/