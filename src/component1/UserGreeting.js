import React, { Component } from 'react'


 class UserGreeting extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn:true
    }
  }
  render(){
    // let message;
    // if(this.state.isLoggedIn){
    //   message=
    //     <div>
    //      <h1> Welcome React Learner !</h1>
    //      </div>
    //   }
    //   else {
    //     message =
    //      <div><h1>welcome React Users !</h1></div>
    // }
    // return <div>{message}</div>
    return(
      this.state.isLoggedIn,
      <div>Welcome Sammy </div>
      )
  }
 }
export default UserGreeting