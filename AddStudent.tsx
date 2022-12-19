import * as React from 'react';
import { Student } from './App';
import PrintInput from './PrintInput';

type MyProps = {
  //students: Student[];
  addFn:(newStudent:Student)=>void;
  
}

type MyState = {
  //students: Student[];
  newStudent:Student;
  errorMsg:Array<{name:string, msg: string}>;
}

class AddStudent extends React.Component<MyProps,MyState> {
  constructor(props: MyProps){
    super(props);
    this.state = {
      //students: [...this.props.students],// dlaczego nie: this.props.students
      newStudent:{name:'',surname:'',indexNr:0},
      errorMsg:[{name:'name',msg:'wrong data'},{name:'surname',msg:'wrong data'},{name:'indexNr',msg:'wrong data'}]
    };
  }
  

  addNewStudent=():void=>{
    this.props.addFn(this.state.newStudent);
    this.setState({newStudent:{name:'',surname:'',indexNr:0}});
   
   
  }


  validateString=(stringToValidate: string):boolean=>{
    const regex = new RegExp(/^[A-Z][a-z]+$/);

      return stringToValidate.match(regex)? true: false;
  }
  

  changeStringValue=(value: string, ctrlName:string):void=>{
      let {newStudent}=this.state;
      //newStudent.name=value;
      if(this.validateString(value)){
        this.setState(prevState=>{
          let errors=prevState.errorMsg;
          errors.find(el=>el.name===ctrlName).msg="data ok";
          return {errorMsg:errors}});
        newStudent[ctrlName]=value;
        this.setState({newStudent:newStudent});
      }
      console.log(this.state);
  }

//   changeSurName=(e:React.FormEvent<HTMLInputElement>):void=>{
//     const value=e.currentTarget.value;
//     let {newStudent}=this.state;
//     newStudent.surname=value;
//     this.setState({newStudent:newStudent});
//     console.log(this.state);
// }

changeIndex=(e:React.FormEvent<HTMLInputElement>):void=>{
  console.log(typeof e.currentTarget.value)
  const value=e.currentTarget.value;
  let {newStudent}=this.state;
  newStudent.indexNr=Number(value);
  this.setState({newStudent:newStudent});
  console.log(this.state);
}


  render (){
    return (
    <div style={{border: 'solid blue'}}>
     
     
     <p>Add new student:
       <PrintInput ctrlName="name" onChangeFn={this.changeStringValue} />
       <PrintInput ctrlName="surname" onChangeFn={this.changeStringValue} />
     {/* Name: <input name="name" onChange={this.changeStringValue} value={this.state.newStudent.name}/> 
     Surname: <input name="surname" value={this.state.newStudent.surname} onChange={this.changeStringValue}/>  */}
     Index: <input type="number" value={this.state.newStudent.indexNr} onChange={this.changeIndex}/>
     <button onClick={this.addNewStudent}>Save</button>
     </p>
     <div>

     {this.state.errorMsg.map(el=><div>{el.name}: {el.msg} </div>)}
     </div>
     
    </div>
    );
  }
}

export default AddStudent;
