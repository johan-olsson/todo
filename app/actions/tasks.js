export function fetchTasks() {

  var tasks = JSON.parse(localStorage.getItem('tasks'))

  if (!tasks)
    tasks = [];

  localStorage.setItem('tasks', JSON.stringify(tasks))

  return {
    type: 'FETCH_TASKS',
    payload: tasks
  }
}

export function toggleTaskStatus(id) {
  return {
    type: 'TOGGLE_TASK_STATUS',
    payload: {
      id: id
    }
  }
}

export function createTask(task) {
  return {
    type: 'CREATE_TASK',
    payload: {...task,
      id: `${Date.now()}${Math.random()}`,
      done: false
    }
  }
}
