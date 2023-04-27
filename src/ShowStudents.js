import Student from "./Student";

const ShowStudents = ({ students }) => {
  return (
    <div className="show-students">
      <h3>Students</h3>
      <ul>
        {students.map((student) => (
          <Student student={student} />
        ))}
      </ul>
    </div>
  );
};

export default ShowStudents;
