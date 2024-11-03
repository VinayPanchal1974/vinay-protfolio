import { PUBLIC_IMG_URL } from "../../constant/url"
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import UserInfo from "./userInfo/UserInfo";

const Sidebar = () => {
    return (
        <div className="relative w-full mt-4 pt-24 bg-white rounded-custom-1 flex flex-col items-center">
            <img
                src={`${PUBLIC_IMG_URL}user-2.jpg`}
                alt="Floating"
                className="absolute -top-28 w-48 h-48 rounded-custom"
            />
            <p className="text-4xl font-medium tracking-wide">Vinay Kumar</p>
            <p className="text-gray-400 mt-5">FullStack Developer</p>
            <div className="flex flex-row justify-evenly w-[80%] mt-4 mb-4">
                <button className="bg-card2 w-16 h-16 flex justify-center items-center rounded-custom text-facebook">
                    <FaFacebookF />
                </button>
                <button className="bg-card2 w-16 h-16 flex justify-center items-center rounded-custom text-linkidin">
                    <FaLinkedinIn />
                </button>
                <button className="bg-card2 w-16 h-16 flex justify-center items-center rounded-custom">
                    <FaXTwitter />
                </button>
                <button className="bg-card2 w-16 h-16 flex justify-center items-center rounded-custom">
                    <FaGithub />
                </button>
            </div>
            <div className="w-[85%]">
                <UserInfo />
            </div>
        </div>
    )
}

export default Sidebar