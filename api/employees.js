import express from "express";
const router = express.Router();
export default router;
import {
  createEmployee,
  getEmployee,
  getEmployees,
  deleteEmployee,
  updateEmployee,
} from "#db/queries/employees";

// TODO: this file!

router.route("/").get(async (req, res) => {
  res.send("Welcome to the Fullstack Employees API.");
});

router
  .route("/employees")
  .get(async (req, res) => {
    const employees = await getEmployees();
    res.send(employees);
  })
  .post(async (req, res) => {
    if (!req.body) return res.status(400).send("Request body required");

    const { name, birthday, salary } = req.body;

    if (!name || !birthday || !salary) {
      return res
        .status(400)
        .send("Missing required fields: name, birthday, salary");
    }
    const newEmployee = await createEmployee({ name, birthday, salary });
    res.status(201).json(newEmployee);
  });

router
  .route("/:id")
  .get(async (req, res) => {
    const { id } = req.params;
    if (!/^\d+$/.test(id)) {
      return res.status(400).send("ID must be a positive integer");
    }
    const employee = await getEmployee(id);
    if (!employee) {
      return res.status(404).send("There is no employee with that ID");
    }
    res.send(employee);
  })
  .delete(async (req, res) => {
    const { id } = req.params;
    if (!/^\d+$/.test(id)) {
      return res.status(400).send("ID must be a positive integer");
    }
    const employee = await deleteEmployee(id);
    if (!employee) {
      return res.status(404).send("There is no employee with that ID");
    }
    res.sendStatus(204);
  })
  .put(async (req, res) => {
    const { id } = req.params;
    if (!req.body) {
      return res.status(400).send("Request body is required");
    }
    const { name, birthday, salary } = req.body;

    if (!name || !birthday || !salary) {
      return res.status(400).send("Missing a required field from body");
    }
    if (!/^\d+$/.test(id)) {
      return res.status(400).send("ID must be a positive integer");
    }
    const employee = await updateEmployee({
      id,
      name,
      birthday,
      salary,
    });
    if (!employee) {
      return res.status(404).send("There is no employee with that ID");
    }
    res.send(employee);
  });
