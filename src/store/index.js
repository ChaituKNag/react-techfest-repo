import { createStore, combineReducers} from 'redux';

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';

const initialState = [
    {
        id: 1,
        completed: true,
        title: 'Bring back Ironman from space'
    },
    {
        id: 2,
        completed: false,
        title: 'Kill Thanos'
    },
    {
        id: 3,
        completed: false,
        title: 'Destroy all the stones'
    },
];

const store = createStore(combineReducers({
    "todos": (state = initialState, action) => {
        switch(action.type) {
            case ADD_TODO:
                return [...state, action.todo];
            case REMOVE_TODO:
                return state.filter(todo => todo.id !== action.id);
            case COMPLETE_TODO:
                return state.map(todo => {
                    if(todo.id === action.id) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        }
                    } else {
                        return todo
                    }
                });
            default: return state;
        }
    }
}))

export default store

