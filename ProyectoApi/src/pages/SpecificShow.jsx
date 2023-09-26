import axios from 'axios';
import Details from '../components/specific/details/Details';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';

function SpecificShow() {
  const [ShowData, setShowData] = useState([]);
  const {id} = useParams()


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
    <div className='container'>
      <Details ShowData={ShowData}/>
    </div>
  );
};

export default SpecificShow
