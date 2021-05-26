import './App.css';
import { useState, useRef } from 'react'
import Header from './components/Header'
import Video from './components/Video'
import AddNotes from './components/AddNotes'
import Notes from './components/Notes'
import ReactPlayer from 'react-player/lazy'
import { Grid } from '@material-ui/core';

//import { makeStyles } from '@material-ui/core/styles'

// const useStyles = makeStyles((theme) => ({
//   grid: {
//      margin: theme.space(2),
//   }
// }));


function App() {


  const [url, setUrl] = useState('');
  const [timestamp, setTimestamp] = useState([]);
  //const [noteList, setNoteList] = useState([]);
  const [noteList, setNoteList] = useState([
    {id: 1, text:"swaasdasdasdsadasdsadasdasdsadsadsadasg", title: "hello"},
    {id: 2, text:"swag1", title: "hello1"},
    {id: 3, text:"swag2", title: "hello2"},
    {id: 4, text:"swag2", title: "hello2"},
    {id: 5, text:"swag2", title: "hello2"},
    {id: 6, text:"swag2", title: "hello2"}
  ]);
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

//   <div className="video-notes">
//   <ReactPlayer style={{marginLeft: '5%'}}className="videoPlayer" ref={playerRef} url={url} controls={true}  onProgress={ (e) => timestampNote(e)} />
//   <Notes noteList={noteList} onDelete={deleteNote} onPlayTime={playTime} />
// </div>
  //const classes = useStyles();
  return (
    <>
      <Header />
      <Video onGetURL={onGetURL} />
      <Grid container justify="center" alignItems="center" >
        <Grid item sm={4}>
          <ReactPlayer className="videoPlayer" ref={playerRef} url={url} controls={true}  onProgress={ (e) => timestampNote(e)} />
        </Grid>
        <Grid item spacing={2} xs={12} sm={4} style={{marginLeft: '250px'}}>
          <Notes noteList={noteList} onDelete={deleteNote} onPlayTime={playTime} />
        </Grid>
      </Grid>
     
      <AddNotes addNote={addNote} time={timestamp} />

    </>
  );
}

export default App;