// import TodoNavbar from './components/TodoNavbar/TodoNavbar';
// import AddTodo from './components/AddTodo/AddTodo';
import { useState, useEffect } from 'react';
import "./App.css"

// const App = () => {
//   const [filterValue, setFilterValue] = useState(null);
//   const [mode, setMode] = useState(() => {
//     const savedMode = localStorage.getItem('prevMode');
//     return savedMode ? JSON.parse(savedMode) : false;
//   });
//   const [navModeclass, setnavModeClass] = useState(null);
//   const [bodyModeclass, setBodyModeClass] = useState(null);
//   const [todosModeclass, setTodosModeClass] = useState(null);

//   const FilterValue = (value) => {
//     setFilterValue(value);
//   }

//   const toggleMode = () => {
//     setMode(prevMode => !prevMode);
//   }

//   useEffect(() => {
//     localStorage.setItem('prevMode', JSON.stringify(mode));
//   }, [mode]);

//   useEffect(() => {
//     setnavModeClass(mode ? 'nav-back text-light' : '');
//     setBodyModeClass(mode ? 'addTodo-back text-light' : '');
//     setTodosModeClass(mode ? 'todos-back text-light' : '');
//   }, [mode]);

//   return (
//     <div className={"App " + bodyModeclass} style={{height:'100vh'}}>
//       <TodoNavbar FilterValue={FilterValue} toggleMode={toggleMode} mode_color={{ mode: mode, modeclass: navModeclass }} />
//       <AddTodo filterValue={filterValue} mode_color={{ mode: mode, modeclass: bodyModeclass, todosModeclass: todosModeclass }} />
//     </div>
//   );
// }

const App = () => {
  const [barWidth, setBarWidth] = useState(250);
  return (
    <div className='main-container'>
      <header className='topheader'>
        <button onClick={() => {
          if (barWidth === 250) {
            setBarWidth(prev => 100);
          } else {
            setBarWidth(prev => 250);
          }
        }}>Ξ</button>
      </header>
      <div className='fullWraper'>
        <Sidebar width={barWidth} />
        <ContentBody width={barWidth} />
      </div>
    </div>
  );
}

const Sidebar = ({ width }) => {
  let itemsList = [];
  for (let i = 0; i < 20; i++) {
    itemsList.push(<SidebarItems radius={width < 101 ? 100 + '%' : 10 + 'px'} width={width < 101 ? 45 + 'px' : 100 + '%'} />);
  }
  return (
    <div className='sidebar' style={{
      width: width + 'px'
    }}>
      {itemsList}
    </div>
  );
}

const SidebarItems = ({ radius, width }) => {
  return (
    <div className='sidebaritems' style={{
      borderRadius: radius,
      width: width
    }}>

    </div>
  );
}


const ContentBody = ({ width }) => {
  const calculatedWidth = `calc(100% - ${width}px)`;
  return (
    <div className='contentbody' style={{
      width: calculatedWidth
    }}>

    </div>
  );
}
export default App;
