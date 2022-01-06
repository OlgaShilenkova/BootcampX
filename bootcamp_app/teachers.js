const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx',
  port: 5432
});


const queryString = `
  SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
  FROM teachers
  JOIN assistance_requests ON teachers.id = teacher_id
  JOIN students ON students.id = student_id
  JOIN cohorts ON cohorts.id = cohort_id
  WHERE cohorts.name  LIKE $1 
  ORDER BY teacher;
  `;
  // Query values store in array that starts from 1, not from 0 that is where $1 comes from

  const cohortName = process.argv[2] || 'JUL02';//$1 in queryString
  
  const values = [`%${cohortName}%`]

pool.
query(queryString, values)
.then(res => {
  res.rows.forEach(row => {
    console.log(`${row.cohort}: ${row.teacher} \n`);
  })
});
