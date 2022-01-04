SELECT students.name as student , AVG(assignment_submissions.duration) as avarage_assignment_duration, AVG(assignments.duration) as average_estimated_duration
FROM students
JOIN assignment_submissions 
ON students.id= student_id
JOIN assignments 
ON assignments.id= assignment_id
WHERE students.end_date IS NULL
GROUP BY student
HAVING AVG(assignment_submissions.duration) < AVG(assignments.duration) 
ORDER BY  avarage_assignment_duration;