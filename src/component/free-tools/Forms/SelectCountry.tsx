import React, { useState, useEffect, ChangeEvent } from 'react';

type Country = {
  name: {
    common: string;
  };
  cca2: string;
};

type City = {
  city: string;
};

const CityForm: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [cities, setCities] = useState<City[]>([]);
  const [selectedCity, setSelectedCity] = useState('');

  // Fetch countries data
  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data: Country[] = await response.json();
      setCountries(data);
    } catch (error) {
      console.error('Error fetching countries data: ', error);
    }
  };

  // Fetch cities data based on selected country
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch(`https://api.openaq.org/v1/cities?country=${selectedCountry}`);
        const data = await response.json();
        setCities(data.results || []);
      } catch (error) {
        console.error('Error fetching cities data: ', error);
      }
    };

    if (selectedCountry) {
      fetchCities();
    }
  }, [selectedCountry]);

  const handleCountryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
    setSelectedCity('');
    setCities([]);
  };

  const handleCityChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div>
      <h2>City Form</h2>
      <div>
        <label htmlFor="country">Select a Country:</label>
        <select id="country" value={selectedCountry} onChange={handleCountryChange}>
          <option value="">Select a country</option>
          {countries.map(country => (
            <option key={country.cca2 || country.name.common} value={country.cca2}>
              {country.name.common}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="city">Select a City:</label>
        <select id="city" value={selectedCity} onChange={handleCityChange} disabled={!cities.length}>
          <option value="">Select a city</option>
          {cities.map(city => (
            <option key={city.city} value={city.city}>{city.city}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CityForm;