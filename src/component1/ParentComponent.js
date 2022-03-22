import React, { Component } from 'react'
import ChildComponent from './ChildComponent';
export default class ParentComponent extends Component {
  constructor(props){
    super(props);
    this.state={
      parentName:'Mr. Sam'
    }
    this.greetParent=this.greetParent.bind(this);
  }
  // greetParent(){
  //   alert(`Hello ${this.state.parentName} !`)
  // }
  greetParent(childName){
    alert(`Hello ${childName} !`)
  }
  greetParent(childName){
    alert(`Hello ${this.state.parentName} from ${childName} !`)
  }
  render() {
    return (
      <div>
      <ChildComponent greetHandler={this.greetParent}/> 
      </div>
    )
  }
}
