import { useEffect, useState } from "react";
import Hero from "../Components/Hero";
import SearchBar from "../Components/SearchBar";
import { fetchCars } from "../utils";
import { CarType } from "../types";
import Card from "../Components/Card";
import CustomFilter from "../Components/CustomFilter";
import { fuels, years } from "../Constants";
import { useSearchParams } from "react-router-dom";
import ShowMore from "../Components/ShowMore";
const MainPage = () => {
  const [cars, setCars] = useState<CarType[]>([]);
  const [params, setParams] = useSearchParams();
  useEffect(() => {
    const paramsObj = Object.fromEntries(params.entries());
    fetchCars(paramsObj).then((res) => setCars(res));
  }, [params]);
  return (
    <div>
      <Hero cars={cars} />
      <div id="catalogue" className="mt-12 padding-x padding-y max-width">
        <div className=" home__text-container">
          <h1 className=" text-4xl font-extrabold">Araba Kataloğu</h1>
          <p>Beğenebileceğin arabaları keşfet</p>
        </div>
        {/* Filtreleme alanı */}
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title={"Yakıt Tipi"} options={fuels} />
            <CustomFilter title={"Yıl"} options={years} />
          </div>
        </div>
        {!cars || cars.length < 1 ? (
          <div className="home__error-container">
            <h2>Üzgünüz sonuç yok</h2>
          </div>
        ) : (
          <div className="home__cars-wrapper">
            {cars.map((car, key) => (
              <section key={key}>
                <div>
                  <Card car={car} />
                </div>
              </section>
            ))}
          </div>
        )}
        <ShowMore />
      </div>
    </div>
  );
};
export default MainPage;
