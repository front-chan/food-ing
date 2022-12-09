import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
// import TodoList from "../pages/TodoList";
import Layout from "../components/layout/Layout";
// import Todo from "../components/todo/Todo";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="lists" element={<TodoList />} /> */}
          {/* <Route path="lists/:id" element={<Todo />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
