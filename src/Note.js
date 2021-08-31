import React from 'react';
import "./index.css";
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';


const Note = (props) => {
    const delNote = () => {
        props.deleteNote(props.id);
    }
    console.log(props.listAlign);
    // const editNote = () => {
    //     props.editNote(props.id);
    // }
    return (
        <>
            {/* <div className="container"> */}
            {/* <div className={props.darkMode ? 'darkMode' : "container"}> */}
            {/* <div className="child_div "> */}
            <div className={props.listAlign ? "child_div_list": "child_div"}>
            <div className={props.listAlign ? "short_note_list my-4 mx-4 shadow": "short_note my-4 mx-4 shadow"}>

                {/* <div className="short_note my-4 mx-4 shadow"> */}
                    <p className="p1"><u>Title</u>:<span>{props.title}</span></p><hr />
                    <p className="p2"><u>Content</u>: <br />{props.content}</p><hr />
                    <center>
                        <button type="button" className="note_btn mb-3" onClick={delNote}><span className=""></span><DeleteSweepIcon /></button>
                        {/* <button type="button" className="del_btn" onClick={editNote}><DeleteSweepIcon fontSize="large" />edit</button>  */}
                    </center>
                </div>
            </div>
            {/* </div> */}
  

        </>
    )
}

export default Note;