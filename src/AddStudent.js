import { useState } from "react";
import React, { Component } from "react";

const AddStudent = ({ setStudents }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [grades, setGrades] = useState();

  let index = 0;

  const handleChange = () => {
    const student = {
      firstName: firstName,
      lastName: lastName,
      grades: grades,
      key: index,
    };

    if (!student.firstName) {
      student.firstName = "Empty item";
    }
    if (!student.lasttName) {
      student.lasttName = "Empty item";
    }
    if (!student.grades) {
      student.grades = "Empty item";
    }

    setStudents((previousArray) => [...previousArray, student]);

    setFirstName("");
    setLastName("");
    setGrades("");
    index = index + 1;
  };

  return (
    <div className="add-student">
      <h3>Add student</h3>
      <div className="form">
        <input
          type="text"
          required
          placeholder="Name"
          onChange={(event) => setFirstName(event.target.value)}
          value={firstName}
          maxLength={10}
        />
        <input
          type="text"
          required
          placeholder="Surname"
          onChange={(event) => setLastName(event.target.value)}
          value={lastName}
          maxLength={15}
        />
        <input
          type="text"
          required
          placeholder="Grades"
          onChange={(event) => setGrades(event.target.value)}
          value={grades}
          maxLength={7}
        />
        <button onClick={handleChange}>Add</button>
      </div>
    </div>
  );
};

export default AddStudent;
