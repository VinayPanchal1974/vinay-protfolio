import styles from "./Skills.module.css"
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";

const Skills = () => {
    return (
        <div className="px-16 py-4 bg-white border border-white rounded-custom-1 mt-4">
            <div className="flex flex-row items-center mb-2">
                <h1>SKILLS</h1>
                <div className={`${styles['horizontal-bar']}`}></div>
            </div>
            <div className="flex flex-row justify-between">
                <div className="bg-card1 w-[30%] mb-8 px-6 py-7 rounded-custom flex flex-col items-center">
                    <p className="flex flex-row items-center text-4xl mb-2">
                        <FaReact style={{color:"#5ed2f3"}}/>
                    </p>
                    <div>
                        <h2>REACT</h2>
                    </div>
                </div>
                <div className="bg-card2 w-[30%] mb-8 px-5 py-7 rounded-custom flex flex-col items-center">
                    <p className="flex flex-row items-center text-4xl mb-2">
                        <FaNode style={{color:"#1ed289"}}/>
                    </p>
                    <div>
                        <h2>NODE.JS</h2>
                    </div>
                </div>
                <div className="bg-card1 w-[30%] mb-8 px-5 py-7 rounded-custom flex flex-col items-center">
                    <p className="flex flex-row items-center text-4xl mb-2">
                        <SiTypescript style={{color:"#137ece"}}/>
                    </p>
                    <div>
                        <h2>TYPESCRIPT</h2>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-between">
                <div className="bg-card2 w-[30%] mb-8 px-6 py-7 rounded-custom flex flex-col items-center">
                    <p className="flex flex-row items-center text-4xl mb-2">
                        <RiNextjsFill style={{color:"black"}}/>
                    </p>
                    <div>
                        <h2>NEXT.JS</h2>
                    </div>
                </div>
                <div className="bg-card1 w-[30%] mb-8 px-5 py-7 rounded-custom flex flex-col items-center">
                    <p className="flex flex-row items-center text-4xl mb-2">
                        <IoLogoJavascript style={{color:"#f0dc56"}}/>
                    </p>
                    <div>
                        <h2>JAVASCRIPT</h2>
                    </div>
                </div>
                <div className="bg-card2 w-[30%] mb-8 px-5 py-7 rounded-custom flex flex-col items-center">
                    <p className="flex flex-row items-center text-4xl mb-2">
                        <FaCss3Alt style={{color:"#1176bd"}}/>
                    </p>
                    <div>
                        <h2>CSS</h2>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-between">
                <div className="bg-card1 w-[30%] mb-8 px-6 py-7 rounded-custom flex flex-col items-center">
                    <p className="flex flex-row items-center text-4xl mb-2">
                        <FaHtml5 style={{color:"#e5532f"}}/>
                    </p>
                    <div>
                        <h2>HTML</h2>
                    </div>
                </div>
                <div className="bg-card2 w-[30%] mb-8 px-5 py-7 rounded-custom flex flex-col items-center">
                    <p className="flex flex-row items-center text-4xl mb-2">
                        <SiMongodb style={{color:"#55ad48"}}/>
                    </p>
                    <div>
                        <h2>MONGODB</h2>
                    </div>
                </div>
                <div className="bg-card1 w-[30%] mb-8 px-5 py-7 rounded-custom flex flex-col items-center">
                    <p className="flex flex-row items-center text-4xl mb-2">
                        <TbSql style={{color:"#3b9cdb"}}/>
                    </p>
                    <div>
                        <h2>SQL</h2>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-between">
                <div className="bg-card2 w-[30%] mb-8 px-6 py-7 rounded-custom flex flex-col items-center">
                    <p className="flex flex-row items-center text-4xl mb-2">
                        <FaGitAlt style={{color:"#f0563b"}}/>
                    </p>
                    <div>
                        <h2>GIT</h2>
                    </div>
                </div>
                <div className="bg-card1 w-[30%] mb-8 px-5 py-7 rounded-custom flex flex-col items-center">
                    <p className="flex flex-row items-center text-4xl mb-2">
                        <FaAngular style={{color:"#df1538"}}/>
                    </p>
                    <div>
                        <h2>ANGULAR</h2>
                    </div>
                </div>
                <div className="bg-card2 w-[30%] mb-8 px-5 py-7 rounded-custom flex flex-col items-center">
                    <p className="flex flex-row items-center text-4xl mb-2">
                        <FaWordpress style={{color:"#2a789d"}}/>
                    </p>
                    <div>
                        <h2>WORDPRESS</h2>
                    </div>
                </div>
            </div>
          
        </div>
    )
}

export default Skills