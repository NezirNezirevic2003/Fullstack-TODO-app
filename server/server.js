require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./db");

app.use(cors());
app.use(express.json());

app.post("/todos", async (req, res) => {
  try {
    const { todo_name } = req.body;
    const { todo_desc } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (todo_name, todo_desc) VALUES($1, $2) RETURNING *",
      [todo_name, todo_desc]
    );

    res.json(newTodo.rows[0]);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
});

app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
});

app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
      id,
    ]);

    res.json(todo.rows[0]);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
});

// app.put("/todos/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { name } = req.params;
//     const { description } = req.body;
//     const updateTodo = await pool.query(
//       "UPDATE todo SET todo_desc = $1 WHERE todo_id = $2",
//       [description, id]
//     );

//     res.json("Updated succesfully");
//   } catch (error) {
//     console.log(error);
//     process.exit(1);
//   }
// });

app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
      id,
    ]);

    res.json("Successfully deleted");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is working on ${PORT}`);
});
