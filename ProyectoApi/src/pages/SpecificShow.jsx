import { useEffect,useState } from 'react';
import axios from 'axios';
import Details from '../components/specific/details/Details';

function SpecificShow() {
  const [ShowData, setShowData] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const  { data }  = await axios.get(`https://www.episodate.com/api/show-details?q=29560`); // El id debe ser ingresado por useParams (react router dom)
        setShowData(data.tvShow);
      } catch (error) {
        console.error("Error en la solicitud HTTP:", error);
      }
    };
    fetchData();

  },[]);

  return (
    <>
      <Details ShowData={ShowData}/>
    </>
  );
};

export default SpecificShow
