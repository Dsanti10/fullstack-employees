import db from "#db/client";
import { createEmployee } from "#db/queries/employees";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  // TODO
  const employees = [
    { name: "Pedro", birthday: 20090103, salary: 50000 },
    { name: "Junior", birthday: 19990301, salary: 100000 },
    { name: "Florencio", birthday: 20120209, salary: 200000 },
    { name: "Rusty", birthday: 19980301, salary: 300000 },
    { name: "Angie", birthday: 19860208, salary: 400000 },
    { name: "Gavin", birthday: 19850307, salary: 500000 },
    { name: "Sonny", birthday: 20170408, salary: 600000 },
    { name: "Edgar", birthday: 19930403, salary: 700000 },
    { name: "Horacio", birthday: 19900404, salary: 800000 },
    { name: "Miranda", birthday: 20170304, salary: 900000 },
  ];

  for (const employee of employees) {
    await createEmployee(employee);
  }
  console.log("Database seeded successfully");
}
