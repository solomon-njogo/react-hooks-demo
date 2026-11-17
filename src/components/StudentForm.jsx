import { useState, useRef } from "react";

function StudentForm({ addStudent }) {
  const [name, setName] = useState("");
  const [regNo, setRegNo] = useState("");
  const [course, setCourse] = useState("");

  const nameInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !regNo || !course) {
      alert("Please fill in all fields");
      return;
    }

    const student = {
      id: Date.now(),
      name,
      regNo,
      course,
    };

    addStudent(student);

    setName("");
    setRegNo("");
    setCourse("");

    nameInput.current.focus();
  };

  return (
    <div>
      <h2>Register Student</h2>

      <form onSubmit={handleSubmit}>
        <input
          ref={nameInput}
          type="text"
          placeholder="Enter Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Registration Number"
          value={regNo}
          onChange={(e) => setRegNo(e.target.value)}
        />

        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />

        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default StudentForm;
