# To-Do List API 📋

This is a simple To-Do List API built with Express.js 🌋 as I wanted to explore on APIs and stuff👨🏻‍💻. 
It allows users to manage tasks with basic operations: create, read, update, and delete.

### To Run the API 🏃


1. Ensure you have Node.js and Express installed.
2. Save the code provided in an `index.js` file.
3. Run the server using:
```bash
node index.js
```

The API can be accessed at `http://localhost:3000`.

### Endpoints

#### 1. **Get Task by ID**

- **Endpoint:** `GET /task/:id`
- **Description:** Retrieve a task by its ID.
- **Parameters:** 
  - `id`: The task's unique identifier (integer).
  
**Example:**
```
GET /task/1
```

**Response:**
```json
{
  "taskno": 1,
  "task": "Do Chores",
  "tasktype": "Household"
}
```

---

#### 2. **Add New Task**

- **Endpoint:** `POST /task/add`
- **Description:** Add a new task.
- **Request Body:**
  - `text`: Description of the task (string).
  - `type`: Category of the task (string).


**Response:**
```json
{
  "taskno": 2,
  "task": "Buy groceries",
  "tasktype": "Shopping"
}
```

---

#### 3. **Update Existing Task**

- **Endpoint:** `PUT /task/:id`
- **Description:** Update a task by its ID.
- **Parameters:** 
  - `id`: The task's unique identifier (integer).
- **Request Body:**
  - `text`: New description of the task (string).
  - `type`: New category of the task (string).



**Response:**
```json
{
  "taskno": 1,
  "task": "Clean House",
  "tasktype": "Household"
}
```

---

#### 4. **Partially Update Existing Task**

- **Endpoint:** `PATCH /task/:id`
- **Description:** Partially update a task by its ID.
- **Parameters:** 
  - `id`: The task's unique identifier (integer).
- **Request Body:** 
  - `text` (optional): New description of the task (string).
  - `type` (optional): New category of the task (string).


**Response:**
```json
{
  "taskno": 1,
  "task": "Wash Dishes",
  "tasktype": "Household"
}
```

---

#### 5. **Delete Task by ID**

- **Endpoint:** `DELETE /task/:id`
- **Description:** Delete a specific task by its ID.
- **Parameters:** 
  - `id`: The task's unique identifier (integer).


**Response:**
```json
{
  "success": "Successfully Deleted!"
}
```



