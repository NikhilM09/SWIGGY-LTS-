import {useState} from 'react'

const User = ({name}) =>{
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(10)
    return (
        <>
        <div>I am a User component -  {name}</div>
        <div className="flex gap-3 items-center">
            <button disabled={count===0} className={`p-2 bg-red-400  ${count===0 ? 'cursor-not-allowed opacity-40' : ''}`} onClick={()=>setCount(count-1)}>Decrement</button>
            <div>Count is : {count}</div>
            <button className="p-2 bg-green-400" onClick={()=>setCount(count+1)}>Increment</button>
        </div>
        <div className="flex gap-3 items-center">
            <button disabled={count2===0} className={`p-2 bg-red-400  ${count2===0 ? 'cursor-not-allowed opacity-40' : ''}`} onClick={()=>setCount2(count2-1)}>Decrement</button>
            <div>Count2 is : {count2}</div>
            <button className="p-2 bg-green-400" onClick={()=>setCount2(count2+1)}>Increment</button>
        </div>
        </>
    )
}

export default User