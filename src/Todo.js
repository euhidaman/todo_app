import { Button, FormControl, Input, List, ListItem, ListItemAvatar, ListItemText, Modal } from '@material-ui/core'
import './Todo.css';
import React, { useState } from 'react'
import db from './firebase'
import DeleteIcon from '@material-ui/icons/Delete';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors';
import UpdateIcon from '@material-ui/icons/Update';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2,4,3),
    },

    margin: {
        margin: theme.spacing(1),
    },

}));

const theme = createMuiTheme({
    palette: {
        primary: green,
    },
});

function Todo(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState();  

    const updateTodo = () => {
        // update the todo, with new input text
        db.collection('todos').doc(props.todo.id).set({
            todo: input
        }, {merge:true})
        setOpen(false);
    }
    return (
        <>
        <Modal
            open={open}
            onClose={e => setOpen(false)}
        >
            <form className={classes.paper}>
                    <h2>✍Update ToDo</h2>
                    <FormControl>
                        <Input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)} />
                    </FormControl>
                    <ThemeProvider theme={theme}>
                        <Button disabled={!input} type='submit' size='small' variant="contained" color="primary" className={classes.margin} onClick={updateTodo}>
                        <UpdateIcon/> UPDATE
                        </Button>
                    </ThemeProvider>
            </form>
        </Modal>
        <List className='todo_list'>
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.todo.todo} />
                {/* in props.todo.todo --> the first 'todo' is the todo object, 
                and the second 'todo' is the text part */}
                <Button variant="contained" color="primary" onClick={e => setOpen(true)}>EDIT</Button>
                <Button color='secondary'><DeleteIcon onClick={event => {db.collection('todos').doc(props.todo.id).delete();}}/></Button>
            </ListItem>    
        </List>
        </>
    )
}

export default Todo
