import {Card, CardContent, CardHeader, Divider, Grid, List, Avatar, ListItem, ListItemAvatar, ListItemText, IconButton, Slide, ListItemSecondaryAction} from '@material-ui/core';
import {Delete, Timelapse} from '@material-ui/icons'

const Notes = ({noteList, onDelete, onPlayTime}) => {
    return (

            <Card>
                <CardContent>
                    <CardHeader title="Notes" subheader="Click Timestamp to Review"/>
                    <Divider/>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <List dense={false} style={{maxHeight: '250px', overflow: 'auto'}}>
                                {noteList.map( (note) => (
                                    <Slide direction="down" in mountOnEnter unmountOnExit key={note.id}>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <Avatar onClick={() => onPlayTime(note.time)}>
                                                    <Timelapse  />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary={note.title} secondary={note.text}/>
                                            <ListItemSecondaryAction>
                                                <IconButton edge="end" onClick={ () => onDelete(note.id)}>
                                                    <Delete style={{color:'red'}} />
                                                </IconButton>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    </Slide>
                                ))}
                            </List>
                        </Grid>
                    </Grid>
                </CardContent>
                
            </Card>
 



    )
}

export default Notes
