import React, { useState } from 'react';
import reviews from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];

  //Steps
  //check current number
  const checkNumber = (number) => {
    //condition 1 -> reset to first slide: if the current number is greater than the total number of reviews
    if (number > reviews.length - 1) {
      return 0;
    }

    //condition 2 -> show last slide: if the current number is less than 0 set index to last slide
    if (number < 0) {
      return reviews.length - 1;
    }
    //else return the current number
    return number;
  };

  // show next slide when next button is clicked
  const nextReview = () => {
    //set the index to index of next slide
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  // show prev slide when prev is clicked
  const prevReview = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  // show random slide when suprise me button is clicked
  const randomReview = () => {
    //generate random whole number but should not exceed total number of reviews
    let randomNumber = Math.floor(Math.random() * reviews.length);
    //check if random number is equal the current index, if so add 1 to it
    if (randomNumber === index) {
      randomNumber = index + 1;
    }

    //set slide index to the latest random index generated
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className='review'>
      <div className='img-container'>
        <img className='person-img' src={image} alt={name} />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>author name</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevReview}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextReview}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomReview}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
