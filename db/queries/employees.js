import db from "#db/client";

/** @returns the employee created according to the provided details */
export async function createEmployee({ name, birthday, salary }) {
  // TODO
  const SQL = `
  INSERT INTO employees (name, birthday, salary)
  VALUES ($1, $2, $3)
  RETURNING *
  `;

  const {
    rows: [newEmployee],
  } = await db.query(SQL, [name, birthday, salary]);
  return newEmployee;
}

// === Part 2 ===

/** @returns all employees */
export async function getEmployees() {
  // TODO
}

/**
 * @returns the employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function getEmployee(id) {
  // TODO
}

/**
 * @returns the updated employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function updateEmployee({ id, name, birthday, salary }) {
  // TODO
}

/**
 * @returns the deleted employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function deleteEmployee(id) {
  // TODO
}
