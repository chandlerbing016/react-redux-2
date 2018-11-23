// this state arg is not the app state but the state this
// reducer has previously returned ( accumulated ) on the last call (whenever an action occurs)
export default function (currentState = null, action) {
    var newState = currentState;
    switch (action.type) {
        case 'BOOK_SELECTED':
            newState = action.payload;
    }

    return newState;
}