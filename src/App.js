import React, { useState, useEffect } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Header from './Header'
import CreateNote from "./CreateNote.js"
import Note from "./Note.js"
// import EditNote from "./EditNote.js"
import Footer from "./Footer.js"
import { createPosts, deletePosts, getPosts } from "./API"


const App = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(false);
    // const [dark, setDark] = useState(false);
    const [list, setList] = useState(false);


    useEffect(() => {
        getAllPosts()
    }, [])

    const disNote = async (note) => {
        setItem((preVal) => {
            return [...preVal, note];
        })
        console.log(note);

        await createPosts(note)
        getAllPosts()

    }

    const delNote = async (id) => {
        // setItem((preData) =>
        //     preData.filter((currVal, num) => {
        //         return num !== id;
        //     })
        // )
        await deletePosts(id)
        alert("Deleted Successfully !!")
        getAllPosts()

    }
    // const editNote = async (id) => {
    //     setEdit(true)
    //     // setItem((preData) =>
    //     //     preData.filter((currVal, num) => {
    //     //         return num !== id;
    //     //     })
    //     // )
    //     const notes = await editPosts(id);
    //     console.log(notes.data);
    //     // setItem(notes.data);
    //     setNote(notes.data)
    // }

    const alignList = (mode)=>{
        console.log(mode);
        // setDark(mode)
        setList(mode)
    }
    const getAllPosts = async () => {
        setLoading(true)
        const posts = await getPosts();
        setItem(posts.data);
        setLoading(false)
    }
    return (
        <>
            <Header alignList={alignList} />
            <CreateNote passNote={disNote} />
            {/* {
                edit ? 
                note && 
                     <EditNote title={note.title} />
                :""
               
            } */}
            {
            loading ?
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div> :
                item && item.map((val, index) => {
                    return <> 
                    <div className="">
                        
                    <Note
                        key={index}
                        id={val._id}
                        title={val.title}
                        content={val.content}
                        deleteNote={delNote}
                        // darkMode={dark}
                        listAlign={list}
                        // editNote={editNote}
                        // editing={edit}
                        />
                        </div>      
                        
                        </>                                   
                })
            }
            <Footer />
        </>
    )
}

export default App;