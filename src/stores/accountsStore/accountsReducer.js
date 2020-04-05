export function reducer(state, action) {
    let newState = { ...state };
        try {
            switch(action.type) {
                case "SOMEACTION":
                    return newState;
                default:
                    throw console.error(`not a valid action type: ${action.type}`);
            }
        }
        catch(e) {}
}