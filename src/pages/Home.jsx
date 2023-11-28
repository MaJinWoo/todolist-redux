import React from "react";
import AddForm from "../components/AddForm";
import TodoList from "../components/TodoList";
import styled from "styled-components";

const Home = () => {
  return (
    <div>
      <Header>My To Do App</Header>
      <AddForm/>
      <TodoList isDone={false}/>
      <TodoList isDone={true}/>
    </div>
  );
};
const Header=styled.header`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export default Home;
