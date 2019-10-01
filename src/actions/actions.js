import request from 'superagent'

export const ALL_IMAGES = 'ALL_IMAGES'

// const baseUrl = 'http://localhost:4000'
const baseUrl = 'https://polar-woodland-08086.herokuapp.com/'

function allImages (payload) {
  return {
    type: ALL_IMAGES,
    payload
  }
}

export const getImages = () => (dispatch, getState) => {
  const state = getState()
  const { images } = state

  if (!images.length) {
    request(`${baseUrl}/image`)
      .then(response => {
        const action = allImages(response.body)
        dispatch(action)
      })
      .catch(console.error)
  }
}

//create action creator to dispatch login credentials:
export const LOGIN = 'LOGIN'

function credentials (payload) {
    return {
        type: LOGIN,
        payload
    }
}

//data = 'email','password'
export const login = (email, password) => dispatch => {
  request
    .post(`${baseUrl}/login`)
    .send({email, password})
    .then(response => {
        //I expect the response to have a jwt
        const action = credentials(response.body)
        dispatch(action)
    })
    .catch(console.error)
}

export const NEW_IMAGE = 'NEW_IMAGE'

function newImage (payload) {
  return {
    type: NEW_IMAGE,
    payload
  }
}

export const createImage = data => (dispatch, getState) => {
    console.log('from the action creator creatImage: ', data)
    const state = getState()
    const { user } = state

    request
        .post(`${baseUrl}/image`)
        .set('Authorization', `Bearer ${user}`)
        .send(data)
        .then(response => {
            const action = newImage(response.body)
        dispatch(action)
    })
    .catch(console.error)
}