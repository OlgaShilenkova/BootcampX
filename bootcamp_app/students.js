const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx',
  port: 5432
});

// 
// separate out our SQL
// 
//The part that we write as the developer, the part that we have complete control over.
const queryString =`
SELECT students.id as id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE $1
LIMIT $2;
`;

// The part that comes from somewhere else and might be malicious.
const cohortName = process.argv[2];
const limit = process.argv[3]|| 5;
// Store all potentially malicious values in an array.
const values = [`%${cohortName}%`, limit];

pool
.query(queryString, values)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort} cohort`);
  })
});
