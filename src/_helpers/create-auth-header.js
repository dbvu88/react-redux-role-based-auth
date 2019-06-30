export const createAuthHeader = () => {
    let userInfo = JSON.parse(localStorage.getItem('user'))

    // prepare the auth header object for http request
    return userInfo && userInfo.token ? {
        'Authorization': userInfo.token
    } : {}
}