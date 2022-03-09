const express = require("express")
const router = express.Router()

const mysqlConnection = require("../database")


// GET all Employees
router.get('/', (req, res) => {
  mysqlConnection.query('SELECT * FROM employees', (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

// GET one employee
router.get("/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('select * from employees where id = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

// POST employee
router.post("/save", (req, res) => {
  const { id, name, salary } = req.body;
  const query = "CALL employeeAddOrEdit(?,?,?); ";

  mysqlConnection.query(query, [id, name, salary], (err, rows, fields) => {
    if (!err) {
      res.json({ Status: 'Employee saved' });
    } else {
      console.log(err);
    }
  });
});

// DELETE An Employee
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM employee WHERE id = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json({ status: 'Employee Deleted' });
    } else {
      console.log(err);
    }
  });
});

module.exports = router;