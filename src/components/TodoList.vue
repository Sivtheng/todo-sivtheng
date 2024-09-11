<template>
  <div class="todo-container">
    <div class="todo-content">
      <h1>sivtheng's todo-list</h1>
      <input
        v-model="newTodo"
        @keyup.enter="addTodo"
        placeholder="Add a new task"
      />
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(todo, index) in todos" :key="index">
            <td>
              <span :class="{ completed: todo.completed }">
                {{ todo.text }}
              </span>
            </td>
            <td>
              <span :class="todo.completed ? 'status-completed' : 'status-pending'">
                {{ todo.completed ? 'Completed' : 'Pending' }}
              </span>
            </td>
            <td>
              <button
                @click="toggleComplete(todo.id, todo.completed)"
                class="btn-toggle"
              >
                Done
              </button>
              <button
                @click="deleteTodo(todo.id)"
                class="btn-delete"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

export default {
  data() {
    return {
      newTodo: '',
      todos: []
    };
  },
  async created() {
    const todosCollection = collection(db, "todos");
    onSnapshot(todosCollection, (snapshot) => {
      this.todos = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    });
  },
  methods: {
    async addTodo() {
      if (this.newTodo.trim() === "") return;
      await addDoc(collection(db, "todos"), {
        text: this.newTodo,
        completed: false
      });
      this.newTodo = "";
    },
    async toggleComplete(id, completed) {
      const todoDoc = doc(db, "todos", id);
      await updateDoc(todoDoc, {
        completed: !completed
      });
    },
    async deleteTodo(id) {
      const todoDoc = doc(db, "todos", id);
      await deleteDoc(todoDoc);
    }
  }
};
</script>

<style scoped>
.todo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: var(--primary);
}

.todo-content {
  width: 100%;
  max-width: 800px;
  padding: 2rem;
  background-color: var(--secondary);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 2rem;
  color: var(--accent);
  text-align: center;
  margin-bottom: 1rem;
}

input {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  background-color: var(--primary);
  color: var(--light);
  border: 2px solid var(--accent);
  border-radius: 4px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid var(--primary);
  color: var(--light);
}

th {
  background-color: var(--primary);
  color: var(--accent);
}

.completed {
  text-decoration: line-through;
  color: #888;
}

.status-completed {
  color: var(--accent);
}

.status-pending {
  color: var(--light);
}

button {
  padding: 0.25rem 0.5rem;
  margin-right: 0.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-toggle {
  background-color: var(--accent);
  color: var(--light);
}

.btn-delete {
  background-color: #f44336;
  color: var(--light);
}
</style>
