import { DELETE_TODO_ITEM, BTN_CLICK, INPUT_CHANGE, INIT_TODO_LIST } from '../actionTypes'

const defaultState = {
    inputValue: '111',
    list: []
}
export default function reducer_one (state = defaultState, action) {
    console.log(INPUT_CHANGE)
    if (action.type === INPUT_CHANGE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        console.log(newState)
        return newState;
    }
    if (action.type === BTN_CLICK) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(state.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if (action.type === DELETE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1)
        return newState;
    }
    if (action.type === INIT_TODO_LIST) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data
        return newState;
    }
    return state;
}
