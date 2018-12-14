export function addEvent(obj){
   
    return {
        type : 'ADD_DATA',
        payload : obj
    };
}
export function updateEvent(obj){
    console.log(obj)
    return {
        type : 'UPDATE_DATA',
        payload : obj
    };
}
export function deleteEvent(obj){
    console.log(obj)
    return {
        type : 'DELETE_DATA',
        payload : obj
    };
}
