/* eslint-disable @typescript-eslint/no-unused-vars */
import { ButtonProps } from "../../types";
const CustomButton = ({
  title,
  designs,
  btnType,
  handleClick,
  rightIcon,
}: ButtonProps) => {
  return (
    <button
      type={btnType || "button"}
      onClick={handleClick}
      className={`custom-btn transition bg-blue-500 rounded-full hover:bg-blue-800 text-white ${designs}`}
    >
      <span className=" flex-1">{title}</span>
      <div className="relative w-6 h-6">
        <img src={rightIcon} />
      </div>
    </button>
  );
};
export default CustomButton;
