import * as React from 'react';
import AddStudent from './AddStudent';
import { Student } from './App';

type MyProps = {
  students: Student[];
};

type MyState = {
  students: Student[];
  // newStudent:Student
};

//class Students extends React.Component<MyProps,MyState> {
function Students(props: MyProps) {
  const [myValue, setValue] = React.useState('abc');
  const [students, setStudents] = React.useState([...props.students]);
  // constructor(props: MyProps){
  //   super(props);
  //   this.state = {
  //     students: [...this.props.students],// dlaczego nie: this.props.students
  //    // newStudent:{name:'',surname:'',indexNr:0}
  //   };
  // }

  const addNewStudent = (newStudent: Student): void => {
    // this.setState(prevState=>{
    //   let students=prevState.students;
    //   students.push(newStudent);
    //   return {students: students};
    // });
    setStudents((prevTab) => {
      let temp = [...prevTab];
      temp.push(newStudent);

      return temp;
    });
    console.log('new tab', students);
  };

  return (
    <div style={{ border: 'solid red' }}>
      My Value {myValue}
      <ul>
        {students.map((el) => {
          return (
            <li key={el.indexNr}>
              {el.name} {el.surname} {el.indexNr}{' '}
              <input defaultValue={el.name} />{' '}
              <input defaultValue={el.surname} />{' '}
            </li>
          );
        })}
      </ul>
      <AddStudent addFn={addNewStudent} />
      <button onClick={() => setValue('asdfgh')}>Change</button>
    </div>
  );
}

export default Students;
