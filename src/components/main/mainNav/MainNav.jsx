import styles from "./MainNav.module.css"
import { IoHomeOutline } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
import { RiContactsBook3Line } from "react-icons/ri";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";


const MainNav = () => {
    return (
        <div className="flex flex-row justify-center px-0 items-center">
            <button className={`${styles.buttonNav}`}>
                <IoHomeOutline />
                About
            </button>
            <button className={`${styles.buttonNav}`}>
                <GiSkills />
                Skills
            </button>
            <button className={`${styles.buttonNav}`}>
                <IoBagOutline />
                Experience
            </button>
            <button className={`${styles.buttonNav}`}>
                <GrProjects />
                Project
            </button>
            <button className={`${styles.buttonNav}`}>
                <RiContactsBook3Line />
                Contact
            </button>
        </div>
    )
}

export default MainNav