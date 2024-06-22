import myImage from "../assets/my-image.jpg"

const Main = () => {
    return (
        <>
        <section className="flex justify-evenly items-center">
            <div>
            <h2>Hey 👋</h2>
            <span>My name is Ayush</span>
            <p>I build things for the web.</p>
            <p>Focusing on the accessiblity and responsive design.</p>
            </div>
            <img src={myImage} alt="my image" className="w-72 rounded-full"/>
        </section>

        <section>

        </section>
        </>
    )
}

export default Main