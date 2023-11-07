import { Heading } from '@chakra-ui/react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { VStack, IconButton, useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useState, useEffect } from 'react';

function App() {
  const initialTodos = [
    {
      id: 1,
      body: 'get bread',
    },
    {
      id: 2,
      body: 'get butter',
    },
  ];

  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) || []
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    setTodos(initialTodos);
  }, []);

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  }

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack p={4}>
      <IconButton
        icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
        isRound='true'
        size='lg'
        alignSelf='flex-end'
        onClick={toggleColorMode}
      />
      <Heading
        mb='8'
        fontWeight='bold'
        size='4xl'
        bgGradient='linear(to-r, green.500, blue.300, purple.500)'
        bgClip='text'
        fontFamily='sans-serif'
      >
        Get to Work!!
      </Heading>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} todos={todos} />
    </VStack>
  );
}

export default App;
