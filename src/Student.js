const Student = ({ student }) => {
  return (
    <li>
      <span>
        {student.firstName} {student.lastName}
      </span>
      <span>{student.grades}</span>
    </li>
  );
};

export default Student;
