import React, { useState } from 'react'

const EditNote = (props) => {

    console.log(props.title);
    const [note, setNote] = useState({ title:'', content:'' })
    setNote.title([props && props.title])
    // console.log(notes.title);

    // const [title,setTitle] = useState('')
    // const [content,setContent] = useState('')

    const inputNote = (event) => {
        const { name, value } = event.target;
        setNote((prevData) => {
            return {
                ...prevData, [name]: value,
            }
        })

    }

    // console.log(title,content);
    const updateNote = () => {
        if (note.title === "" || note.content === "") {
            return alert("Please add note!!")
        }
        // props.passNote(note);

        // console.log(title,content);
        // setNote({ title: "", content: "" });
    };
    // console.log(notes && notes.title, notes.content);

    return (
        <>
            <div className="container-fluid">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4 my-5 col-11 mx-auto">
                        <div className="main_note">
                            <form>
                                <div className="form-group d-flex flex-column" >
                                    <input type="text" className=" mx-2 mt-4 note_title" name="title" value={note.title} onChange={()=>inputNote} autoComplete="off" placeholder="Title" required />
                                    <textarea placeholder="Write a note here..." rows="3" className=" my-3 mx-2 note_content" name="content" value={note.content} onChange={inputNote} required ></textarea>
                                    <center><button className="note_btn" onClick={() => updateNote} type="button">update</button></center>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditNote
