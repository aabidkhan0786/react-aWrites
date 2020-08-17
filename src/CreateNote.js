import React, { useState } from 'react'
import "./index.css";

import PostAddIcon from '@material-ui/icons/PostAdd';



const CreateNote =(props)=>{
    const [note,setNote] = useState({title:"",content:""})

    const inputNote=(event)=>{

        const {name,value}=event.target;
        setNote((preData)=>{
            return{
            ...preData,[name]:value,
        }})
       
    }
const addNote =()=>{
    props.passNote(note);
    setNote({title:"",content:""});
};        
    return(
        <>
        <div className="container-fluid">
            <div className="row d-flex justify-content-center">
            <div className="col-md-4 my-5 col-8 mx-auto">
                    <div className="main_note">
                        <form>
                            <div class="form-group d-flex flex-column" >
                                <input type="text" class=" mx-2 mt-4 note_title"  name="title" value={note.title} onChange={inputNote} autoComplete="off" placeholder="Title" />
                                <textarea placeholder="Write a note here..."  rows="3"className=" my-3 mx-2 note_content" name="content" value={note.content} onChange={inputNote} ></textarea>
                                <center><button className="note_btn" onClick={addNote} type="button"  ><PostAddIcon/></button></center>
                            </div>
                        </form>
                    </div>
            </div>
            </div>
        </div>
           
        </>
    )
}

export default CreateNote;