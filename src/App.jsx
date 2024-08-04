function App() {

  const dailyTasks = [
    {name: 'Morning Exercise', completed: true},
    {name: 'Read a Book', completed: false},
    {name: 'Work on Project', completed: true},
    {name: 'Grocery Shopping', completed: false},
    {name: 'Prepare Dinner', completed: true},
    {name: 'Evening Relaxation', completed: true}
  ];
  
  return (
    <>
      <h1>My Tasks</h1>
      <ul>
        {dailyTasks.map((task, index) => 
          <li key={index} className={task.completed? 'completed': 'incompleted'}>
            {task.name};
          </li>
        )}
      </ul>
    </>
  )
}

export default App
