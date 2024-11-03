import styles from './UserInfo.module.css'
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";




const UserInfo = () => {
    return (
        <div className="flex flex-col px-10 py-8 mb-10 bg-info rounded-custom ">
            <div className="flex flex-row items-center py-4 border-b">
                <div className="mr-8">
                    <MdOutlinePhoneAndroid style={{ color: "red" }} />
                </div>
                <div className="flex flex-col">
                    <p>Phone</p>
                    <p>+91 8607212171</p>
                </div>
            </div>
            <div className="flex flex-row items-center py-4 border-b">
                <div className="mr-8">
                    <HiOutlineMailOpen style={{ color: "orange" }} />
                </div>
                <div className="flex flex-col">
                    <p>Email</p>
                    <p>vinaypanchal115@gmail.com</p>
                </div>
            </div>
            <div className="flex flex-row items-center py-4 border-b">
                <div className="mr-8">
                    <HiOutlineLocationMarker style={{ color: "red" }} />
                </div>
                <div className="flex flex-col">
                    <p>Location</p>
                    <p>Bahadurgarh, Haryana, India</p>
                </div>
            </div>
            <div className='mt-4 flex justify-center'>
                <div className={`flex flex-row px-2 py-2 items-center rounded-custom-1 ${styles.downloadButton}`}>
                    <div className="mr-3 ml-2">
                        <FiDownload style={{ color: "white" }} />
                    </div>
                    <p style={{ color: "white" }}>Download Resume</p>
                </div>
            </div>
        </div>
    )
}

export default UserInfo