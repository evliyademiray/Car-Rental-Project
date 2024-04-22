import { motion } from "framer-motion";
import CustomButton from "../CustomButton";
import { generateImage } from "../../utils";

const Hero = ({ cars }) => {
  const scrollTo = () => {};
  return (
    <div className=" hero">
      <div className=" pt-36 flex-1 padding-x max-h-[920px]">
        <h1 className=" hero__title">Özgürlüğü Hisset, Yolculuğa Başla!</h1>
        <p className=" hero__subtitle text-gray-200">
          Altın standartta hizmetle unutulmaz bir yolculuğa hazır mısın? Araç
          Kiralama deneyimini Altın Seçenekleri ile taçlandırarak her anını özel
          kılabilirsin
        </p>
        <CustomButton
          title="Arabaları Keşfet"
          designs="mt-10"
          handleClick={scrollTo}
        />
      </div>
      <div className=" w-100 flex justify-center">
        <motion.img
          initial={{ translateX: 200, scale: 0.7 }}
          whileInView={{ translateX: 0, scale: 1 }}
          transition={{ duration: 1 }}
          src="/hero.png"
          className=" img-fluid object-contain"
        />
      </div>
    </div>
  );
};
export default Hero;
