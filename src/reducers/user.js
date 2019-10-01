//what the reducer returns is what its initial state should be:
//does it return an object? state = {}, does it return a string? state = ''
//in this case a jwt (string)

export default function (state = '', action = {}) {
    switch(action.type) {
        case 'LOGIN':
            console.log(action.payload.jwt)
            return action.payload.jwt
        default:
            return state
    }
}