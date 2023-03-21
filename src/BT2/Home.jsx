import React,  {useState} from 'react'
import style from "./style.module.css"
function Home(){
    const [image , setimage] = useState("./img/v1.png")
    return (
        <div className={style.background}>
            <div style={{backgroundColor :"black",textAlign:"center", color:"#fff",fontSize:"25px",paddingTop:"15px",paddingBottom:"15px",opacity:"0.8"}}>
                TRY GLASSES APP ONLINE
            </div>
            <div style={{textAlign:'center',position:'relative'}}>
                <img src='./img/model.jpg' style={{width:'250px'}}></img>
                <img src={image} className={style.glassesStyle}></img>
                <div className='mt-5'>
                    <button style={{width:'90px',height:'80px'}} onClick={()=>{setimage("./img/v2.png")}}>
                            <img style={{maxWidth:"100%"}} src='./img/g2.jpg'></img>
                    </button>
                    <button style={{width:'90px',height:'80px'}} onClick={()=>{setimage("./img/v3.png")}}>
                            <img style={{maxWidth:"100%"}} src='./img/g3.jpg'></img>
                    </button>
                    <button style={{width:'90px',height:'80px'}} onClick={()=>{setimage("./img/v4.png")}}>
                            <img style={{maxWidth:"100%"}} src='./img/g4.jpg'></img>
                    </button>
                    <button style={{width:'90px',height:'80px'}} onClick={()=>{setimage("./img/v5.png")}}>
                            <img style={{maxWidth:"100%"}} src='./img/g5.jpg'></img>
                    </button>
                    <button style={{width:'90px',height:'80px'}} onClick={()=>{setimage("./img/v6.png")}}>
                            <img style={{maxWidth:"100%"}} src='./img/g6.jpg'></img>
                    </button>
                    <button style={{width:'90px',height:'80px'}} onClick={()=>{setimage("./img/v7.png")}}>
                            <img style={{maxWidth:"100%"}} src='./img/g7.jpg'></img>
                    </button>
                    <button style={{width:'90px',height:'80px'}} onClick={()=>{setimage("./img/v8.png")}}>
                            <img style={{maxWidth:"100%"}} src='./img/g8.jpg'></img>
                    </button>
                    <button style={{width:'90px',height:'80px'}} onClick={()=>{setimage("./img/v9.png")}}>
                            <img style={{maxWidth:"100%"}} src='./img/g9.jpg'></img>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Home