  
import { useState } from 'react'

const AddNotes = ({addNote, time}) => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const onSubmit = (e) =>{
        e.preventDefault();
 
        addNote({title, text, time})

        setTitle('');
        setText('');
    }
    
    return (
        <div className="addNote-control">
            <div>
                <form onSubmit={onSubmit}>
                    <input value={title} onChange={ (e) => (setTitle(e.target.value))} id="title-note" type="text" className="form-control" placeholder="Title.."/>
                    <textarea value={text} onChange={ (e) => (setText(e.target.value))} id="text-note" className="form-control text-container" placeholder="Type your notes here.."></textarea>
                    <button className="btn btn-primary my-2 update-btn" type="submit">Time Stamp</button>
                </form>
            </div>
        </div>

    )
}

export default AddNotes