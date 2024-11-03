import Sidebar from "../sideBar/Sidebar"
// import Experience from "./experience/Experience"
// import Project from "./project/Project"
// import AboutMe from "./aboutMe/AboutMe"
// import Skills from "./skills/Skills"
import Contact from "./contact/Contact"

const Main = () => {
    return (
        <div className="flex flex-row justify-between w-full">
            <div className="w-[34%] py-3">
                <Sidebar />
            </div>
            <div className="w-[64%] py-3">
                <Contact />
            </div>
        </div>
    )
}

export default Main