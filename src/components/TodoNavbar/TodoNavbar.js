import { Navbar, Container, Form, FormControl, Button } from 'react-bootstrap';
import './TodoNavbar.css'

const TodoNavbar = ({ FilterValue, toggleMode, mode_color }) => {
    return (
        <Navbar bg={mode_color.mode?'':"primary"} className={mode_color.modeclass + " border-bottom"} variant="dark">
            <Container className="d-flex justify-content-center">
                <Navbar.Brand href="index.html" className="fs-3">
                    Todo List
                </Navbar.Brand>
                <Form className="d-flex w-40 gap-3">
                    <FormControl
                        type="search"
                        placeholder="Search todo"
                        aria-label="Search"
                        id='searchvalue'
                    />
                    <Button
                        variant="outline-light"
                        onClick={() => FilterValue(document.getElementById('searchvalue').value)}
                    >
                        Search
                    </Button>
                </Form>
            </Container>
            <Form.Check
                type="switch"
                id="switch-mode"
                onChange={toggleMode}
                checked={mode_color.mode}
            />
        </Navbar>
    );
}

export default TodoNavbar;
