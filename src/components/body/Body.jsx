import Header from "../header/header"
import Main from "../main/Main"
// import MainNav from "../main/mainNav/MainNav"

const Body = () => {
    return (
        <div className={`flex flex-col w-100 px-24 bg-primary`}>
            <div>
                <Header />
            </div>
            {/* <div className="flex flex-row justify-end">
                <MainNav />
            </div> */}
            <div>
                <Main />
            </div>

        </div>
    )
}

export default Body