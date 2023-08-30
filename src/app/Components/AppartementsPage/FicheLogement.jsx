import React, { useEffect, useState } from "react";
import Carousel from "./Carousel/Carousel";
import AppartementTitle from "./AppartementTitle/AppartementTitle";
import AppartementTags from "./AppartementTags/AppartementTags";
import AppartementInfos from "./AppartementInfos/AppartementInfos";
import StarRating from "./StarRating/StarRating";
import Profile from "./Profile/Profile";
import "./styles/ficheLogement.css";
import { useParams, useNavigate } from "react-router-dom";

function FicheLogement() {
  const { id } = useParams();
  const [index, setIndex] = useState(0);
  const dataFromLocalStorage = JSON.parse(localStorage.getItem('Data'));
  const navigate = useNavigate()
  useEffect(() => {
    if (dataFromLocalStorage) {
      const newIndex = dataFromLocalStorage.findIndex(location => location.id === id);
      if (newIndex >= 0){
        setIndex(newIndex)
        
      } else {
        navigate("/*")
      }
    } 
    // eslint-disable-next-line
  }, [id, dataFromLocalStorage]);
  return (
    <main>
      <Carousel appartementData={dataFromLocalStorage[index]} />
      <div className="infosBloc">
        <div className="leftPart">
          <AppartementTitle appartementData={dataFromLocalStorage[index]} />
          <AppartementTags appartementData={dataFromLocalStorage[index]} />
        </div>
        <div className="rightPart">
          <Profile appartementData={dataFromLocalStorage[index]} />
          <StarRating appartementData={dataFromLocalStorage[index]} />
        </div>
      </div>
      <AppartementInfos appartementData={dataFromLocalStorage[index]} />
    </main>
  );
}

export default FicheLogement;