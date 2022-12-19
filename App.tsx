import * as React from 'react';
import Students from './StudentsFn';
import './style.css';

export type Student={
  name: string;
  surname: string;
  indexNr: number;
}
export default function App() {
  let students:Student[]=[
    {name: "Maria", surname: "Skłodowska",indexNr: 987654},
    {name:"Adrian", surname: "Duda", indexNr:123456},
    {name:"Albert", surname: "Einstein", indexNr:213456}];




  
  return (
    <div>
      <div  style={{border: 'solid green'}}>
        Students in App:
        <ul>
       {students.map(el=>{
         return <li key={el.indexNr}>{el.name} {el.surname} {el.indexNr}  </li>
       })}
     </ul>
      </div>
       <Students students={students}/>
    </div>
  );
}
