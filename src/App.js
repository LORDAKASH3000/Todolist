import TodoNavbar from './components/TodoNavbar/TodoNavbar';
import AddTodo from './components/AddTodo/AddTodo';
import { useState, useEffect } from 'react';

const App = () => {
  const [filterValue, setFilterValue] = useState(null);
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem('prevMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });
  const [navModeclass, setnavModeClass] = useState(null);
  const [bodyModeclass, setBodyModeClass] = useState(null);
  const [todosModeclass, setTodosModeClass] = useState(null);

  const FilterValue = (value) => {
    setFilterValue(value);
  }

  const toggleMode = () => {
    setMode(prevMode => !prevMode);
  }

  useEffect(() => {
    localStorage.setItem('prevMode', JSON.stringify(mode));
  }, [mode]);

  useEffect(() => {
    setnavModeClass(mode ? 'nav-back text-light' : '');
    setBodyModeClass(mode ? 'addTodo-back text-light' : '');
    setTodosModeClass(mode ? 'todos-back text-light' : '');
  }, [mode]);

  return (
    <div className={"App " + bodyModeclass} style={{height:'100vh'}}>
      <TodoNavbar FilterValue={FilterValue} toggleMode={toggleMode} mode_color={{ mode: mode, modeclass: navModeclass }} />
      <AddTodo filterValue={filterValue} mode_color={{ mode: mode, modeclass: bodyModeclass, todosModeclass: todosModeclass }} />
    </div>
  );
}

export default App;
