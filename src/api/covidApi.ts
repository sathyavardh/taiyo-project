import axios from 'axios';

interface HistoricalData {
  cases: { [key: string]: number };
  deaths: { [key: string]: number };
  recovered: { [key: string]: number };
}

interface CountryData {
  country: string;
  countryInfo: {
    _id: number;
    iso2: string;
    iso3: string;
    lat: number;
    long: number;
    flag: string;
  };
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  todayRecovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  population: number;
  continent: string;
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
  activePerOneMillion: number;
  recoveredPerOneMillion: number;
  criticalPerOneMillion: number;
}

export const fetchHistoricalData = async (): Promise<HistoricalData> => {
  const response = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
  return response.data;
};

export const fetchCountryData = async (): Promise<CountryData[]> => {
  const response = await axios.get('https://disease.sh/v3/covid-19/countries');
  return response.data;
};

