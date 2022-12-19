import * as React from 'react';
import AddStudent from './AddStudent';
import { Student } from './App';

type MyProps = {
  students: Student[];
  
}

type MyState = {
  students: Student[];
 // newStudent:Student
}

class Students extends React.Component<MyProps,MyState> {
  constructor(props: MyProps){
    super(props);
    this.state = {
      students: [...this.props.students],// dlaczego nie: this.props.students
     // newStudent:{name:'',surname:'',indexNr:0}
    };
  }
  

  addNewStudent=(newStudent: Student):void=>{
    this.setState(prevState=>{
      let students=prevState.students;
      students.push(newStudent);
      return {students: students};
    });
   
  }
  

  


  render (){
    return (
    <div style={{border: 'solid red'}}>
     
     <ul>
       {this.state.students.map(el=>{
         return <li key={el.indexNr}>{el.name} {el.surname} {el.indexNr} <input defaultValue={el.name}/> <input defaultValue={el.surname}/> </li>
       })}
     </ul>
     <AddStudent addFn={this.addNewStudent}/>
     
    </div>
    );
  }
}

export default Students;
