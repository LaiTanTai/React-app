import React, { useEffect, useRef ,useState } from 'react'

function Ref() {
    // Dùng để DOm đến một element
    const inputRef = useRef() ;
    const sectionARef = useRef();
    const sectionBRef = useRef();
    // Tác dụng lưu trữ dữ liệu khi dữ liệu thay đổi component không re-render
    const countref = useRef(0);
    const [searchTerm,setSearchTerm] = useState("")
    const timeRef = useRef();
    const handleSearch =(evt)=>{
        setSearchTerm(evt.target.value)
        clearTimeout(timeRef.current);
        console.log()
    }
    const [count,setCount] = useState(0); 
    useEffect(()=>{
        console.log(inputRef);
        inputRef.current.focus();
    },[]);
  return (
    <div>
        <h1>Ref</h1>
        <hr></hr>
        <input ref={inputRef} className='form-control' placeholder='Username' onChange={handleSearch} value={""} />
        <button ref={countref} onClick={useRef(countref+1)}></button>
        <button onClick={()=>sectionARef.current.scrollIntoView()}>Section A</button>
        <button onClick={()=>sectionBRef.current.scrollIntoView()}>Section B</button>
        <section ref={sectionARef} style={{height:"500px"}}>Section A</section>
        <section ref={sectionBRef} style={{height:"500px"}}>Section B</section>
    </div>
  )
}

export default Ref