import AnimatedContent from "./AnimatedContent.JSX";

const Project = () => {
  return (
    <div id="project" className="bg-[#ffffff] min-h-screen flex items-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#fe5617]">
          My Projects
        </h1>
        {/* Project 1 and 2 in one row */}
        <div className="flex flex-col md:flex-col gap-10">
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 100, friction: 45 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}>
            <div><div className="w-full md:w-1/2 flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
              <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">
                Portfolio
              </h1>
              <p className="text-lg text-gray-700 mb-4">
                Developed a personal portfolio website using React.js and Tailwind CSS, designed to showcase my skills, projects, and experience.
                The site is fully responsive, ensuring seamless performance across devices. Features a clean design to effectively showcase skills and projects.
              </p>
              <a
                href="https://petpalsss.netlify.app/login"
                className="text-[#fe5617] font-bold text-lg hover:underline"
              >
                Code
              </a>
            </div>
            </div>
          </AnimatedContent>
          {/* PetPals Project */}
          
          {/* Biosta AI Project */}
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 100, friction: 45 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}>
          <div className="w-full md:w-1/2 flex flex-col place-self-end bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-center text-[#fe5617] font-extrabold text-[32px] mb-4">
              E-Commerce Application
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              Developed a dynamic e-commerce platform with a React and Bootstrap frontend for an intuitive user interface. Implemented a robust backend using Java, Spring Boot, and MySQL for secure and efficient data handling. Focused on delivering seamless user experience and scalable performance.
            </p>
            <a
              href="https://biosta.netlify.app/"
              className="text-[#fe5617] text-center font-bold text-lg hover:underline"
            >
              Code
            </a>
          </div>
          </AnimatedContent>
        </div>
        <div className="flex flex-col md:flex-col gap-10">

       
          {/* PetPals Project */}
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 100, friction: 45 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}>
          <div className="w-full md:w-1/2 flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">
              Recipe Finder Application
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              Built a user-friendly recipe finder app using React and Bootstrap. Allows users to search and explore recipes with an intuitive interface. Focused on responsive design and smooth navigation for an enhanced user experience.
            </p>
            <a
              href="https://github.com/ChandruSakthi/Recipe-Finder-App" target="blank"
              className="text-[#fe5617] font-bold text-lg hover:underline"
            >
              Code
            </a>
          </div>  
          </AnimatedContent>     
           </div>

        {/* Project 3 and 4 in one row */}
        <div className="flex flex-col md:flex-col gap-10 mt-10">
          {/* CoderLobby Project */}
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 100, friction: 45 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}>
          <div className="w-full md:w-1/2 flex flex-col place-self-end items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">
              User Details Management
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              Developed a secure e-commerce backend using Java, Spring Boot, and MySQL. Successfully integrated user management features, including Aadhar and PAN card information, with a focus on ensuring data integrity and security throughout the system.
            </p>
            <a
              href="https://coderlobby.tech/"
              className="text-[#fe5617] font-bold text-lg hover:underline"
            >
              Code
            </a>
          </div>
          </AnimatedContent>

          {/* Cinerate Project */}
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 100, friction: 45 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}>
          <div className="w-full md:w-1/2 flex flex-col  bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-center text-[#fe5617] font-extrabold text-[32px] mb-4">
              CRUD Operations with React.js
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              Built a React.js web app for efficient CRUD operations, focusing on data management, state management, and form validation. Designed with a responsive layout for optimal user experience across devices
            </p>
            <a
              href="https://github.com/ChandruSakthi/React-JS" target="blank"
              className="text-center text-[#fe5617] font-bold text-lg hover:underline"
            >
              Code
            </a>
          </div>
          </AnimatedContent>
        </div>

        {/* Project 5 and 6 in one row */}
        <div className="flex flex-col md:flex-col gap-10 mt-10">
          {/* React Weather Pro Project */}
          {/* <div className="w-full md:w-1/2 flex flex-col place-self-end items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">
              React Weather Pro
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              A weather app that shows current weather based on the city
              searched. Built with React.js, utilizing OpenWeatherMap API to
              fetch real-time weather data.
            </p>
            <a
              href="https://weatherfixpro.netlify.app/"
              className="text-[#fe5617] font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div> */}

          {/* Landing Pages Bundle */}
          {/* <div className="w-full md:w-1/2 flex flex-col  bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-center text-[#fe5617] font-extrabold text-[32px] mb-4">
              Landing Pages Bundle
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              A collection of landing pages created using HTML, CSS, JavaScript,
              Bootstrap, and Tailwind CSS. Includes multiple responsive and
              engaging layouts.
            </p>
            <a
              href="https://github.com/AMOHAMMEDIMRAN/Amazing-Landing-Page"
              className="text-center text-[#fe5617] font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Project;
