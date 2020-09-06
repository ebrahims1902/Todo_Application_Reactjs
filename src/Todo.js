import React, { useState } from 'react'
import { List, ListItemText, ListItem, ListItemAvatar, Modal, Button, FormControl, InputLabel, Input } from '@material-ui/core'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import './Todo.css';
import db from './firebase';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3)
    }
}))

function Todo(props) {

    const classes = useStyles()

    const [open, setOpen] = useState(false);
    const [input, setInput] = useState();

    const handleOpen = () => {
        setOpen(true);
    }

    const updateTodo = (event) => {
        // update todo with the new input text
        event.preventDefault(); 
        db.collection('todos').doc(props.todo.id).set({
            todo: input
        }, {merge: true})

        setOpen(false);
        setInput('');
    }

    return (
        <>
        <Modal
        open={open}
        onClose={e => setOpen(false)}>
            <div className={classes.paper}>
                <h1>You can edit your text</h1>
                <FormControl>
                    <InputLabel>WRITE HERE</InputLabel>
                    <Input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)} />
                </FormControl>
                {/* <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)} /> */}
                <Button disabled={!input}  onClick={updateTodo} variant="contained" color="primary" >Update Todo</Button>
            </div>
        </Modal>
        <List className="todo__list">
            <ListItem>
                <ListItemAvatar></ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary="Dummy deadline" />
            </ListItem>
            
            <Button onClick={e => setOpen(true)} variant="contained" color="primary" >Edit</Button>
            <Button >
                <DeleteForeverIcon color="secondary" onClick={event => db.collection('todos').doc(props.todo.id).delete()} />
            </Button>
        </List>
        </>
    )
}

export default Todo
