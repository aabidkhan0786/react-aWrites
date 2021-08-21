import React from 'react';
import "./index.css";
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';


const Note = (props) => {
    console.log(props.id);
    const delNote = () => {
        props.deleteNote(props.id);
    }
    // const editNote = () => {
    //     props.editNote(props.id);
    // }
    return (
        <>
            {/* <div className="container"> */}
            <div className={props.editing ? 'blur' : "container"}>
                <div className="short_note my-4 mx-4">
                    <p className="p1"><u>Title</u>:<span>{props.title}</span></p><hr />
                    <p className="p2"><u>Content</u>: <br />{props.content}</p><hr />
                    <center>
                        <button type="button" className="note_btn mb-3" onClick={delNote}><span className="p-1 hide">DELETE</span><DeleteSweepIcon /></button>
                        {/* <button type="button" className="del_btn" onClick={editNote}><DeleteSweepIcon fontSize="large" />edit</button> */}
                    </center>
                </div>
            </div>
        </>
    )
}

export default Note;