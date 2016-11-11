import React, { Component, PropTypes } from 'react'
import { applyFilter } from '../actions/filter'
import classnames from 'classnames'

export default class TaskFilter extends Component {

  applyFilter(filter) {
    this.props.dispatch(applyFilter(filter))
  }

  render() {
    return (
      <ul className="filters">
        <li className={classnames({
              active: this.props.filter === 'all'
            })}
            onClick={this.applyFilter.bind(this, 'all')}>All</li>

        <li className={classnames({
              active: this.props.filter === 'not-done'
            })}
            onClick={this.applyFilter.bind(this, 'not-done')}>To do</li>

        <li className={classnames({
              active: this.props.filter === 'done'
            })}
            onClick={this.applyFilter.bind(this, 'done')}>Done</li>
      </ul>
    )
  }
}
