import React, { useState } from "react";
import { STUDENTS } from "../studentsList";
import Error from "./Error";
import ResidentsList from "./ResidentsList";

// `joiningDate` && `validityDate` format "yyyy-mm-dd"

function checkValidity(joiningDate, validityDate) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const [year, month, day] = joiningDate.split("-");
  const [yyyy, mm, dd] = validityDate.split("-");
  const maxValid = new Date(yyyy, mm - 1, dd);
  const selected = new Date(year, month - 1, day);
  return maxValid >= selected && maxValid >= today;
}

function Search() {
  const [values, setValues] = useState({
    name: "",
    date: "",
  });

  const [students, setStudents] = useState([]);
  const [notVerifiedStudent, setNotnotVerifiedStudent] = useState(false);
  const [expiredStudent, setExpiredStudent] = useState(false);
  
  const handleInputChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setValues((values) => ({ ...values, [fieldName]: fieldValue }));
  };

  const handleAddStudent = () => {
    const studentName = values.name.toLocaleLowerCase();
    const joiningDate = values.date.toString();
    const isStudentInList = STUDENTS.filter(
      (student) => student.name.toLocaleLowerCase() === studentName
    );

    if (isStudentInList.length === 0) {
      setNotnotVerifiedStudent(true);
      return;
    }

    const selectedStudentValidityDate = isStudentInList[0]["validityDate"];
    const selectedSStudentName = isStudentInList[0]["name"];

    const isValidStudent = checkValidity(
      joiningDate,
      selectedStudentValidityDate
    );

    if (!isValidStudent) {
      setExpiredStudent(true);
      return;
    }

    const newStudent = isValidStudent ? selectedSStudentName : "";
    setNotnotVerifiedStudent(false);
    setExpiredStudent(false);
    setStudents([...students, newStudent]);
    setValues({ name: "", date: "" });
  };

  const { name } = values;

  return (
    <div className="my-50 layout-row align-items-end justify-content-end">
      <label htmlFor="studentName">
        Student Name:
        <div>
          <input
            id="studentName"
            data-testid="studentName"
            type="text"
            className="mr-30 mt-10"
            name="name"
            value={values.name}
            onChange={handleInputChange}
          />
        </div>
      </label>
      <label htmlFor="joiningDate">
        Joining Date:
        <div>
          <input
            id="joiningDate"
            data-testid="joiningDate"
            type="date"
            name="date"
            value={values.date}
            className="mr-30 mt-10"
            onChange={handleInputChange}
          />
        </div>
      </label>
      <button
        type="button"
        data-testid="addBtn"
        className="small mb-0"
        onClick={handleAddStudent}
      >
        Add
      </button>
      {notVerifiedStudent && (
        <Error errmsg={`Sorry, ${name} is not a verified student!`} />
      )}
      {expiredStudent && (
        <Error errmsg={`Sorry, ${name}'s validity has Expired!`} />
      )}
      <ResidentsList name={students} />
    </div>
  );
}

export default Search;

import React from "react";
function Error(props) {
  return (
    <div data-testid="errorMsg" className="alert error mt-20 slide-up-fade-in">
      {props.errmsg}
    </div>
  );
}
export default Error;

import React from "react";
function ResidentsList({ name }) {
  const studentList = name.map((item, key) => <li key={key}>{item}</li>);

  return (
    <div>
      <div className="pa-10 mt-10 w-75">
        <div className="font-weight-bold text-center">Residents List</div>
        <ul
          className="mt-10 styled w-50 mx-auto"
          data-testid="residentsNameList"
        >
          {name.length > 0 ? studentList : null}
        </ul>
      </div>
    </div>
  );
}
export default ResidentsList;

for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
  
