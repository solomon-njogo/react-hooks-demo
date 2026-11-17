import { useState, useEffect } from "react";

import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import StudentCount from "./components/StudentCount";

import "./App.css";

function App() {
  // useState: Store student records
  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem("students");

    return savedStudents ? JSON.parse(savedStudents) : [];
  });

  // useEffect: Save records whenever students change
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  // Add a new student
  const addStudent = (student) => {
    setStudents((previousStudents) => [...previousStudents, student]);
  };

  // Delete a student
  const deleteStudent = (id) => {
    setStudents((previousStudents) =>
      previousStudents.filter((student) => student.id !== id)
    );
  };

  return (
    <div className="container">
      <h1>React Hooks Laboratory</h1>

      <StudentForm addStudent={addStudent} />

      <hr />

      <StudentCount total={students.length} />

      <StudentList students={students} deleteStudent={deleteStudent} />
    </div>
  );
}

export default App;
