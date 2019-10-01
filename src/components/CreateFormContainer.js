import React from 'react'
import { connect } from 'react-redux'
import { createImage } from '../actions/actions'
import CreateForm from './CreateForm'
import LoginForm from './LoginForm'

class CreateFormContainer extends React.Component {
  state = {
    title: '',
    url: ''
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.createImage(this.state)
    this.setState({
      title: '',
      url: '',
    })
  }

  render() {
    return (<div>
        <CreateForm
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state}
         />
    </div>
    )
  }
}

export default connect(null, { createImage })(CreateFormContainer)