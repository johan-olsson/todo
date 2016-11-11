import React, { Component, PropTypes } from 'react'
import { updateSearch, toggleSearch } from '../actions/filter'
import classnames from 'classnames'

export default class SearchHeader extends Component {

  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
  }

  updateSearch(event) {
    this.props.dispatch(updateSearch(event.target.value))
  }

  toggleSearch() {
    this.props.dispatch(toggleSearch())
  }

  render() {
    return (
      <div>
        {(this.props.searching)?
          <div>
            <h3>
              <input onChange={this.updateSearch.bind(this)}
                     placeholder="search..." />
            </h3>
            <span onClick={this.toggleSearch.bind(this)}
                  className="fa-times search-button"/>
          </div>
        :
          <div>
            <h3 onClick={this.toggleSearch.bind(this)}>
              The to-do list exercise
            </h3>
            <span onClick={this.toggleSearch.bind(this)}
                  className="fa-search search-button"/>
          </div>
        }
      </div>
    )
  }
}
