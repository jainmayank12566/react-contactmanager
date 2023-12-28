import { useState } from "react";
function Forms(){
    const obj={
        name:"",
        email:""
    }
    const[data,setdata]=useState(obj);
    const[activity,setactivity]=useState([]);
    function handleclick(e){
        setdata(()=>{
            const result=({...data,[e.target.name]:e.target.value});
            return result;
        })
    }
    function handlesubmit(e){
        e.preventDefault();
        if(data.name===""||data.email===""){
            alert("enter complete details");
        }
        else{
            setactivity(()=>{
                const result=([...activity,data]);
                setdata(obj);
                console.log(result);
                return result;
            })
        }
    }
    function remove(index){
        const result=activity.filter((data,i)=>{
            return index!==i;
        })
        setactivity(result);
    }
    function removecomplete(){
        setactivity([]);
    }
    return(
        <div>
            <h1>contact manager</h1>
            <h2>addcontact</h2>
            <form action="" onSubmit={handlesubmit}>
                <label htmlFor="">name:</label>
                <input type="text" name="name" placeholder="enter your name" value={data.name} onChange={handleclick}/>
                <label htmlFor="">email:</label>
                <input type="email" name="email" placeholder="enter your email" value={data.email} onChange={handleclick}/>
                <button type="submit">add</button>
            </form>
            {activity && activity.map((val,index)=>{
                return(
                    <div key={val.email}>
                        {val.name}-{val.email}
                        <button onClick={()=>remove(index)}>remove</button>
                    </div>
                )
            })}
            <button onClick={removecomplete}>remove all contacts</button>
        </div>
    )
}
export default Forms;