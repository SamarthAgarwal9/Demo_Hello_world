import React from "react";
class EventHandle extends React.Component{
  constructor(props){
    super(props);
    this.state={isToggleOn:true};
  }
  handleClick(){
    this.setState(prevState=>({
      isToggleOn: !(prevState.isToggleOn)
    })
    );
  }
  render(){
    return(
      // <button onClick={this.handleClick.bind(this)}>
      //   {this.state.isToggleOn? 'On' : 'Off'}
      // </button>
      <button onClick={()=> this.handleClick()}>
      {this.state.isToggleOn? 'On' : 'Off'}
    </button>
      );
  }
}
 export default EventHandle;


// import React from 'react'

// export default function eventHandle() {
//   function clickHandler() {
//     console.log('Button Clicked');
//   } 
//   return (
//     <div>
//       <button onClick={clickHandler}> Click !</button>
//     </div>
//   )
// }
