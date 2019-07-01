import {
    userEnum
} from '../_enum'
import {
    userService
} from '../_services'
import {
    alertActions
} from './'
import {
    history
} from '../_helpers'


const login = (username, password) => {

    const {
        LOGIN_REQUEST,
        LOGIN_SUCCESS,
        LOGIN_FAILURE
    } = userEnum

    return dispatch => {
        dispatch({
            type: LOGIN_REQUEST,
            user
        })

        userService.login(username, password)
            .then(user => {
                    dispatch({
                        type: LOGIN_SUCCESS,
                        user
                    })
                    history.push('/')
                },
                error => {
                    dispatch({
                        type: LOGIN_FAILURE,
                        error
                    })
                    dispatch(alertActions.error(error))
                }
            )
    }
}

const getAll = () => {

    const {
        GETALL_REQUEST,
        GETALL_SUCCESS,
        GETALL_FAILURE
    } = userEnum

    return dispatch => {
        dispatch({
            type: GETALL_REQUEST
        })

        userService.getAll().then(
            users => dispatch(users),
            error => {
                dispatch({
                    type: LOGIN_FAILURE,
                    error
                })
            }
        )
    }
}
export const userActions = {
    login,
    logout,
    getAll
}