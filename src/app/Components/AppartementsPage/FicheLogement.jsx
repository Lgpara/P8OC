import React, { useEffect, useState } from "react";
import Carousel from "./Carousel/Carousel";
import AppartementTitle from "./AppartementTitle/AppartementTitle";
import AppartementTags from "./AppartementTags/AppartementTags";
import AppartementInfos from "./AppartementInfos/AppartementInfos";
import StarRating from "./StarRating/StarRating";
import Profile from "./Profile/Profile";
import "./styles/ficheLogement.css";
import { useParams, useNavigate } from "react-router-dom";
import data from "../../../content/data.json"

function FicheLogement() {
  const { id } = useParams();
  const [index, setIndex] = useState(0);
  const navigate = useNavigate()
  useEffect(() => {
    const newIndex = data.findIndex(location => location.id === id);
    if (newIndex >= 0){
      setIndex(newIndex)
      
    } else {
      navigate("/*")
    }
    // eslint-disable-next-line
  }, [id, data]);
  return (
    <main>
      <Carousel appartementData={data[index]} />
      <div className="infosBloc">
        <div className="leftPart">
          <AppartementTitle appartementData={data[index]} />
          <AppartementTags appartementData={data[index]} />
        </div>
        <div className="rightPart">
          <Profile appartementData={data[index]} />
          <StarRating appartementData={data[index]} />
        </div>
      </div>
      <AppartementInfos appartementData={data[index]} />
    </main>
  );
}

export default FicheLogement;