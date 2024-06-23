import myImage from "../assets/my-image.jpg"
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


const Home = () => {
    return (
        <>
        <section className="mt-28">
            <div className="flex justify-evenly items-center">
            <div>
            <h2 className="text-6xl mb-4">Hey👋</h2>
            <p className="text-6xl mb-6">My name is <span className="text-orange-500">Ayush</span></p>
            <p className="text-xl">I build things for the web.</p>
            <p className="text-xl">Focusing on the accessiblity and responsive design.</p>
            <div className="flex items-center text-6xl mt-20">
                <LiaLinkedinIn className="p-2 mr-16 rounded-full border-2 border-primary-color bg-primary-color text-secondary-color hover:text-primary-color hover:bg-secondary-color cursor-pointer" />
                <FaGithub className="p-2 mr-16 rounded-full border-2 border-primary-color bg-primary-color text-secondary-color hover:text-primary-color hover:bg-secondary-color cursor-pointer"/>
                <MdEmail className="p-2 rounded-full border-2 border-primary-color bg-primary-color text-secondary-color hover:text-primary-color hover:bg-secondary-color cursor-pointer"/>
            </div>
            </div>
            <img src={myImage} alt="my image" className="w-72 rounded-full"/>
            </div>
        </section>

        <section className="mt-40 flex flex-col items-center">
            <h2 className="mb-16 text-5xl">My Skills</h2>
            <div className="flex flex-wrap gap-10">
                <p className="text-xl flex flex-col items-center"><BiLogoHtml5 className="mb-4 text-5xl"/>HTML</p>
                <p className="text-xl flex flex-col items-center"><BiLogoCss3 className="mb-4 text-5xl"/>CSS</p>
                <p className="text-xl flex flex-col items-center"><BiLogoJavascript className="mb-4 text-5xl"/>JavaScript</p>
                <p className="text-xl flex flex-col items-center"><BiLogoTypescript className="mb-4 text-5xl"/>TypeScript</p>
                <p className="text-xl flex flex-col items-center"><BiLogoReact className="mb-4 text-5xl"/>React</p>
                <p className="text-xl flex flex-col items-center"><BiLogoTailwindCss className="mb-4 text-5xl"/>Tailwind CSS</p>
                <p className="text-xl flex flex-col items-center"><TbApi className="mb-4 text-5xl"/>Api</p>
                <p className="text-xl flex flex-col items-center"><BiLogoGit className="mb-4 text-5xl"/>Git</p>
                <p className="text-xl flex flex-col items-center"><BiLogoGithub className="mb-4 text-5xl"/>Github</p>
                <p className="text-xl flex flex-col items-center"><BiLogoFigma className="mb-4 text-5xl"/>Figma</p>
                <p className="text-xl flex flex-col items-center"><BiLogoVisualStudio className="mb-4 text-5xl"/>VSCode</p>
                <p className="text-xl flex flex-col items-center"><BiLogoFirebase className="mb-4 text-5xl"/>Firebase</p> 
            </div>
        </section>
        </>
    )
}

export default Home