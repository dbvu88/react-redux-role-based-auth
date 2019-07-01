import {
    userEnum
} from '../_enum'

let user = JSON.parse(localStorage.getItem('user'))
const initialState = user ? {
    loggedIn: true,
    user
} : {}

export const authenticate = (state = initialState, action) => {
    switch (action.type) {
        case userEnum.LOGIN_REQUEST:
            return ({
                loggedIn: true,
                ...user
            });
        case userEnum.LOGIN_SUCCESS:
            return ({
                loggedIn: true,
                ...user
            });
        case userEnum.LOGIN_FAILURE:
            return ({})
        case userEnum.LOGOUT:
            return ({})
        default:
            return state
    }
}