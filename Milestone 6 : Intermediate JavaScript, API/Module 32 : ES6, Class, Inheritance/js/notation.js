const student = {
    name: 'Karim Uddin',
    age: 15,
    class: 'Ten',
    marks:  {
        math: 78,
        physics: 89,
        chemistry: 65
    },
}

const marks = student.marks;
console.log(marks);
const math = student.marks.math;
console.log(math);

const chemistry  = student['marks']['chemistry'];
console.log(chemistry);

const subject = 'math';
const subjectMarks = student.marks[subject];
console.log(subjectMarks);