import { Button, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import './Todo.css';
import React from 'react'

function Todo(props) {
    return (
        <List className='todo_list'>
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary='deadline⏳' />
                {/* in props.todo.todo --> the first 'todo' is the todo object, 
                and the second 'todo' is the text part */}
            </ListItem>
            <Button>❌DELETE</Button>
        </List>
    )
}

export default Todo
