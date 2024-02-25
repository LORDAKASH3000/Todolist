import { Form, Button } from 'react-bootstrap';
import './Todo.css'
const Todo = ({ todo, handelDelete, markAsDone }) => {

    return (
        <>
            <h5 className={`${!todo.open ? 'strike' : ''}`}>{todo.title}</h5>
            <p className={`ms-4 ${!todo.open ? 'strike' : ''}`}>{todo.desc}</p>
            <div className="form-group form-check my-2">
                <Form.Check
                    type="checkbox"
                    id={`${todo.id}`}
                    checked={!todo.open}
                    onChange={() => markAsDone(todo)}
                    label="Done"
                />
            </div>
            <Button onClick={() => handelDelete(todo)} variant='outline-danger'>Delete Todo</Button>
        </>
    );
}

export default Todo;