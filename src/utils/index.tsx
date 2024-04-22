import { colors } from "../Constants";
import { CarType, filterType } from "../types";

const options = {
  headers: {
    "X-RapidAPI-Key": "4a33083243mshd021647818f6392p16c21cjsne7d5015d461b",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};
export async function fetchCars(filters: filterType) {
  const {
    make = "BMW",
    model = "",
    limit = "5",
    year = "",
    fuel = "",
  } = filters;
  const res = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&model=${model}&fuel_type=${fuel}&year=${year}&limit=${limit}`,
    options
  );
  const data = res.json();
  return await data;
}
//Fotoğraf URL'i oluşturan bir metod
export const generateImage = (car: CarType, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", car.make);
  url.searchParams.append("modelFamily", car.model);
  url.searchParams.append("zoomType", "fullscreen");
  if (angle) {
    url.searchParams.append("angle", angle);
  }
  const i = Math.round(Math.random() * colors.length);
  url.searchParams.append("paintId", colors[i]);
  return String(url);
};
