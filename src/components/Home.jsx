import myImage from "../assets/my-image.jpg";
import { LiaLinkedinIn } from "react-icons/lia";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiLogoHtml5 ,BiLogoCss3 ,BiLogoJavascript,BiLogoTypescript ,BiLogoReact ,BiLogoTailwindCss ,BiLogoGithub } from "react-icons/bi";
import { TbApi } from "react-icons/tb";
import project1 from "../images/project-1.png";
import project2 from "../images/project-2.png";
import project3 from "../images/project-3.png";
import project4 from "../images/project-4.png"
import project5 from "../images/project-5.png"
import project6 from "../images/project-6.png"
import { useState } from "react";
import Skills from "./Skills";


const Home = () => {
  const [show, setShow] = useState(null)
  const [hover, setHover] = useState(null)
  const [copyText, setCopyText] = useState("ayush.97mahajan@gmail.com")

  const HandleClick = (imageId) => {
    setShow(show === imageId ? null : imageId);
  };

  const onMouseEnter = (hoverId) => {
    setHover(hoverId)
  }

  const save = () => {
    setCopyText(copyText)
    navigator.clipboard.writeText(copyText)
  }

  return (
    <>
      <section className="mt-28">
        <div className="flex justify-evenly items-center max-lg:flex max-lg:flex-col">
          <div className="px-4 max-lg:mb-20 max-lg:flex max-lg:flex-col max-lg:items-center max-lg:text-center">
            <h2 className="text-6xl mb-4 dark:text-secondary-color">Hey<div className="inline-block animate-waving">👋</div></h2>
            <p className="text-6xl mb-6 dark:text-secondary-color">
              My name is <span className="text-orange-500">Ayush</span>
            </p>
            <p className="text-xl tracking-tight dark:text-secondary-color">
              I build things for the web.
            </p>
            <p className="text-xl tracking-tight dark:text-secondary-color">
              Focusing on the accessiblity and responsive design.
            </p>
            <div className="flex items-center text-6xl mt-20">
              <div className="relative">
              {hover === "1" && <span className="bg-primary-color text-secondary-color text-base px-2 py-1 rounded-lg absolute top-20 right-12 dark:bg-secondary-color dark:text-primary-color">Linkedin</span>}
              <a href="https://www.linkedin.com/in/ayush-mahajan10"
              target="_blank"
              rel="noopener noreferrer">
              <LiaLinkedinIn className="p-2 mr-16 max-sm:mr-8 rounded-full border-2 border-primary-color bg-primary-color text-secondary-color hover:text-primary-color hover:bg-secondary-color cursor-pointer dark:bg-secondary-color dark:text-primary-color dark:hover:border-secondary-color dark:hover:bg-primary-color dark:hover:text-secondary-color" 
              onMouseEnter={() => onMouseEnter("1")}
              onMouseLeave={() => setHover(null)}/>
              </a>
              </div>
              
              <div className="relative">
              {hover === "2" && <span className="bg-primary-color text-secondary-color text-base px-2 py-1 rounded-lg absolute top-20 right-16 dark:bg-secondary-color dark:text-primary-color">Github</span>}
              <a href="https://github.com/Ayush1M" 
              target="_blank"
              rel="noopener noreferrer">
              <FaGithub className="p-2 mr-16 max-sm:mr-8 rounded-full border-2 border-primary-color bg-primary-color text-secondary-color hover:text-primary-color hover:bg-secondary-color cursor-pointer dark:bg-secondary-color dark:text-primary-color dark:hover:border-secondary-color dark:hover:bg-primary-color dark:hover:text-secondary-color" 
              onMouseEnter={() => onMouseEnter("2")}
              onMouseLeave={() => setHover(null)}/>
              </a>
              </div>

              <div className="relative">
              {hover === "3" && <span className="bg-primary-color text-secondary-color text-base px-2 py-1 rounded-lg absolute top-20 -right-16 w-44 dark:bg-secondary-color dark:text-primary-color">copy email address</span>}
              <MdEmail className="p-2 rounded-full border-2 border-primary-color bg-primary-color text-secondary-color hover:text-primary-color hover:bg-secondary-color cursor-pointer dark:bg-secondary-color dark:text-primary-color dark:hover:border-secondary-color dark:hover:bg-primary-color dark:hover:text-secondary-color" 
              onMouseEnter={() => onMouseEnter("3")}
              onMouseLeave={() => setHover(null)}
              onClick={save}/>
              </div>
              
            </div>
          </div>
          <img
            src={myImage}
            alt="my image"
            className="w-72 max-lg:w-64 rounded-full border-2 border-primary-color shadow-lg shadow-primary-color dark:shadow-secondary-color"
          />
        </div>
      </section>

      <Skills />

      <section className="mt-40 py-20">
        <h2 className="text-center text-5xl tracking-tight dark:text-secondary-color">
          My Projects
        </h2>
        <p className="mb-24 mt-16 ml-4 text-lg text-orange-500 max-md:text-base">Click on the image to know more.</p>

        <div className="grid grid-cols-3 gap-16 place-items-center px-4 max-lg:grid-cols-2 max-md:grid-cols-1">
          <div>
            <div className="relative group rounded-3xl">
              <img
                src={project1}
                alt="todo app"
                className="w-80 h-80 object-cover rounded-3xl cursor-pointer hover:shadow-lg hover:shadow-primary-color"
                onClick={() => HandleClick("image1")} />
              {show === "image1" && (
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center w-full h-full bg-primary-color text-secondary-color rounded-3xl cursor-pointer dark:bg-secondary-color dark:text-primary-color"
                  onClick={HandleClick}>
                  <h2 className="text-2xl mb-2 tracking-tighter">Todo App</h2>
                  <p className="p-2">
                    A Todo App consist of adding and deleting a todo, editing a todo, filtering
                    todo if active or completed and dark/light mode.
                  </p>
                  <div className="flex">
                    <p className="text-4xl">
                      <BiLogoReact />
                    </p>
                    <p className="text-4xl">
                      <BiLogoTypescript />
                    </p>
                    <p className="text-4xl">
                      <BiLogoTailwindCss />
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="flex justify-between items-center mt-6">
              <div>
                <a
                  href="https://ayush-todo-app.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-color px-4 py-2 text-xl max-md:text-base text-secondary-color rounded-lg mr-2 hover:bg-secondary-color hover:text-primary-color hover:border-2 hover:border-primary-color dark:bg-secondary-color dark:text-primary-color dark:hover:border-secondary-color dark:hover:bg-primary-color dark:hover:text-secondary-color">
                  Live
                </a>
                <a
                  href="https://github.com/Ayush1M/Todo-App"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-color px-4 py-2 text-xl max-md:text-base text-secondary-color rounded-lg hover:bg-secondary-color hover:text-primary-color hover:border-2 hover:border-primary-color dark:bg-secondary-color dark:text-primary-color dark:hover:border-secondary-color dark:hover:bg-primary-color dark:hover:text-secondary-color">
                  Repo
                </a>
              </div>
              <div className="flex dark:text-secondary-color">
                <p className="text-4xl max-lg:text-3xl">
                  <BiLogoReact />
                </p>
                <p className="text-4xl max-lg:text-3xl">
                  <BiLogoTypescript />
                </p>
                <p className="text-4xl max-lg:text-3xl">
                  <BiLogoTailwindCss />
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="relative group rounded-3xl">
              <img
                src={project2}
                alt="tic tac toe game"
                className="w-80 h-80 object-cover rounded-3xl cursor-pointer hover:shadow-lg hover:shadow-primary-color"
                onClick={() => HandleClick("image2")}
              />
              {show === "image2" && (
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center w-full h-full bg-primary-color text-secondary-color rounded-3xl cursor-pointer dark:bg-secondary-color dark:text-primary-color"
                  onClick={HandleClick}>
                  <h2 className="text-2xl mb-2 tracking-tighter">
                    Tic Tac Toe Game
                  </h2>
                  <p className="p-2">
                    Tic tac toe game made with React+Typescript and styled using
                    Tailwind CSS is a popular two player game. The player who
                    succeds in placing three of the either X or O in horizontal,
                    vertical or diagonal is the winner.
                  </p>
                  <div className="flex">
                    <p className="text-4xl">
                      <BiLogoReact />
                    </p>
                    <p className="text-4xl">
                      <BiLogoTypescript />
                    </p>
                    <p className="text-4xl">
                      <BiLogoTailwindCss />
                    </p>
                  </div>
                </div>
               )}
            </div>
            <div className="flex justify-between items-center mt-6">   
              <div>
                <a
                  href="https://tic-tac-toe-game-am.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-color px-4 py-2 text-xl max-md:text-base text-secondary-color rounded-lg mr-2 hover:bg-secondary-color hover:text-primary-color hover:border-2 hover:border-primary-color dark:bg-secondary-color dark:text-primary-color dark:hover:border-secondary-color dark:hover:bg-primary-color dark:hover:text-secondary-color">
                  Live
                </a>
                <a
                  href="https://github.com/Ayush1M/tic-tac-toe-game"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-color px-4 py-2 text-xl max-md:text-base text-secondary-color rounded-lg hover:bg-secondary-color hover:text-primary-color hover:border-2 hover:border-primary-color dark:bg-secondary-color dark:text-primary-color dark:hover:border-secondary-color dark:hover:bg-primary-color dark:hover:text-secondary-color">
                  Repo
                </a>
              </div>
              <div className="flex dark:text-secondary-color">
                <p className="text-4xl max-lg:text-3xl">
                  <BiLogoReact />
                </p>
                <p className="text-4xl max-lg:text-3xl">
                  <BiLogoTypescript />
                </p>
                <p className="text-4xl max-lg:text-3xl">
                  <BiLogoTailwindCss />
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="relative group rounded-3xl">
              <img
                src={project3}
                alt="tic tac toe game"
                className="w-80 h-80 object-contain border-2 rounded-3xl cursor-pointer hover:shadow-lg hover:shadow-primary-color"
                onClick={() => HandleClick("image3")}
              />
              {show === "image3" && (
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center w-full h-full bg-primary-color text-secondary-color rounded-3xl cursor-pointer dark:bg-secondary-color dark:text-primary-color"
                  onClick={HandleClick}>
                  <h2 className="text-2xl mb-2 tracking-tighter">
                    Task Managment App
                  </h2>
                  <p className="p-2">
                  A simple version of a Task Management app where you can add a task or delete a task, add goals for a task e.g if you learning something new, set due dates to manage time.
                  </p>
                  <div className="flex">
                    <p className="text-4xl">
                      <BiLogoReact />
                    </p>
                    <p className="text-4xl">
                      <BiLogoTypescript />
                    </p>
                    <p className="text-4xl">
                      <BiLogoTailwindCss />
                    </p>
                  </div>
                </div>
               )}
            </div>
            <div className="flex justify-between items-center mt-6">   
              <div>
                <a
                  href="https://task-management-app-ayush.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-color px-4 py-2 text-xl max-md:text-base text-secondary-color rounded-lg mr-2 hover:bg-secondary-color hover:text-primary-color hover:border-2 hover:border-primary-color dark:bg-secondary-color dark:text-primary-color dark:hover:border-secondary-color dark:hover:bg-primary-color dark:hover:text-secondary-color">
                  Live
                </a>
                <a
                  href="https://github.com/Ayush1M/Task-Management-App"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-color px-4 py-2 text-xl max-md:text-base text-secondary-color rounded-lg hover:bg-secondary-color hover:text-primary-color hover:border-2 hover:border-primary-color dark:bg-secondary-color dark:text-primary-color dark:hover:border-secondary-color dark:hover:bg-primary-color dark:hover:text-secondary-color">
                  Repo
                </a>
              </div>
              <div className="flex dark:text-secondary-color">
                <p className="text-4xl max-lg:text-3xl">
                  <BiLogoReact />
                </p>
                <p className="text-4xl max-lg:text-3xl">
                  <BiLogoTypescript />  
                </p>
                <p className="text-4xl max-lg:text-3xl">
                  <BiLogoTailwindCss />
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="relative group rounded-3xl">
              <img
                src={project4}
                alt="tic tac toe game"
                className="w-80 h-80 object-cover rounded-3xl cursor-pointer hover:shadow-lg hover:shadow-primary-color"
                onClick={() => HandleClick("image4")}
              />
              {show === "image4" && (
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center w-full h-full bg-primary-color text-secondary-color rounded-3xl cursor-pointer dark:bg-secondary-color dark:text-primary-color"
                  onClick={HandleClick}>
                  <h2 className="text-2xl mb-2 tracking-tighter">
                    Speed Typing
                  </h2>
                  <p className="p-2">
                  A fun application to test how fast you can type in a given amount of time. It consists of a theme switcher too.
                  </p>
                  <div className="flex">
                    <p className="text-4xl">
                      <BiLogoReact />
                    </p>
                    <p className="text-4xl">
                      <BiLogoCss3 />
                    </p>
                  </div>
                </div>
               )}
            </div>
            <div className="flex justify-between items-center mt-6">   
              <div>
                <a
                  href="https://speed-typing-game-am.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-color px-4 py-2 text-xl max-md:text-base text-secondary-color rounded-lg mr-2 hover:bg-secondary-color hover:text-primary-color hover:border-2 hover:border-primary-color dark:bg-secondary-color dark:text-primary-color dark:hover:border-secondary-color dark:hover:bg-primary-color dark:hover:text-secondary-color">
                  Live
                </a>
                <a
                  href="https://github.com/Ayush1M/Speed-Typing-Game"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-color px-4 py-2 text-xl max-md:text-base text-secondary-color rounded-lg hover:bg-secondary-color hover:text-primary-color hover:border-2 hover:border-primary-color dark:bg-secondary-color dark:text-primary-color dark:hover:border-secondary-color dark:hover:bg-primary-color dark:hover:text-secondary-color">
                  Repo
                </a>
              </div>
              <div className="flex dark:text-secondary-color">
                <p className="text-4xl max-lg:text-3xl">
                  <BiLogoReact />
                </p>
                <p className="text-4xl max-lg:text-3xl">
                  <BiLogoCss3 />
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="relative group rounded-3xl">
              <img
                src={project5}
                alt="tic tac toe game"
                className="w-80 h-80 object-cover rounded-3xl cursor-pointer hover:shadow-lg hover:shadow-primary-color"
                onClick={() => HandleClick("image5")}
              />
              {show === "image5" && (
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center w-full h-full bg-primary-color text-secondary-color rounded-3xl cursor-pointer dark:bg-secondary-color dark:text-primary-color"
                  onClick={HandleClick}>
                  <h2 className="text-2xl mb-2 tracking-tighter">
                    Restaurant Ordering App
                  </h2>
                  <p className="p-2">
                  Restaurant ordering app made with the concepts of JavaScript consist of adding and deleting items from the cart, cart functionality, payment container, and payment form.
                  </p>
                  <div className="flex">
                    <p className="text-4xl">
                      <BiLogoHtml5 />
                    </p>
                    <p className="text-4xl">
                      <BiLogoCss3 />
                    </p>
                    <p className="text-4xl">
                      <BiLogoJavascript />
                    </p>
                  </div>
                </div>
               )}
            </div>
            <div className="flex justify-between items-center mt-6">   
              <div>
                <a
                  href="https://ayushm-restaurant-ordering-app.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-color px-4 py-2 text-xl max-md:text-base text-secondary-color rounded-lg mr-2 hover:bg-secondary-color hover:text-primary-color hover:border-2 hover:border-primary-color dark:bg-secondary-color dark:text-primary-color dark:hover:border-secondary-color dark:hover:bg-primary-color dark:hover:text-secondary-color">
                  Live
                </a>
                <a
                  href="https://github.com/Ayush1M/Restaurant-ordering-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-color px-4 py-2 text-xl max-md:text-base text-secondary-color rounded-lg hover:bg-secondary-color hover:text-primary-color hover:border-2 hover:border-primary-color dark:bg-secondary-color dark:text-primary-color dark:hover:border-secondary-color dark:hover:bg-primary-color dark:hover:text-secondary-color">
                  Repo
                </a>
              </div>
              <div className="flex dark:text-secondary-color">
                <p className="text-4xl max-lg:text-3xl">
                  <BiLogoHtml5 />
                </p>
                <p className="text-4xl max-lg:text-3xl">
                  <BiLogoCss3 />
                </p>
                <p className="text-4xl max-lg:text-3xl">
                  <BiLogoJavascript />
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="relative group rounded-3xl">
              <img
                src={project6}
                alt="tic tac toe game"
                className="w-80 h-80 object-cover rounded-3xl cursor-pointer hover:shadow-lg hover:shadow-primary-color"
                onClick={() => HandleClick("image6")}
              />
              {show === "image6" && (
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center w-full h-full bg-primary-color text-secondary-color rounded-3xl cursor-pointer dark:bg-secondary-color dark:text-primary-color"
                  onClick={HandleClick}>
                  <h2 className="text-2xl mb-2 tracking-tighter">
                    Color Scheme Generator
                  </h2>
                  <p className="p-2">
                  Color scheme generator generates a color palette of a particular color of your choosing. You can also clip a particular color hex code to use it in your projects.
                  </p>
                  <div className="flex">
                    <p className="text-4xl">
                      <BiLogoHtml5 />
                    </p>
                    <p className="text-4xl">
                      <BiLogoCss3 />
                    </p>
                    <p className="text-4xl">
                      <BiLogoJavascript />
                    </p>
                    <p className="text-4xl">
                      <TbApi />
                    </p>
                  </div>
                </div>
               )}
            </div>
            <div className="flex justify-between items-center mt-6">   
              <div>
                <a
                  href="https://ayush-color-scheme-generator.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-color px-4 py-2 text-xl max-md:text-base text-secondary-color rounded-lg mr-2 hover:bg-secondary-color hover:text-primary-color hover:border-2 hover:border-primary-color dark:bg-secondary-color dark:text-primary-color dark:hover:border-secondary-color dark:hover:bg-primary-color dark:hover:text-secondary-color">
                  Live
                </a>
                <a
                  href="https://github.com/Ayush1M/color-scheme-generator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-color px-4 py-2 text-xl max-md:text-base text-secondary-color rounded-lg hover:bg-secondary-color hover:text-primary-color hover:border-2 hover:border-primary-color dark:bg-secondary-color dark:text-primary-color dark:hover:border-secondary-color dark:hover:bg-primary-color dark:hover:text-secondary-color">
                  Repo
                </a>
              </div>
              <div className="flex dark:text-secondary-color">
                <p className="text-4xl max-lg:text-3xl">
                  <BiLogoHtml5 />
                </p>
                <p className="text-4xl max-lg:text-3xl">
                  <BiLogoCss3 />
                </p>
                <p className="text-4xl max-lg:text-3xl">
                  <BiLogoJavascript />
                </p>
                <p className="text-4xl max-lg:text-3xl">
                  <TbApi />
                </p>
              </div>
            </div>
          </div>
          
        </div>

        <div className="text-center mt-40 text-3xl">
          <p className="mb-6 px-2 dark:text-secondary-color">Want to see more of my work?</p>
          <a href="https://github.com/Ayush1M"
          className="bg-primary-color text-secondary-color p-3 text-xl rounded-lg flex justify-center items-center max-w-max m-auto hover:bg-secondary-color hover:text-primary-color hover:border-2 hover:border-primary-color dark:bg-secondary-color dark:text-primary-color dark:hover:border-secondary-color dark:hover:bg-primary-color dark:hover:text-secondary-color"
          target="_blank"
          rel="noopener noreferrer">
          Check my Github<BiLogoGithub className="text-2xl ml-1"/>
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;