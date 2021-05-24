import { FaTimes } from 'react-icons/fa'
import {Card, CardContent, CardHeader, Typography} from '@material-ui/core';

const Notes = ({noteList, onDelete, onPlayTime}) => {

    return (

        <>
            <Card>
                <CardHeader title="hi"/>
            </Card>
            {noteList.map( (note) => (
                <div id="tc-notes">
                    <div className="tc-note">
                        <FaTimes className="tc-cancel" onClick={ () => onDelete(note.id)} />
                        <div className="tc-note-title">
                            {note.title}
                        </div>
                        <div className="tc-note-body">
                            <p>{note.text}</p>

                        </div>
                        <div id="timestampers">

                            <input  className="timestamp-btn" onClick={() => onPlayTime(note.time)} type="submit" value="Play Timestamp"  />
                            
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Notes
