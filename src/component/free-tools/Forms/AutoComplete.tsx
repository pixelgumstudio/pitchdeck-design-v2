import React, { useState, useEffect } from "react";
import Image from "next/image";
import { inputStyles, selectStyles } from "../../classes/styles";

type AddressData = {
  companyAddress: string;
  country: string;
  state: string;
  city: string;
};

type ErrorType = {
  country?: string;
  state?: string;
  city?: string;
  companyAddress?: string;
};

type Country = {
  name: string;
  iso2: string;
};

type StateType = {
  name: string;
  iso2: string;
};

type CityType = {
  name: string;
  code: string;
};

type AddressFormProps = {
  address: (data: AddressData) => void;
  error?: ErrorType;
};

const AddressForm: React.FC<AddressFormProps> = ({ address, error }) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [countryCode, setCountryCode] = useState<string>("");
  const [statesByCountry, setStatesByCountry] = useState<StateType[]>([]);
  const [citiesByState, setCitiesByState] = useState<CityType[]>([]);
  const [data, setData] = useState<AddressData>({
    companyAddress: "",
    country: "",
    state: "",
    city: "",
  });

  const requestOptions = {
    method: "GET",
    headers: {
      "X-CSCAPI-KEY":
        "aWltcVZQZjZnZzVQd2tUZzJYdXBMT0lNN3RxSkpqYnAySnRqbXNsWA==",
    },
    redirect: "follow" as const,
  };

  useEffect(() => {
    fetchCountries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await fetch(
        "https://api.countrystatecity.in/v1/countries",
        requestOptions
      );
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  const fetchStatesByCountry = async (countryCode: string) => {
    try {
      const response = await fetch(
        `https://api.countrystatecity.in/v1/countries/${countryCode}/states`,
        requestOptions
      );
      const data = await response.json();
      setStatesByCountry(data);
    } catch (error) {
      console.error(`Error fetching states for ${countryCode}:`, error);
    }
  };

  const fetchCitiesByState = async (state: string) => {
    try {
      const response = await fetch(
        `https://api.countrystatecity.in/v1/countries/${countryCode}/states/${state}/cities`,
        requestOptions
      );
      const data = await response.json();
      setCitiesByState(data);
    } catch (error) {
      console.error(`Error fetching cities for ${state}:`, error);
    }
  };

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const country = event.target.value;
    setData({ ...data, country: country, state: "", city: "" });
    fetchStatesByCountry(country);
    setCountryCode(country);
  };

  const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const state = event.target.value;
    setData({ ...data, state: state, city: "" });
    fetchCitiesByState(state);
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const city = event.target.value;
    setData({ ...data, city: city });
  };

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const addressValue = event.target.value;
    setData({ ...data, companyAddress: addressValue });
  };

  useEffect(() => {
    address(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <>
      <div className="flex flex-col">
        <label htmlFor="country" className="text-grey-800 text-16 font-medium">
          Country
        </label>
        <div className="grid relative">
          <select
            className={`${selectStyles(error?.country)}`}
            id="country"
            value={data.country}
            onChange={handleCountryChange}
          >
            <option value="">Select a country</option>
            {countries?.map((country) => (
              <option key={country.iso2} value={country.iso2}>
                {country.name}
              </option>
            ))}
          </select>
          <Image
            src={"/assets/select.svg"}
            alt="Drop down"
            width={24}
            height={24}
            className="w-6 h-6 absolute right-2 top-2 pointer-events-none row-start-1 col-start-1"
          />
        </div>
        {error?.country && <span className="text-red-500">{error?.country}</span>}
      </div>

      <div className="flex flex-col">
        <label htmlFor="state" className="text-grey-800 text-16 font-medium">
          State
        </label>
        <div className="grid relative">
          <select
            className={`${selectStyles(error?.state)} ${statesByCountry.length < 1 && 'text-[#C7C7CA] border-[#E8E8EA] bg-disabled'}`}
            id="state"
            value={data.state}
            onChange={handleStateChange}
            disabled={statesByCountry.length > 0 ? false : true}
          >
            <option value="">Select a state</option>
            {statesByCountry?.map((state) => (
              <option key={state.iso2} value={state.iso2}>
                {state.name}
              </option>
            ))}
          </select>
          <Image
            src={"/assets/select.svg"}
            alt="Drop down"
            width={24}
            height={24}
            className="w-6 h-6 absolute right-2 top-2 pointer-events-none row-start-1 col-start-1"
          />
        </div>
        {error?.state && <span className="text-red-500">{error?.state}</span>}
      </div>

      <div className="flex flex-col">
        <label htmlFor="address" className="text-grey-800 text-16 font-medium">
          Company Address
        </label>
        <input
          className={`${inputStyles(error?.companyAddress)}`}
          id="address"
          value={data.companyAddress}
          onChange={handleAddressChange}
          placeholder="12860 Blue Gentian Road"
        />
        {error?.companyAddress && <span className="text-red-500">{error?.companyAddress}</span>}
      </div>

      <div className="flex flex-col">
        <label htmlFor="city" className="text-grey-800 text-16 font-medium">
          City
        </label>
        <div className="grid relative">
          <select
            className={`${selectStyles(error?.city)}  ${citiesByState.length < 1 && 'text-[#C7C7CA] border-[#E8E8EA] bg-disabled'}`}
            id="city"
            value={data.city}
            onChange={handleCityChange}
            disabled={citiesByState.length > 0 ? false : true}
          >
            <option value="">Select a city</option>
            {citiesByState?.map((city) => (
              <option key={city.code} value={city.code}>
                {city.name}
              </option>
            ))}
          </select>
          <Image
            src={"/assets/select.svg"}
            alt="Drop down"
            width={24}
            height={24}
            className="w-6 h-6 absolute right-2 top-2 pointer-events-none row-start-1 col-start-1"
          />
        </div>
        {error?.city && <span className="text-red-500">{error?.city}</span>}
      </div>
    </>
  );
};

export default AddressForm;