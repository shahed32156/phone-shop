import React, { useState } from 'react';

import Rating from 'react-rating-stars-component';
import Swal from'sweetalert2';
const Review = () => {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(1);

  const handleName = (e) => {

    const value = e.target.value;
    const regex = /^[a-zA-Z\s]*$/;

    if (regex.test(value)) {
      setName(value);
    } else {
      Swal.fire({
        title: "Error",
        text: "Invalid name",
        icon: "error"
      });
    }

    console.log(value);
  
}


  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.length <= 3) {
        Swal.fire({
            title: "Error",
            text: "Name must be more than 3 characters",
            icon: "error"
        });
        return;
    }

    else {

        Swal.fire({
            title: "Success",
            text: "Successfully submitted your review",
            icon: "success"
        });
        return;
    }
    
  };

  return (
    <div className="container mx-auto p-4">
     <div className='mt-20 md:mt-28 text-center'>
    <h1 className='text-3xl font-serif font-semibold text-white pb-10'>Add Review</h1>
    </div>
      <form onSubmit={handleSubmit} className="bg-black border-2 border-pink-700 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input onChange={handleName}
            type="text"
            id="name"
            value={name}
            className="shadow appearance-none rounded-md w-full h-[50px] border-2 border-pink-700 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="review">
            Review
          </label>
          <textarea
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="shadow appearance-none  rounded-md w-full h-[100px] border-2 bg-black border-pink-700 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">
            Rating
          </label>
          <Rating
            count={5}
            size={40}
            activeColor="#ffd700"
            value={rating}
            onChange={(newRating) => setRating(newRating)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-pink-700 hover:bg-pink-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default Review;
