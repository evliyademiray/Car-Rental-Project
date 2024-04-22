/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion } from "framer-motion";
import { CarType } from "../../types";
import CarInfo from "./CarInfo";
import CustomButton from "../CustomButton";
import { useState } from "react";
import DetailModal from "./DetailModal";
import { generateImage } from "../../utils";
type CardProps = {
  car: CarType;
};
const Card = ({ car }: CardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="car-card group"
    >
      <h2 className=" car-card__content-title">
        {car.make} {car.model}
      </h2>
      <p className=" flex mt-6 text-[32px]">
        <span className=" text-[19px] font-semibold">₺</span>
        {Math.round(Math.random() * 5000) + 500}
        <span className=" text-[14px] self-end">/gün</span>
      </p>
      <div className=" relative w-full h-40 my-3">
        <img src={generateImage(car)} alt="" className=" w-full h-full object-contain" />
      </div>
      {/* Alt kısım */}
      <div className=" relative flex w-full mt-2">
        <div className="group-hover:invisible flex justify-between w-full mt-2 text-gray-500">
          <CarInfo
            title={car.transmission === "a" ? "Otomatik" : "Manuel"}
            icon="/public/steering-wheel.svg"
          />
          <CarInfo
            title={car.drive ? car.drive.toUpperCase() : "Belirsiz"}
            icon="/public/tire.svg"
          />
          <CarInfo title={car.city_mpg + " MPG"} icon="/public/gas.svg" />
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            handleClick={() => setIsOpen(true)}
            title="Daha Fazla"
            designs=" w-full py-[16px]"
            rightIcon="/public/right-arrow.svg"
          />
        </div>
      </div>
      <DetailModal
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </motion.div>
  );
};
export default Card;
