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
      errorMsg:[
      {name:'name',msg:'wrong data'},
      {name:'surname',msg:'wrong data'},
      {name:'indexNr',msg:'wrong data'}]
    };
  }
  

  addNewStudent=():void=>{

    let count : number = 0;
    this.state.errorMsg.map(el => {
      if (el.msg == "ok data") 
        count++;      
      })
      if (count == 3)   //if data ok occurs 3 times
      {
        this.props.addFn(this.state.newStudent);
        this.setState({newStudent:{name:'',surname:'',indexNr:0}});
      }
  }


  validateString=(stringToValidate: string):boolean=>{
    const regex = new RegExp(/^[A-Z][a-z]+$/);

      return stringToValidate.match(regex)? true: false;
  }

  validateIndex=(numberToValidate : string) : boolean => {
    const regex = new RegExp(/^[0-9]+$/);

    return numberToValidate.match(regex)? true : false;
  }
  

  changeStringValue=(value: string, ctrlName:string):void=>{
    let {newStudent}=this.state;
    if(this.validateString(value) && (ctrlName == "name" || ctrlName == "surname")){
      this.setState(prevState=>{
        let errors=prevState.errorMsg;
        errors.find(el=>el.name===ctrlName).msg="ok data";
        return {errorMsg:errors}});
      newStudent[ctrlName]=value;
      this.setState({newStudent:newStudent});
    }
    else if(this.validateIndex(value) && ctrlName == "indexNr"){
      this.setState(prevState=>{
        let errors=prevState.errorMsg;
        errors.find(el=>el.name===ctrlName).msg="ok data";
        return {errorMsg:errors}});

      newStudent[ctrlName]=Number(value);   //parse to number - computed properites
      this.setState({newStudent:newStudent});
    }

    else{    
      this.setState(prevState=>{
        let errors=prevState.errorMsg;
        errors.find(el=>el.name===ctrlName).msg="wrong data";
        return {errorMsg:errors}});     
    }
      console.log(this.state);
  }


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
       <PrintInput ctrlName="surname" onChangeFn={this.changeStringValue}/>
       <PrintInput ctrlName="indexNr" onChangeFn={this.changeStringValue} />
     {/* Name: <input name="name" onChange={this.changeStringValue} value={this.state.newStudent.name}/> 
     Surname: <input name="surname" value={this.state.newStudent.surname} onChange={this.changeStringValue}/>  */}
     {/* Index: <input value={this.state.newStudent.indexNr} onChange={this.changeIndex}/> */}
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
