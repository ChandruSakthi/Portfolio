import Typewriter from "typewriter-effect";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import RotatingText from './RotatingText'
// import video from "../Assets/Video.mp4"
// import MyImage from "myImage.JPG"


const Home = () => {
  return (
    <div id="home" className="bg-[#FFFFFF]">
      <div className="max-w-[85%] mx-auto font-inter grid grid-cols-1 md:grid-cols-2 gap-8 items-center  min-h-screen">
        {/* Left Section */}
        <div className="order-2 lg:order-1 flex flex-col items-center md:items-start justify-start space-y-5 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold">
            I’m <span className="text-[#fe5617]">Chandru S</span>
            {/* #007FFF */}
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold flex gap-2">
            <span className="text-[#fe5617]">I’m a </span>
            {/* <Typewriter
              options={{
                strings: [
                  "Developer.",
                  "Techie.",
                  "Engineer.",
                  "Designer.",
                ],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 30,
              }}
            /> */}

            <RotatingText
              className="lg:mt-[-0px]"
              texts={['Developer.', 'Techie.', 'Engineer.', 'Designer.']}
              mainClassName=" text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </h2>
          {/* About Me */}
          <p className="text-lg md:text-xl text-gray-700 font-medium">
            A passionate software developer with a Computer Science background, I specialize in programming languages, frameworks, and tools. Experienced in web and mobile app development, I contribute to tech projects and continuously refine my skills, driven by curiosity and a problem-solving mindset.
          </p>

          {/* Contact Information */}
          <div className=" flex flex-col space-y-3 md:space-y-0 md:flex-row md:gap-6 text-lg md:text-xl font-semibold ">
            <div className="flex items-center gap-3">
              <FaLocationDot className="text-[#fe5617]" size={20} />
              <span>Bengaluru</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#fe5617]" size={20} />
              <span>9442954472</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#fe5617]" size={20} />
              <span>chandrus2805@gmail.com</span>
            </div>
          </div>
          {/* Button */}
          <div className="bg-[#fe5617] px-5 py-2 rounded-2xl font-bold ">
            <a href="https://drive.google.com/drive/folders/112MOMt-2rdojs3BACGMve6o_9dFiHJMM?usp=sharing" target='_blank'>Download CV</a>
          </div>
        </div>

        {/* Right Section */}
        <div className="order-1 lg:order-2 flex justify-end items-center">
          <img
            src="/myImage.png"
            alt="Kendrick Lamar - GNX Album Cover"
            // className="rounded-full w-[250px] h-[250px] md:w-[400px] md:h-[400px] object-cover border-2 border-gray-500"
            className="rounded-full w-[250px] h-[250px] md:w-[350px] md:h-[350px] object-cover border-2 border-gray-500 relative sm:left-0 left-[-30px]"

          />
          {/* <img
            className="w-[85%] rounded-[50px]"
            src={video}
            alt="Profile"
          /> */}
          {/* <video width="600"  autoPlay loop controls>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
          {/* <TiltedCard
            imageSrc="/myImage.png"
            altText="Kendrick Lamar - GNX Album Cover"
            captionText="Chandru"
            containerHeight="400px"
            containerWidth="400px"
            imageHeight="400px"
            imageWidth="400px"
            className="rounded-full border-2 border-gray-500 overflow-hidden w-[250px] h-[250px] sm:w-[250px] sm:h-[250px] md:w-[400px] md:h-[400px]"  
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true} */}
          {/* overlayContent={ */}
          {/* //   <p className="tilted-card-demo-text"> */}
          {/* //     Kendrick Lamar - GNX */}
          {/* //   </p> */}
          {/* // } */}
          {/* // /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
