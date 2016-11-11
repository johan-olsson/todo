import React, { Component, PropTypes } from 'react'
import { toggleTaskStatus } from '../actions/tasks'
import classnames from 'classnames'

export default class Task extends Component {

  toggleTaskStatus() {
    this.props.dispatch(toggleTaskStatus(this.props.task.id))
  }

  render() {
    var className = classnames({
      done: this.props.task.done
    })

    return (
      <li className={className} onClick={this.toggleTaskStatus.bind(this)}>
        {this.props.task.description}
      </li>
    )
  }
}
