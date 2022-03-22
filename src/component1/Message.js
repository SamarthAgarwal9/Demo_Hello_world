import React,{Component} from "react";
class Message extends Component{
  constructor(props){
    super(props);
    this.state={message:'Welcome in the state component'}
  }
  changeMessage(){
    this.setState({
      message:'thanks for subsribe ... !'
    })
  }
  render(){
    return (
      <div>
      <h1>Welcome Visitor! and {this.state.message}</h1>
      <button onClick={()=> this.changeMessage()}>Subsribe</button>
      </div>
    )
  }
}

export default Message;