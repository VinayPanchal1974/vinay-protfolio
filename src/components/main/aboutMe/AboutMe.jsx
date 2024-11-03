import styles from "./AboutMe.module.css"
import { FaCode } from "react-icons/fa6";
import { IoLogoAppleAr } from "react-icons/io5";
import { SiCodementor } from "react-icons/si";
const AboutMe = () => {
    return (
        <div className="px-16 py-4 bg-white border border-white rounded-custom-1 mt-4">
            <div className="flex flex-row items-center mb-6">
                <h1>ABOUT ME</h1>
                <div className={`${styles['horizontal-bar']}`}></div>
            </div>
            <div>
                <p className="text-justify leading-loose ">
                    Hello there! I&apos;m thrilled to welcome you to my portfolio. I am a passionate and versatile full-stack developer with a keen interest in exploring the latest cutting-edge technologies.
                    My journey in the world of web development has been nothing short of exhilarating, and I constantly strive to enhance my skills and embrace emerging trends in the industry.
                </p>
            </div>
            <div className="flex flex-row items-center mb-4 mt-5">
                <h2>What I do !</h2>
            </div>
            <div className="flex flex-row justify-between">
                <div className="bg-card1 w-[48%] px-5 py-2 rounded-custom">
                    <h3 className="flex flex-row items-center font-medium">
                        <FaCode style={{ color: "red" }} /> &nbsp; Web development
                    </h3>
                    <p className="text-justify">
                    As a developer, I find myself most captivated by the power and flexibility of NEXT.js. I&apos;m always eager to dive into new projects that leverage NEXT.js and discover innovative ways to create fast, scalable, and user-friendly applications.
                    </p>
                </div>

                <div className="bg-card2 w-[48%] px-5 py-2 rounded-custom">
                    <h3 className="flex flex-row items-center font-medium">
                        <IoLogoAppleAr style={{ color: "orange" }} /> &nbsp; UI/UX Designing
                    </h3>
                    <p className="text-justify">
                    Crafting visually appealing and intuitive user interfaces that offer a delightful user experience is something I&apos;m truly fanatic about.
                    </p>
                </div>
            </div>
            <div className="flex flex-row justify-between mt-6">
                <div className="bg-card2 w-[48%] px-5 py-2 rounded-custom">
                    <h3 className="flex flex-row items-center font-medium">
                        <SiCodementor style={{ color: "orange" }} /> &nbsp; Mentorship
                    </h3>
                    <p className="text-justify">
                    I have also found great joy in sharing my knowledge with others. Being a technical mentor allows me to give back to the community that has supported me throughout my
                    </p>
                </div>
            </div>
            

        </div>
    )
}

export default AboutMe