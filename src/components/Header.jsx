import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const Header = ({children, darkMode, setDarkMode}) => {
    return (
        <header className="p-6 flex justify-between items-center">
            {children}
            <button className="text-primary-color dark:text-secondary-color text-3xl mr-12" 
            onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? <MdLightMode /> : <MdDarkMode />}
            </button>
        </header>
    )
}

export default Header