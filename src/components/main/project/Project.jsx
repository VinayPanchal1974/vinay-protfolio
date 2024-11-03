import styles from "./Project.module.css"
import { MdWifiCalling3 } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";

const Project = () => {
  return (
    <div className="px-16 py-4 bg-white border border-white rounded-custom-1 mt-4">
            <div className="flex flex-row items-center mb-2">
                <h1>PROJECT</h1>
                <div className={`${styles['horizontal-bar']}`}></div>
            </div>
            <div className="flex flex-row justify-between">
                <div className="bg-card1 w-[48%] px-5 py-7 rounded-custom">
                    <p className="flex flex-row items-center">
                        <MdWifiCalling3 style={{ color: "orange" }} /> &nbsp; Phone:
                    </p>
                    <div>
                        <p className="ms-6"> +91 8607212171</p>
                        <p className="ms-6"> +91 8168619168</p>
                    </div>
                </div>
                <div className="bg-card2 w-[48%] px-5 py-7 rounded-custom">
                    <p className="flex flex-row items-center">
                        <MdOutlineMailOutline style={{ color: "orange" }} /> &nbsp; Email:
                    </p>
                    <div>
                        <p className="ms-6">vinaypanchal115@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Project