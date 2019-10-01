import React from 'react'
import { getImages } from '../actions/actions'
import { connect } from 'react-redux'
import List from './List'

class ListContainer extends React.Component {
  componentDidMount() {
    this.props.getImages()
  }

  render() {
    return <List 
    images={this.props.images} 
    user={this.props.user}/>
  }
}

function mapStateToProps (state) {
  return { 
      images: state.images,
      user: state.user,
      login: state.login
    }
}

const mapDispatchToProps = { getImages }

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)