import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaFigma,
  FaNode,
  FaJava,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiNextdotjs,
  SiNetlify,
  SiMongodb,
  SiSocketdotio,
  SiPostman,
  SiGraphql,
  SiRedux,
  SiJsonwebtokens,
  SiRender,
  SiSpringboot,
  SiMysql,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { DiVisualstudio } from "react-icons/di";
import { IoLogoNpm, IoLogoVercel } from "react-icons/io5";
import DecryptedText from "./containerRef";

const About = () => {
  return (
    <div id="about" className="bg-[#ffffff] min-h-screen flex items-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#fe5617]">
         About Me
          {/* <DecryptedText
                text=" About Me"
                animateOn="view"
                revealDirection="center"
              /> */}
        </h1>

        {/* About Me Section */}
        <p className="text-lg md:text-xl text-gray-700 text-center leading-relaxed">
          I’m <span className="font-bold text-[#fe5617]">Chandru</span>,
          a passionate software engineer with a strong background in full-stack development. With a degree in Computer Science and hands-on experience with modern frameworks, I specialize in building interactive and responsive web applications. My current focus is on mastering React and AI-driven applications. I believe in constant learning and pushing the boundaries of what's possible with technology.
        </p>

        {/* Skills Section */}
        <div className="space-y-8">

          <h2 className="text-2xl font-bold text-[#fe5617] text-center">
          My Skills
            {/* <div style={{ marginTop: '4rem' }}>
              <DecryptedText
                text=" My Skills"
                animateOn="view"
                revealDirection="center"
              />
            </div> */}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {/* Skill Icons */}
            <div className="flex flex-col items-center space-y-2">
              <FaHtml5 size={40} className="text-[#e34c26]" />
              <span className="font-bold">HTML5</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaCss3Alt size={40} className="text-[#264de4]" />
              <span className="font-bold">CSS3</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaJsSquare size={40} className="text-[#f7df1e]" />
              <span className="font-bold">JavaScript</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiBootstrap size={40} className="text-[#563d7c]" />
              <span className="font-bold">Bootstrap</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiTailwindcss size={40} className="text-[#38bdf8]" />
              <span className="font-bold">Tailwind CSS</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaReact size={40} className="text-[#61dbfb]" />
              <span className="font-bold">React.js</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiRedux size={40} className="text-[#764abc]" />
              <span className="font-bold">Redux</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              {/* <TbBrandFramerMotion size={40} className="text-[#1c1c1c]" /> */}
              <FaJava size={40} className="text-[#1c1c1c]" />
              <span className="font-bold">Java</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiSpringboot size={40} className="text-[#CB3837]" />
              {/* <IoLogoNpm size={40} className="text-[#CB3837]" /> */}
              <span className="font-bold">Spring Boot</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              {/* <FaNode size={40} className="text-[#68a063]" /> */}
              <SiMysql size={40} className="text-[#68a063]" />
              <span className="font-bold">My SQL</span>
            </div>
            {/* <div className="flex flex-col items-center space-y-2">
              <SiExpress size={40} className="text-[#000000]" />
              <span className="font-bold">Express.js</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiMongodb size={40} className="text-[#47a248]" />
              <span className="font-bold">MongoDB</span>
            </div> */}
            {/* <div className="flex flex-col items-center space-y-2">
              <SiNextdotjs size={40} className="text-black" />
              <span className="font-bold">Next.js</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiJsonwebtokens size={40} className="text-[#232F3E]" />
              <span className="font-bold">JWT</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiSocketdotio size={40} className="text-[#010101]" />
              <span className="font-bold">Socket.IO</span>
            </div> */}
            <div className="flex flex-col items-center space-y-2">
              <FaGitAlt size={40} className="text-[#f05032]" />
              <span className="font-bold">Git</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaGithub size={40} className="text-black" />
              <span className="font-bold">GitHub</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <DiVisualstudio size={40} className="text-[#0078d7]" />
              <span className="font-bold">VS Code</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiPostman size={40} className="text-[#ef5b25]" />
              <span className="font-bold">Postman</span>
            </div>
            {/* <div className="flex flex-col items-center space-y-2">
              <SiGraphql size={40} className="text-[#e535ab]" />
              <span className="font-bold">GraphQL</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <IoLogoVercel size={40} className="text-[#000]" />
              <span className="font-bold">Vercel</span>
            </div> */}
            <div className="flex flex-col items-center space-y-2">
              <SiNetlify size={40} className="text-[#00d1b2]" />
              <span className="font-bold">Netlify</span>
            </div>
            {/* <div className="flex flex-col items-center space-y-2">
              <SiRender size={40} className="text-[#000]" />
              <span className="font-bold">Render</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaFigma size={40} className="text-[#F24E1E]" />
              <span className="font-bold">Figma</span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
