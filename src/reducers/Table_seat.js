const initState = {
    isBooking:[],
    isBooked:[],
}
function Table_seatReducer(state = initState,action){
    switch (action.type) {
        case 'Seat/Booking':
            return {...state,isBooking:[...state.isBooking,action.payload]}
        case 'Seat/Booked':
            return {...state,isBooked:[...state.isBooking,...state.isBooked],isBooking:[]}
        case 'Seat/delete':
            const newBooking = state.isBooking.filter((value)=>{
                if(value !== action.payload){
                    return value;
                }
            })
            return {...state,isBooking:newBooking};
        default:
            return state
    }
}
export default Table_seatReducer;