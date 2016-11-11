import React, { Component, PropTypes } from 'react'
require('../style/base.less')

export default class Container extends Component {

  render() {
    return (
      <div id='container'>
        {this.props.page}
      </div>
    )
  }
}
