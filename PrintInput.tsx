import * as React from 'react';
import { Student } from './App';

type MyProps = {
  //students: Student[];
  //addFn:(newStudent:Student)=>void;
  ctrlName: string;
  onChangeFn:(value:string,ctrlName:string)=>void;
  
}

type MyState = {
  //students: Student[];
  newStudent:Student
}

//class PrintInput extends React.Component<MyProps,MyState> {
  function PrintInput (props:MyProps) {
  
  

  // addNewStudent=():void=>{
  //   this.props.addFn(this.state.newStudent);
  //   this.setState({newStudent:{name:'',surname:'',indexNr:0}});
   
   
  // }
  

  


  
    return (
    <div style={{border: 'solid yellow'}}>
    
     
     
     {props.ctrlName}: <input name={props.ctrlName} onChange={(e:React.FormEvent<HTMLInputElement>)=>props.onChangeFn(e.currentTarget.value,e.currentTarget.name)} /> 
     
     {/* <button onClick={this.addNewStudent}>Save</button> */}
     
     
    </div>
    );
  
}

export default PrintInput;
