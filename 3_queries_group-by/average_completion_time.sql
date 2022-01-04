SELECT students.name as student, AVG(assignment_submissions.duration) as avarage_assign_duration
FROM students 
JOIN assignment_submissions
ON students.id = student_id
WHERE end_date IS NULL
GROUP BY student
ORDER BY avarage_assign_duration DESC;
