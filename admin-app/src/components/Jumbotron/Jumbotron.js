import React from "react";

const Jumbotron = (props) => {
    console.log(props)
    return (
    <div className="container-fluid text-sm-center p-5 bg-white">
      <h1 className="display-2">{props.text}</h1>
      {/* <p className="lead">A One-day Conference About All Things JavaScript!</p> */}
    </div>
  );
};

export default Jumbotron;
