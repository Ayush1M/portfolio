import myImage from "../assets/my-image.jpg";
import { LiaLinkedinIn } from "react-icons/lia";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiLogoHtml5 } from "react-icons/bi";
import { BiLogoCss3 } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";
import { BiLogoReact } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";
import { TbApi } from "react-icons/tb";
import { BiLogoGit } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
import { BiLogoFigma } from "react-icons/bi";
import { BiLogoVisualStudio } from "react-icons/bi";
import { BiLogoFirebase } from "react-icons/bi";
import project1 from "../images/project-1.png";
import project2 from "../images/project-2.png";
import project3 from "../images/project-3.png";
import { useState } from "react";

const Home = () => {
  const [show, setShow] = useState(null);

  const HandleClick = (imageId) => {
    setShow(show === imageId ? null : imageId);
  };

  return (
    <>
      <section className="mt-28">
        <div className="flex justify-evenly items-center">
          <div>
            <h2 className="text-6xl mb-4">Hey👋</h2>
            <p className="text-6xl mb-6">
              My name is <span className="text-orange-500">Ayush</span>
            </p>
            <p className="text-xl tracking-tight">
              I build things for the web.
            </p>
            <p className="text-xl tracking-tight">
              Focusing on the accessiblity and responsive design.
            </p>
            <div className="flex items-center text-6xl mt-20">
              <LiaLinkedinIn className="p-2 mr-16 rounded-full border-2 border-primary-color bg-primary-color text-secondary-color hover:text-primary-color hover:bg-secondary-color cursor-pointer" />
              <FaGithub className="p-2 mr-16 rounded-full border-2 border-primary-color bg-primary-color text-secondary-color hover:text-primary-color hover:bg-secondary-color cursor-pointer" />
              <MdEmail className="p-2 rounded-full border-2 border-primary-color bg-primary-color text-secondary-color hover:text-primary-color hover:bg-secondary-color cursor-pointer" />
            </div>
          </div>
          <img
            src={myImage}
            alt="my image"
            className="w-72 rounded-full border-2 border-primary-color shadow-lg shadow-primary-color"
          />
        </div>
      </section>

      <section className="mt-40 flex flex-col items-center">
        <h2 className="mb-16 text-5xl tracking-tight">My Skills</h2>
        <div className="flex flex-wrap gap-10">
          <p className="text-xl flex flex-col items-center">
            <BiLogoHtml5 className="mb-4 text-6xl" />
            HTML
          </p>
          <p className="text-xl flex flex-col items-center">
            <BiLogoCss3 className="mb-4 text-6xl" />
            CSS
          </p>
          <p className="text-xl flex flex-col items-center">
            <BiLogoJavascript className="mb-4 text-6xl" />
            JavaScript
          </p>
          <p className="text-xl flex flex-col items-center">
            <BiLogoTypescript className="mb-4 text-6xl" />
            TypeScript
          </p>
          <p className="text-xl flex flex-col items-center">
            <BiLogoReact className="mb-4 text-6xl" />
            React
          </p>
          <p className="text-xl flex flex-col items-center">
            <BiLogoTailwindCss className="mb-4 text-6xl" />
            Tailwind CSS
          </p>
          <p className="text-xl flex flex-col items-center">
            <TbApi className="mb-4 text-6xl" />
            Api
          </p>
          <p className="text-xl flex flex-col items-center">
            <BiLogoGit className="mb-4 text-6xl" />
            Git
          </p>
          <p className="text-xl flex flex-col items-center">
            <BiLogoGithub className="mb-4 text-6xl" />
            Github
          </p>
          <p className="text-xl flex flex-col items-center">
            <BiLogoFigma className="mb-4 text-6xl" />
            Figma
          </p>
          <p className="text-xl flex flex-col items-center">
            <BiLogoVisualStudio className="mb-4 text-6xl" />
            VSCode
          </p>
          <p className="text-xl flex flex-col items-center">
            <BiLogoFirebase className="mb-4 text-6xl" />
            Firebase
          </p>
        </div>
      </section>

      <section className="mt-40">
        <h2 className="text-center text-5xl mb-32 tracking-tight">
          My Projects
        </h2>

        <div className="grid grid-cols-3 gap-8 place-items-center">
          <div>
            <div className="relative group rounded-3xl">
              <img
                src={project1}
                alt="todo app"
                className="w-80 h-80 object-cover rounded-3xl cursor-pointer hover:shadow-lg hover:shadow-primary-color"
                onClick={() => HandleClick("image1")} />
              {show === "image1" && (
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center w-full h-full bg-primary-color text-secondary-color rounded-3xl cursor-pointer"
                  onClick={HandleClick}>
                  <h2 className="text-2xl mb-2 tracking-tighter">Todo App</h2>
                  <p className="p-2">
                    A Todo App consist of adding and deleting a todo, filtering
                    todo in active or completed and dark/light mode.
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
                  href=""
                  className="bg-primary-color px-4 py-2 text-xl text-secondary-color rounded-lg mr-2 hover:bg-secondary-color hover:text-primary-color hover:border-2 hover:border-primary-color">
                  Live
                </a>
                <a
                  href=""
                  className="bg-primary-color px-4 py-2 text-xl text-secondary-color rounded-lg hover:bg-secondary-color hover:text-primary-color hover:border-2 hover:border-primary-color">
                  Repo
                </a>
              </div>
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
                  className="absolute inset-0 flex flex-col items-center justify-center w-full h-full bg-primary-color text-secondary-color rounded-3xl cursor-pointer"
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
                  href=""
                  className="bg-primary-color px-4 py-2 text-xl text-secondary-color rounded-lg mr-2 hover:bg-secondary-color hover:text-primary-color hover:border-2 hover:border-primary-color">
                  Live
                </a>
                <a
                  href=""
                  className="bg-primary-color px-4 py-2 text-xl text-secondary-color rounded-lg hover:bg-secondary-color hover:text-primary-color hover:border-2 hover:border-primary-color">
                  Repo
                </a>
              </div>
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
          </div>

          <div>
            <div className="relative group rounded-3xl">
              <img
                src={project3}
                alt="tic tac toe game"
                className="w-80 h-80 object-cover rounded-3xl cursor-pointer hover:shadow-lg hover:shadow-primary-color"
                onClick={() => HandleClick("image3")}
              />
              {show === "image3" && (
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center w-full h-full bg-primary-color text-secondary-color rounded-3xl cursor-pointer"
                  onClick={HandleClick}>
                  <h2 className="text-2xl mb-2 tracking-tighter">
                    Quizzical
                  </h2>
                  <p className="p-2">
                  A fun quiz app made with React and React Router.
                  </p>
                  <div className="flex">
                    <p className="text-4xl">
                      <BiLogoReact />
                    </p>
                    <p className="text-4xl">
                      <BiLogoCss3 />
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
                  href=""
                  className="bg-primary-color px-4 py-2 text-xl text-secondary-color rounded-lg mr-2 hover:bg-secondary-color hover:text-primary-color hover:border-2 hover:border-primary-color">
                  Live
                </a>
                <a
                  href=""
                  className="bg-primary-color px-4 py-2 text-xl text-secondary-color rounded-lg hover:bg-secondary-color hover:text-primary-color hover:border-2 hover:border-primary-color">
                  Repo
                </a>
              </div>
              <div className="flex">
                <p className="text-4xl">
                  <BiLogoReact />
                </p>
                <p className="text-4xl">
                  <BiLogoCss3 />
                </p>
                <p className="text-4xl">
                  <TbApi />
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Home;