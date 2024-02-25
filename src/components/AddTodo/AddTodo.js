import { Container, Form, FormControl, Button, FormGroup, FormLabel } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Todos from '../Todos/Todos'
import './AddTodo.css'

const AddTodo = ({filterValue, mode_color}) => {

    const getTodoList = () => {
        let lS = localStorage.getItem("todos");
        if (lS) {
            return JSON.parse(lS);
        } return []
    }

    const setTodo = (event)=>{
        event.preventDefault();
        let prevList = getTodoList();
        let updatedList = [];

        const formData = new FormData(event.target);
        const id = prevList.length === 0 ? 1 : parseInt(prevList[prevList.length-1].id) + 1;
        const title = formData.get('title');
        const desc = formData.get('desc');
        const open = true;


        if (prevList.length === 0) {
            updatedList = [{ id, title, desc, open }];
        } else {
            updatedList = prevList.concat({ id, title, desc, open });
        }
        localStorage.setItem("todos", JSON.stringify(updatedList));
        setTodoList(updatedList);
        event.target.reset();
    }

    const updateList = (updatedList)=>{
        setTodoList(updatedList);
    }

    const [todoList, setTodoList] = useState(getTodoList);

    useEffect(() => {
        if(filterValue !== null){
            let ls = getTodoList();
            let filteredList = ls.filter(
                todo => todo?.title.toLowerCase().includes(filterValue.toLowerCase())
            )
            setTodoList(filteredList);
        }
    }, [filterValue]);

    return (
        <Container className={"w-50 my-3 p-0 border rounded " + mode_color.modeclass}>
            <section className={`border m-3 p-3 rounded ${mode_color.mode?'':'bg-light'} ` + mode_color.modeclass}>
                <h4>Add New Todo</h4>
                <Form onSubmit={setTodo}>
                    <FormGroup className="mb-3">
                        <FormLabel htmlFor="title">Todo Title</FormLabel>
                        <FormControl type="text" id="title" name="title" />
                    </FormGroup>
                    <FormGroup className="mb-3">
                        <FormLabel htmlFor="desc">Todo Description</FormLabel>
                        <FormControl as="textarea" id="desc" name="desc" rows="3" />
                    </FormGroup>
                    <Button
                        type='submit'
                        variant="outline-primary"
                        className='tdaB'
                    >
                        Add
                    </Button>
                </Form>
            </section>
            <Todos TodoList={todoList} updateList={updateList} mode_color={mode_color} />
        </Container>
    );
}

export default AddTodo;