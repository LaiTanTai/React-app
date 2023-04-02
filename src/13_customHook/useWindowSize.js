import {useState,useEffect} from 'react'

function useWindowSize() {
    const [size , setsize] = useState({
        width : window.innerWidth,
        height : window.innerHeight,
    })
    useEffect(()=>{
        const handleResize = ()=>{
            setsize({
                width : window.innerWidth,
                height : window.innerHeight,
            })
        }
        window.addEventListener("resize",handleResize);
        return ()=>{
            window.removeEventListener("resize",handleResize)
        }
    },[])
  return size;
}

export default useWindowSize