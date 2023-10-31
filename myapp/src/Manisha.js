import React ,{useState} from 'react'

function Manisha() {
    const[counts1,setCounts1]=useState(0);
    function myfunc()
    {
        setCounts1(counts1+1);
    }
    function myfunc1()
    {
        setCounts1(counts1-1);
    }
    const[counts2,setCounts2]=useState(2);
    function myfunc2()
    {
        setCounts2(counts2+2);
    }
  return (
    <>
    <button onClick={myfunc}>Increase</button>
    <span>{counts1}</span><br></br>
    <button onClick={myfunc1}>Decrease</button><br></br>
    <button onMouseOver={myfunc2}><span>{counts2}</span></button><br></br>
 
    </>
  )

  }
export default Manisha