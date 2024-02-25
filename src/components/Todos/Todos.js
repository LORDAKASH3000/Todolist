import { Container, Alert } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Todo from '../Todo/Todo'
import './Todos.css'

const Todos = ({ TodoList, updateList, mode_color }) => {
    const [todoList, setTodoList] = useState(TodoList);
    useEffect(() => {
        setTodoList(TodoList);
    }, [TodoList]);

    const getTodoList = () => {
        let lS = localStorage.getItem("todos");
        if (lS) {
            return JSON.parse(lS);
        } return []
    }

    const handleDelete = (todo) => {
        let ls = getTodoList();
        const indexToDelete = ls.findIndex(item => item.id === todo.id);
        if (indexToDelete !== -1) {
            ls.splice(indexToDelete, 1);
            localStorage.setItem("todos", JSON.stringify(ls));
            updateList(ls);
        } else {
            window.location.reload();
        }
    };

    const markAsDone = (todo)=>{
        let ls = getTodoList();
        const indexToModify = ls.findIndex(item => item.id === todo.id);
        if (indexToModify !== -1) {
            ls[indexToModify].open = !ls[indexToModify].open;
            localStorage.setItem("todos", JSON.stringify(ls));
            updateList(ls);
        } else {
            window.location.reload();
        }
    }


    return (
        <section className={`border m-3 p-3 pt-0 rounded ${mode_color.mode?'':'bg-light'} ` + mode_color.modeclass}>
            <Container className={"mt-0 " + mode_color.modeclass}>
                <h4 className={`${mode_color.mode?'':'bg-light'} text-center py-4 sticky-top ` + mode_color.modeclass}>Your Todo's for today</h4>
                {todoList.length === 0 ? (
                    <Alert variant="info" className="text-center">
                        No Todos to display
                    </Alert>
                ) : (
                    todoList.map((todo, index) => (
                        <Container key={index} className={"border rounded p-3 mb-3 " + mode_color.todosModeclass}>
                            <Todo todo={todo} handelDelete={handleDelete} markAsDone={markAsDone} />
                        </Container>
                    ))
                )}
            </Container>
        </section>
    );
}

export default Todos;