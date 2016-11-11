import React, { Component, PropTypes } from 'react'
import Task from './Task'
import { createTask } from '../actions/tasks'

export default class TaskList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  inputChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  keyPress(event) {
    if (event.charCode !== 13)
      return false;

    this.createTask(this.state.value)
    this.setState({
      value: ''
    })
  }

  createTask(value) {
    this.props.dispatch(createTask({
      description: value
    }))
  }

  render() {

    var tasks = [].concat(this.props.tasks).splice(this.props.page * 6, 6)

    return (
      <ul className="task-list">
        <lh>
          <input onChange={this.inputChange.bind(this)}
                 onKeyPress={this.keyPress.bind(this)}
                 placeholder="Type a new task and press [ENTER]"
                 value={this.state.value}/>
        </lh>

        {tasks.map((task, key) => {
          return <Task key={key}
                       task={task}
                       dispatch={this.props.dispatch} />
        })}
      </ul>
    )
  }
}
