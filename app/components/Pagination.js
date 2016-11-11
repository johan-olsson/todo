import React, { Component, PropTypes } from 'react'
import { setPage } from '../actions/filter'
import classnames from 'classnames'

export default class Pagination extends Component {

  setPage(page) {
    this.props.dispatch(setPage(page))
  }

  render() {
    var pages = []
    var numberOfPages = Math.ceil(this.props.tasks.length / 6)

    if (numberOfPages > 1)
      for (let i = 0; i < numberOfPages; i++) {
        pages.push(
          <li key={i}
              onClick={this.setPage.bind(this, i)}
              className={classnames({
                'fa-circle-o': this.props.page !== i,
                'fa-circle': this.props.page === i
              })} />
        )
      }

    return (
      <ul className="pagination">
        {pages}
      </ul>
    )
  }
}
