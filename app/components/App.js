import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchTasks } from '../actions/tasks'

import TaskList from './TaskList'
import TaskFilter from './TaskFilter'
import SearchHeader from './SearchHeader'
import Pagination from './Pagination'

@connect((store) => {
  return {
    tasks: store.tasks.tasks,
    filter: store.filter.filter,
    search: store.filter.search,
    searching: store.filter.searching,
    page: store.filter.page
  }
})
export default class App extends Component {

  componentWillMount () {
    this.props.dispatch(fetchTasks())
  }

  render() {

    var tasks = this.props.tasks.filter((task) => {
      switch (this.props.filter) {
        case 'done': {
          return task.done
        }
        case 'not-done': {
          return !task.done
        }
      }
      return true
    })
    .sort((a, b) => {
      return b.id - a.id
    })

    if (this.props.search)
      tasks = this.props.tasks.filter((task) => {
        return task.description.match(new RegExp(this.props.search, 'i'))
      })

    return (
      <div>
        <div className="list-container">
          <SearchHeader search={this.props.search}
                        searching={this.props.searching}
                        dispatch={this.props.dispatch} />

          <TaskList filter={this.props.filter}
                    search={this.props.search}
                    page={this.props.page}
                    tasks={tasks}
                    dispatch={this.props.dispatch} />
        </div>
        <TaskFilter filter={this.props.filter}
                    dispatch={this.props.dispatch} />

        <Pagination tasks={tasks}
                    dispatch={this.props.dispatch}
                    page={this.props.page} />
      </div>
    )
  }
}
