import {
    alertConstants
} from '../_constants'

export const alert = (state = {}, action) => {
    switch (action.type) {
        case alertConstants.SUCCESS:
            return ({
                type: 'alert-danger',
                ...action
            });
        case alertConstants.ERROR:
            return ({
                type: 'alert-danger',
                ...action
            });
        case alertConstants.CLEAR:
            return ({});
        default:
            return state
    }
}