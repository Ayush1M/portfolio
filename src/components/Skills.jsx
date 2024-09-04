import { BiLogoHtml5, 
        BiLogoCss3, 
        BiLogoJavascript, 
        BiLogoTypescript, 
        BiLogoReact, 
        BiLogoTailwindCss, 
        BiLogoGit, 
        BiLogoGithub, 
        BiLogoFigma, 
        BiLogoVisualStudio, 
        BiLogoFirebase } from "react-icons/bi";
import { TbApi } from "react-icons/tb";

const Skills = () => {
    return(
        <section className="mt-40 flex flex-col items-center">
        <h2 className="mb-16 text-5xl tracking-tight dark:text-secondary-color">My Skills</h2>
        <div className="grid grid-cols-11 gap-8 px-4 max-l:grid-cols-9 max-lg:grid-cols-8 max-md2:grid-cols-7 max-md1:grid-cols-6 max-sm1:grid-cols-5 max-sm2:grid-cols-4 max-sm3:grid-cols-3">
          <p className="text-xl flex flex-col items-center dark:text-secondary-color">
            <BiLogoHtml5 className="mb-4 text-6xl" />
            HTML
          </p>
          <p className="text-xl flex flex-col items-center dark:text-secondary-color">
            <BiLogoCss3 className="mb-4 text-6xl" />
            CSS
          </p>
          <p className="text-xl flex flex-col items-center dark:text-secondary-color">
            <BiLogoJavascript className="mb-4 text-6xl" />
            JavaScript
          </p>
          <p className="text-xl flex flex-col items-center dark:text-secondary-color">
            <BiLogoTypescript className="mb-4 text-6xl" />
            TypeScript
          </p>
          <p className="text-xl flex flex-col items-center dark:text-secondary-color">
            <BiLogoReact className="mb-4 text-6xl" />
            React
          </p>
          <p className="flex flex-col items-center dark:text-secondary-color">
            <BiLogoTailwindCss className="mb-4 text-6xl" />
            Tailwind CSS
          </p>
          <p className="text-xl flex flex-col items-center dark:text-secondary-color">
            <TbApi className="mb-4 text-6xl" />
            Api
          </p>
          <p className="text-xl flex flex-col items-center dark:text-secondary-color">
            <BiLogoGit className="mb-4 text-6xl" />
            Git
          </p>
          <p className="text-xl flex flex-col items-center dark:text-secondary-color">
            <BiLogoGithub className="mb-4 text-6xl" />
            Github
          </p>
          <p className="text-xl flex flex-col items-center dark:text-secondary-color">
            <BiLogoFigma className="mb-4 text-6xl" />
            Figma
          </p>
          <p className="text-xl flex flex-col items-center dark:text-secondary-color">
            <BiLogoVisualStudio className="mb-4 text-6xl" />
            VSCode
          </p>
          <p className="text-xl flex flex-col items-center dark:text-secondary-color">
            <BiLogoFirebase className="mb-4 text-6xl" />
            Firebase
          </p>
        </div>
      </section>
    )
}

export default Skills