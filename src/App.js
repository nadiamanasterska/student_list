import { useState } from "react";
import AddStudent from "./AddStudent";
import "./App.css";
import ShowStudents from "./ShowStudents";

function App() {
  const [students, setStudents] = useState([]);
  console.log(students);
  return (
    <div className="App">
      <div className="app-container">
        <AddStudent setStudents={setStudents} />
        <ShowStudents students={students} />
      </div>
    </div>
  );
}

export default App;
