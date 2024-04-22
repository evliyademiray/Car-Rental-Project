import ReactSelect from "react-select";
import { makes } from "../../Constants";
import { useMemo, useState } from "react";
import { OptionType } from "../../types";
import { useSearchParams } from "react-router-dom";
type ButtonProps = {
  styling: string;
};
const SearchButton = ({ styling }: ButtonProps) => {
  return (
    <button className={` ml-3 z-10 ${styling}`}>
      <img src="/magnifying-glass.svg" alt="" />
    </button>
  );
};
const SearchBar = () => {
  const [make, setMake] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [params, setParams] = useSearchParams();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setParams({
      make: make.toLowerCase(),
      model: model.toLowerCase(),
    });
  };
  const options: OptionType[] = useMemo(
    () =>
      makes.map((item) => ({
        label: item,
        value: item,
      })),
    [make]
  );
  return (
    <form className="searchbar gap-3" onSubmit={handleSubmit}>
      <div className="searchbar__item text-black">
        <ReactSelect
          className="w-full"
          options={options}
          onChange={(e) => e && setMake(e.value)}
        />
        <SearchButton styling={" sm:hidden"} />
      </div>
      <div className="searchbar__item">
        <img
          className="absolute ml-4"
          src="/public/model-icon.png"
          width={25}
        />
        <input
          onChange={(e) => setModel(e.target.value)}
          className="searchbar__input rounded text-black"
          type="text"
          placeholder="Ör:Civic"
        />
        <SearchButton styling={" sm:hidden"} />
      </div>
      <SearchButton styling={" max-sm:hidden"} />
    </form>
  );
};
export default SearchBar;
