import {
    alertEnum
} from '../_enum'

export const alert = (state = {}, action) => {
    switch (action.type) {
        case alertEnum.SUCCESS:
            return ({
                type: 'alert-danger',
                ...action
            });
        case alertEnum.ERROR:
            return ({
                type: 'alert-danger',
                ...action
            });
        case alertEnum.CLEAR:
            return ({});
        default:
            return state
    }
}