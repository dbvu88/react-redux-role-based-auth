import {
    alertContants
} from '../_enum'

const success = message => {
    return {
        type: alertContants.SUCCESS,
        message
    }
}

const error = message => {
    return {
        type: alertContants.ERROR,
        message
    }
}

const clear = () => {
    return {
        type: alertContants.CLEAR
    }
}

export const alertActions = {
    success,
    error,
    clear
}