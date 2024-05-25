import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useQuery } from 'react-query';
import { fetchCountryData } from '../../api/covidApi';
import Loader from '../common/Loader';
import L from 'leaflet';

interface CountryInfo {
  _id: number;
  lat: number;
  long: number;
}

interface CountryData {
  country: string;
  countryInfo: CountryInfo;
  cases: number;
  deaths: number;
  recovered: number;
  population: number;
  continent: string;
  casesPerOneMillion: number;
}

const Map: React.FC = () => {
  const { data, error, isLoading } = useQuery<CountryData[], Error>('countryData', fetchCountryData);

  if (isLoading) return <Loader />;
  if (error) return <p>Error loading data...</p>;

  if (!data) return <p>No data available</p>;

  const icon = L.icon({
    // iconUrl: 'https://ucarecdn.com/59f361f8-bd2b-4fed-9e35-aadab16e99d4/marker.png',
    iconUrl:'public/icon/marker-icon.png',
  });

  return (
    <div>
      <div className="text-xl mb-4">COVID-19 Map</div>
      <MapContainer
        center={[0, 0]}
        zoom={2}
        className="w-full md:h-[500px] sm:h-[350px]"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {data.map((country) => (
          <Marker
            icon={icon}
            key={country.countryInfo._id}
            position={[country.countryInfo.lat, country.countryInfo.long]}
          >
            <Popup>
              <div>
                <h2>{country.country}</h2>
                <p>Total Cases: {country.cases}</p>
                <p>Total Deaths: {country.deaths}</p>
                <p>Total Recovered: {country.recovered}</p>
                <p>Population: {country.population}</p>
                <p>Continent: {country.continent}</p>
                <p>Cases Per Million: {country.casesPerOneMillion}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
