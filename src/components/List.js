import React from 'react'
import LoginFormContainer from './LoginFormContainer'
import CreateFormContainer from './CreateFormContainer'

export default class List extends React.Component {
    
    render() {
        const { images, user } = this.props
        console.log('user from the list: ', !user)
        if(user) {
            return(
                <div>
                    { images === null && 'Loading...' }
                    { images.map((image => {
                        return( 
                        <div key={ image.id }>
                            <h3>{ image.title }</h3>
                            <img  className='images' src={ image.url } alt='...' width='30%'></img>
                        </div>)
                        })) 
                    }
                <CreateFormContainer />
                </div>
            )
        } else {
            return(
                <LoginFormContainer />
            )
        }
    }
}