import './App.css';
import { useState, useRef } from 'react'
import Header from './components/Header'
import Video from './components/Video'
import AddNotes from './components/AddNotes'
import Notes from './components/Notes'
import ReactPlayer from 'react-player/lazy'


function App() {

  const [url, setUrl] = useState('');
  const [timestamp, setTimestamp] = useState([]);
  const [noteList, setNoteList] = useState([]);

  const playerRef = useRef(null);

  
  //add notes
  const addNote = (note) => {
    const id = Math.floor(Math.random() * 100000) +1
    const newNote = {id, ...note}
    setNoteList([...noteList, newNote])
    console.log('notelist array',noteList)
  }

  //delete notes
  const deleteNote = (noteID) => {
    console.log('delete', noteID)
    setNoteList(noteList.filter((note) => note.id !== noteID))
  }

  //Set the URL
  const onGetURL = (url) => {
    setUrl(url);
    //console.log(id)
  }

  //Set timestamp
  const timestampNote = (time) => {
    console.log('time', time);
    setTimestamp(time.playedSeconds);
    //console.log(id)
  }

  /* Video functions*/

  const playTime = (playTime) => {
    playerRef.current.seekTo(playTime);

    console.log(playerRef);
  }

  return (
    <>
      <Header />
      <Video onGetURL={onGetURL} />
      <div className="video-notes">
        <ReactPlayer style={{marginLeft: '5%'}}className="videoPlayer" ref={playerRef} url={url} controls={true}  onProgress={ (e) => timestampNote(e)} />
        <Notes noteList={noteList} onDelete={deleteNote} onPlayTime={playTime} />
      </div>
      <AddNotes addNote={addNote} time={timestamp} />

    </>
  );
}

export default App;
