import React, { Component } from 'react'
import PropTypes from 'prop-types'

import fetch from 'isomorphic-fetch'
import { ReactSVGPanZoom } from 'react-svg-pan-zoom'


class InteractiveSiteplan extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = { content: null}
  }

  componentDidMount() {
    console.log('componentDidMount')
    fetch(this.props.src)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('Bad response from server', response.status)
        }
        return response.text()
      })
      .then((text) => {
        this.setState({content: text})
      })
  }

  render() {
    if (this.state.content === null) {
      return (
        <div>
          {this.props.src}
        </div>
      )
    }
    return (
      <ReactSVGPanZoom
        className="parent"
        width={500} height={500}
        onClick={event => console.log(event.x, event.y, event.originalEvent)}>
        <svg width={500} height={500}>
          <g dangerouslySetInnerHTML={{__html: this.state.content}}/>
        </svg>
      </ReactSVGPanZoom>
    )
  }

}


export default InteractiveSiteplan
