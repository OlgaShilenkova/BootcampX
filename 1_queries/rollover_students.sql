SELECT students.name as rollover_student, students.start_date as start_date, 
cohorts.name as cohort_name,
cohorts.start_date as cohorts_start
FROM students JOIN cohorts
ON cohort_id = cohorts.id
WHERE students.start_date <> cohorts.start_date
ORDER BY cohorts.start_date;