export default function(state=[],action) {
    switch(action.type){
        case 'ADD_DATA':
            let data = action.payload;
            data.id = String(new Date());
            return [...state, data];
        case 'UPDATE_DATA':
        return state.map((item, index) => {
            if (item.id !== action.payload.id) {
              return item
            }
            return {
              ...item,
              ...action.payload
            }
          })
        case 'DELETE_DATA':
        const index = state.findIndex(data => data.id === action.payload.id);
        return [...state.slice(0, index), ...state.slice(index + 1)];
        default:
            return state;
    }
}