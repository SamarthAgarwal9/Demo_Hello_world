import React,{ Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {Greek} from './component1/greek';
import {Del} from './component1/greek';
import Welcome from './component1/Welcome';
import Hello from './component1/Hello';
import Message from './component1/Message';
import Counter from './component1/Counter';
import EventHandle from './component1/EventHandle';
import ParentComponent from './component1/ParentComponent';
import UserGreeting from './component1/UserGreeting';
class App extends Component{
  render(){
  return (
    <div className="App" >
    <Greek />
    <Greek name="Sammy " heroName="sk"><h3>This is the child Props</h3> </Greek>
    <Greek name="Ram" heroName="vd"><button> Button 1 </button></Greek>
    <Greek name="Sam" heroName="re"/>
    <Del />
    <Welcome />
    <Welcome name="React" />
    <Hello />
    <Message/>
    <Counter/>
    <EventHandle />
    <ParentComponent/>
    <UserGreeting/>
    </div>
  );
}
}
export default App;
