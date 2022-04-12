import React from 'react';
import { useNavigate } from 'react-router-dom';

const Room = ({ room }) => {
  const { picture, name } = room;
  const navigate = useNavigate();
  return (
    <div className="card bg-base-300 shadow-2xl">
      <figure className="p-4">
        <img src={picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-between items-center">
          <button
            onClick={() => navigate('/room-details')}
            className="btn btn-primary btn-sm"
          >
            Buy Now
          </button>
          <div>
            <div className="badge badge-outline mr-2">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
