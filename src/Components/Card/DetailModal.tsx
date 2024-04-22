/* eslint-disable @typescript-eslint/no-unused-vars */
import { AnimatePresence, motion } from "framer-motion";
import { CarType } from "../../types";
import { generateImage } from "../../utils";
type DetailPropsType = {
  isOpen: boolean;
  closeModal: () => void;
  car: CarType;
};
const DetailModal = ({ isOpen, closeModal, car }: DetailPropsType) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className=" fixed inset-0 bg-black bg-opacity-25 z-20 flex items-center justify-center">
          <motion.div
            className="flex-col relative bg-white w-full max-w-lg max-h-[90vh] p-6 rounded-2xl flex shadow-xl overflow-auto gap-5"
            initial={{ opacity: 0, scale: 0.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.1 }}
          >
            {/* Kapatma Butonu */}
            <button
              onClick={closeModal}
              className=" cursor-pointer absolute top-1 end-1 p-2 bg-neutral-500 rounded-full z-10 hover:bg-red-400"
            >
              <img src="/close.svg" alt="" />
            </button>
            {/* Todo Fotoğraflar */}
            <div className=" flex-1 flex flex-col gap-3">
              <div className=" w-full relative h-40 bg-pattern bg-cover bg-center rounded-lg">
                <img src={generateImage(car)} alt="" className=" h-full mx-auto" />
              </div>
              {/* Küçük Resimler */}
              <div className="flex gap-3">
                <div className=" flex-1 flex relative w-full h-24 bg-primary-blue-100 ">
                  <img
                    src={generateImage(car, "13")}
                    alt=""
                    className=" h-full object-contain mx-auto"
                  />
                </div>
                <div className="flex-1 flex relative w-full h-24 bg-primary-blue-100 ">
                  <img
                    src={generateImage(car, "29")}
                    alt=""
                    className=" h-full object-contain mx-auto"
                  />
                </div>
                <div className="flex-1 flex relative w-full h-24 bg-primary-blue-100 ">
                  <img
                    src={generateImage(car, "33")}
                    alt=""
                    className=" h-full object-contain mx-auto"
                  />
                </div>
              </div>
            </div>
            {/* Araba Bilgileri */}
            {/* Objeden diziye çevirip dönme */}
            {Object.entries(car)
              .filter((i) => i[0] !== "year")
              .map(([key, value]) => (
                <div key={key} className=" flex justify-between">
                  <h4 className=" capitalize text-gray-500">
                    {key.replace("_", " ")}
                  </h4>
                  <p className=" text-black-100 font-semibold">{value}</p>
                </div>
              ))}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
export default DetailModal;
