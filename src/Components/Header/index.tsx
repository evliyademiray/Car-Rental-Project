import { Link } from "react-router-dom";
import CustomButton from "../CustomButton";
const Header = () => {
  return (
    <header className=" w-full absolute z-10">
      <nav className=" max-w-[1440px] mx-auto flex justify-between items-center px-6 py-4 sm:px-16">
        <Link to={"/"}>
          <img src="/public/bmw.png" alt="" width={50} />
        </Link>
        <CustomButton title='Kaydol' btnType="button" designs=' min-w-[130px]' />
      </nav>
    </header>
  );
};
export default Header;