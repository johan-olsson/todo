

export default function reducer (state = {
  tasks: [],
  error: null
}, action) {
  switch (action.type) {
    case 'FETCH_TASKS': {
      return {...state,
        tasks: action.payload
      }
    }
    case 'TOGGLE_TASK_STATUS': {
      return {...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id)
            return {...task,
              done: !task.done
            };

          return task
        })
      }
    }
    case 'CREATE_TASK': {

      var tasks = [...state.tasks, action.payload]
      localStorage.setItem('tasks', JSON.stringify(tasks))

      return {...state,
        tasks: tasks
      }
    }
  }

  return state
}
