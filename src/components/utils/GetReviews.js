import React from "react";
import { useEffect, useState } from 'react';
import { MY_REVIEWS_URL } from "../API";
import { useNavigate } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './ReviewStyles.css';
import Loading from './loading';
import NoData from './noData';


const GetReview = () => {
  
  const [isLoading, setIsLoading] = useState(true);
  const [loadedReviews, setLoadedReviews] = useState([]);
  const [index, setIndex] = useState(0);


  useEffect(() => {
    setIsLoading(true);
    fetch( MY_REVIEWS_URL )
    .then(response => {
      return response.json();
    }).then(data => {

      const datas = [];
      for (const key in data) {
        const review = {
          id: key,
          ...data[key],
        };
        datas.push(review);
      }

      setIsLoading(false);
      setLoadedReviews(datas);
    });
  }, []);

  const navigate = useNavigate();

  if(loadedReviews.length === 0){
    return(
      <Container>
        <p className="no_reviews"> No reviews yet 😭 pls give one... </p>
        <NoData />
        <div className="review_btn_div">
          <button className="review_btn" onClick={() => navigate('/PostReviews')}>Add Review😊</button>
        </div>
      </Container>
    )
  }

  if(isLoading) {
    return (
      <Container>
        <Loading />
      </Container>
    )
  }

  const { id, timeStamp, name, fullName, ratings, feedback } = loadedReviews[index];

  const checkNumber = (number) => {
    if (number > loadedReviews.length - 1) {
      return 0;
    }
    if (number < 0) {
      return loadedReviews.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  // const minIndex=0;
  // const maxIndex=loadedReviews.length-1;

  
  // const getRandomPerson=()=>{
  //   const getRandomIntInclusive=(min, max) =>{
  //     min = Math.ceil(min);
  //     max = Math.floor(max);
  //     return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  //   }

  //   let randomIndex=getRandomIntInclusive(minIndex, maxIndex);
  //   if (randomIndex===index){
  //     randomIndex=index+1
  //   }
  //   setIndex(checkNumber(randomIndex));

  // }

  const stars = [];
  for(let i=0; i<Math.floor(ratings); i++){
    stars.push(<span key={i}>★</span>);
  }


  return (
    <Container>
      <div className="review-card" key={id}>
        <div className="review-content">
          <div className="review-avatar">
              <div className="user-initial">{name.toUpperCase()}</div>
          </div>
            <h3 className="user-name">{fullName}</h3>
            <p className="user-location">{timeStamp}</p>
            <div className="rating">
                <span className="stars">{stars}</span>
                <span className="rating-value">{ratings}</span>
            </div>
            <p className="review-text">{feedback}</p>
            <div>
              <span className="btn_prev" onClick={prevPerson}>◀</span>
              <span className="btn_nxt" onClick={nextPerson}>▶</span>
            </div>
            {/* <div className="random_person">
              <button className="btn_random" onClick={getRandomPerson}>Get Random</button>
            </div> */}
        </div>
      </div>
      <div className="review_btn_div">
          <button className="review_btn" onClick={() => navigate('/PostReviews')}>Give Reviews😊</button>
      </div>
    </Container>
  );
};

export default GetReview;