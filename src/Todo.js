import { Button, List, ListItem, ListItemAvatar, ListItemText, Modal } from '@material-ui/core'
import './Todo.css';
import React, { useState } from 'react'
import db from './firebase'
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2,4,3),
    },
}));

function Todo(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    // const handleOpen = () => {
    //     setOpen(true);
    // };

    return (
        <>
        <Modal
            open={open}
            onClose={e => setOpen(false)}
        >
            <div className={classes.paper}>
                <h1>I am a MODAL</h1>
                    <Button variant="contained" color="secondary" onClick={e => setOpen(false)}>UPDATE</Button>
            </div>
        </Modal>
        <List className='todo_list'>
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary='deadline⏳' />
                {/* in props.todo.todo --> the first 'todo' is the todo object, 
                and the second 'todo' is the text part */}
            </ListItem>
                <Button variant="contained" color="secondary" onClick={e => setOpen(true)}>EDIT</Button>
                <Button><DeleteIcon onClick={event => {db.collection('todos').doc(props.todo.id).delete();}}/></Button>
        </List>
        </>
    )
}

export default Todo
