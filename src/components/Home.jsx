import myImage from "../assets/my-image.jpg"
import { LiaLinkedinIn } from "react-icons/lia";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

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
        </>
    )
}

export default Home