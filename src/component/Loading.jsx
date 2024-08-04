import React from "react";

const Loading = () => {
  return (
    <div className="text-center my-10">
      <div className="spinner-grow text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-success " role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-success " role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
