import React from 'react';
import "./index.css";
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';


const Note = (props) => {
    const delNote = () => {
        props.deleteNote(props.id);
    }
    return (
        <>
            <div className="container ">
                <div className="short_note my-4 mx-4">
                    <p className="p1"><u>Title</u> :<span>{props.title}</span></p><hr/>
                    <p className="p2"><u>Content</u> : <br />{props.content}</p><hr/>
                    <center><button type="button" className="del_btn" onClick={delNote}><DeleteSweepIcon fontSize="large" /></button></center>
                </div>
            </div>
        </>
    )
}

export default Note;