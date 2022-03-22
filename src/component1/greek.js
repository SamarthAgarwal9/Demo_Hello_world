import React from 'react';
// function greek(){
//   return <h1> Hello React !</h1>
// }

// const Greek=()=>{return <h1>Hello React !</h1>;}
// export default Greek;

//export const Greek=()=>{return <h1>Hello React !</h1>;}
export const Greek=(props)=>{
  console.log(props);
 //ERROR props.name="ewew";
  return( 
    <div>
    <h1>Hello {props.name}, {props.heroName} p!</h1>
    {props.children}
    </div>
    )
  };
export var Del=()=>{return <h1>Hello Samarth statement 2!</h1>;}