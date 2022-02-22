import CountrySelector from "./components/CountrySelector";
import Highlight from "./components/highlight";
import Summary from "./components/summary";
import {useState, useEffect} from 'react';
import {getCountries, getReportByCountry} from './apis'
import { sortBy } from "lodash";

function App() {
  const [Countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState('');
  const [report, setReport] = useState([]);
  
  useEffect(() => {
    getCountries().then((res) => {

     const countries= sortBy(res.data,'Country')
      setCountries(countries);
      setSelectedCountryId('vn');
      });
  }, []);

  
  const handleOnChange = (e) =>{
      setSelectedCountryId(e.target.value);

     
  };

  useEffect(() => {

    if(selectedCountryId){

      const {Slug} = Countries.find((Country) => Country.ISO2.toLowerCase() === selectedCountryId);

      getReportByCountry(Slug)
      .then((res) => {setReport(res.data)});
      
      // console.log({report});
    }

  }, [Countries, selectedCountryId]);


  return (
  <>
    <CountrySelector Countries = {Countries} handleOnChange = {handleOnChange} value = {selectedCountryId}/>
    <Highlight report = {report} />
    <Summary report = {report} selectedCountryId = {selectedCountryId}/>
  </>
  );
}

export default App;
