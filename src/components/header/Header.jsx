import { PUBLIC_IMG_URL } from "../../constant/url";
import MainNav from "../main/mainNav/MainNav";
const Header = () => {
    return (
        <div className="flex flex-row justify-between mb-24  border-b">
            <div>
                <img src={`${PUBLIC_IMG_URL}Vinay_portfolio_1.png`} alt="logo" style={{ width: '150px', height: '150px' }} />
            </div>
            <div className="flex flex-row justify-end">
                <MainNav />
            </div>
        </div>
    )
}
export default Header;