import styles from "./Experience.module.css"

const Experience = () => {
    return (
        <div className="px-16 py-4 bg-white border border-white rounded-custom-1 mt-4">
            <div className="flex flex-row items-center mb-10">
                <h1>EXPERIENCE</h1>
                <div className={`${styles['horizontal-bar']}`}></div>
            </div>
            <div className="flex flex-row justify-between">
                <div className="bg-card1 w-[99%] px-5 py-7 mb-5 rounded-custom flex flex-col items-center">
                    <h1 className="border-b-2 border-red-500">
                        Quatrro
                    </h1>
                    <h4 className="flex flex-row items-center mt-2 mb-4">
                        Software Developer (May 2024 - Present)
                    </h4>
                    <p>
                        Worked on the development of a browser-based application using React and TypeScript, contributing to a 20% increase in user engagement.Enhanced application performance through optimization of REST API calls, leading to a 15% improvement in page speed. Collaborated effectively with cross-functional teams to ensure the timely delivery of project milestones as a Software Developer at I2pify
                    </p>
                </div>
            </div>
            <div className="flex flex-row justify-between">
                <div className="bg-card2 w-[99%] px-5 py-7 mb-5 rounded-custom flex flex-col items-center">
                    <h1 className="border-b-2 border-red-500">
                        i2pify
                    </h1>
                    <h4 className="flex flex-row items-center mt-2 mb-4">
                        Software Developer (Jan 2024 - April 2024)
                    </h4>
                    <p>
                        Worked on the development of a browser-based application using React and TypeScript, contributing to a 20% increase in user engagement.Enhanced application performance through optimization of REST API calls, leading to a 15% improvement in page speed. Collaborated effectively with cross-functional teams to ensure the timely delivery of project milestones as a Software Developer at I2pify
                    </p>
                </div>
            </div>
            <div className="flex flex-row justify-between">
                <div className="bg-card1 w-[99%] px-5 py-7 mb-5 rounded-custom flex flex-col items-center">
                    <h1 className="border-b-2 border-red-500">
                        Appin Technology
                    </h1>
                    <h4 className="flex flex-row items-center mt-2 mb-4">
                        Software Developer (Dec 2021 - Jan 2024)
                    </h4>
                    <p>
                        Worked on the development of a browser-based application using React and TypeScript, contributing to a 20% increase in user engagement.Enhanced application performance through optimization of REST API calls, leading to a 15% improvement in page speed. Collaborated effectively with cross-functional teams to ensure the timely delivery of project milestones as a Software Developer at I2pify
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Experience