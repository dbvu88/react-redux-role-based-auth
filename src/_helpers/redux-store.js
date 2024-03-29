import {
    createStore,
    applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import {
    createLogger
} from 'redux-logger'
import {
    reducer
} from '../_reducers'

const logger = createLogger()

export const store = createStore(
    reducer,
    applyMiddleware(
        thunk,
        logger
    )
)