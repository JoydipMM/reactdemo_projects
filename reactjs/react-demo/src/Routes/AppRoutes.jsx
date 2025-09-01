import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../Pages/NotFound';
import Home from "../Pages/Home";
import Tutorials from '../Tutorials/Tutorials';
import TutorialLayout from '../Layout/TutorialLayout';
import SimpleCounter from '../Tutorials/SimpleCounter/SimpleCounter';
import GeneratePassword from '../Tutorials/GeneratePassword/GeneratePassword';
import SimpleContextApi from '../Tutorials/SimpleContextApi/SimpleContextApi';
import ThemeSwitcher from '../Tutorials/ThemeSwitcher/ThemeSwitcher';
import Todo from '../Tutorials/Todo/Todo';
import SimpleTodo from '../Tutorials/SimpleTodo/SimpleTodo';
import TodoPractice from '../Tutorials/TodoPractice/TodoPractice';
import TicTacToe from '../Tutorials/TicTacToe/index';

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/tutorials" element={<TutorialLayout/>}>
          <Route index element={<Tutorials/>} />
          {/* <Route path="simple-counter" element={<SimpleCounter/>} /> */}
          <Route path="simple-counter" element={<SimpleCounter />}>
            {/* <Route path="cc" element={<Count />} />
            <Route path="cc2" element={<Count2 />} /> */}
          </Route>
          <Route path="generate-password" element={<GeneratePassword />}/>
          <Route path="simple-context-api" element={<SimpleContextApi />}/>
          <Route path="theme-switcher" element={<ThemeSwitcher />}/>
          <Route path="todo" element={<Todo />}/>
          <Route path="simple-todo" element={<SimpleTodo />}/>
          <Route path="Todo-practice" element={<TodoPractice />}/>
          <Route path="Tic-tac-toe" element={<TicTacToe />}/>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default AppRoutes
