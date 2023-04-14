// action type
const TANG_CUOC = "baucua/tangcuoc"
const GIAM_CUOC = "baucua/giamcuoc"

// Actions creator
export const tangcuoc = (ma)=>{
    return {type : TANG_CUOC,payload:ma}
}
export const giamcuoc = (ma)=>{
    return {type : GIAM_CUOC,payload:ma}
}
export const batDauAction = ()=>{
    return {type : "baucua/batdau"}
}
// Reducer
const initial={
    tongdiemcuoc:500,
    danhsachcuoc:[
        { ma: "bau", diemCuoc: 0 },
        { ma: "cua", diemCuoc: 0 },
        { ma: "tom", diemCuoc: 0 },
        { ma: "ca", diemCuoc: 0 },
        { ma: "nai", diemCuoc: 0 },
        { ma: "ga", diemCuoc: 0 },
    ],
    xucXac: ["bau", "bau", "bau"],
}

function Baucua(state=initial,action){
    switch(action.type){
        case TANG_CUOC:{
            const danhsachcuoctang = state.danhsachcuoc.map((value)=>{
                if(value.ma === action.payload){
                    return {...value,diemCuoc : value.diemCuoc+100};
                }
                return value;
            })
            return {...state,danhsachcuoc:danhsachcuoctang,tongdiemcuoc:state.tongdiemcuoc-100}
        }
        case GIAM_CUOC:{
            const danhsachcuocgiam = state.danhsachcuoc.map((value)=>{
                if(value.ma === action.payload){
                    return {...value,diemCuoc : value.diemCuoc-100};
                }
                return value;
            })    
            return {...state,danhsachcuoc:danhsachcuocgiam,tongdiemcuoc:state.tongdiemcuoc+100}
        }
        default:
            return state;
    }
}
export default Baucua