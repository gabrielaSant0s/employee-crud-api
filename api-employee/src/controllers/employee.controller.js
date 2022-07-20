const db = require('../config/database')

exports.createEmployee = async(req,res) =>{
  const {name, job_role, salary, date_birthday, employee_registration} = req.body;
  const { rows } = await db.query(
    "INSERT INTO employee (name, job_role, salary, date_birthday, employee_registration) VALUES ($1, $2, $3, $4, $5)",
    [name, job_role, salary, date_birthday, employee_registration]
  );

  res.status(201).send({
    message: "Employee added successfully!",
    body: {
      employee : {name, job_role, salary, date_birthday, employee_registration}
    },
  })
}

exports.listAllEmployees = async(req, res) => {
  const response = await db.query("SELECT * FROM employee ORDER BY name ASC")
  res.status(200).send(response.rows)
};

exports.findEmployeeById = async(req, res) => {
  const employeeId = req.params.id
  const response = await db.query("SELECT * FROM employee WHERE employee_id = $1", [employeeId])
  res.status(200).send(response.rows);
}