import React from "react";

const Hello=()=>{
  // return (
  //   <div> <h2>Hello JSX ! </h2></div> 
  // )

  return React.createElement('div',null,React.createElement('h1',null,"Hello Jsx!!"));
}
// const Hello=React.createElement('div',null,React.createElement('h1',null,"Hello Jsx!!"));
export default Hello;