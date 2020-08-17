import React,{ useState } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Header from './Header'
import CreateNote from "./CreateNote.js"
import Note from "./Note.js"
import Footer from "./Footer.js"



const App =()=>{
    const [item,setItem]=useState([]);
    const disNote=(note)=>{
        setItem((preVal)=>{
            return [...preVal,note];
        })
        //console.log(note);
    
    }
const delNote=(id)=>{
    setItem((preData)=>
        preData.filter((currVal,num)=>{
            return num !== id;
        })
    )
}  
    
    return(
        <>
               <Header/>
               <CreateNote passNote={disNote}/>
               {item.map((val,index)=>{
                   return <Note
                   key={index}
                   id={index}
                   title={val.title}
                   content={val.content}
                   deleteNote={delNote}
                 /> })}

                 <Footer/>
        </>
    )
}

export default App;