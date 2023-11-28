import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, switchTodo } from '../redux/modules/todos';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function TodoList({isDone}) {
    const todos = useSelector((state)=>state.todos);
    const dispatch = useDispatch();
    const navigate = useNavigate();

  return (
    <>
        <h1>{!isDone? "Todo List":"Done List"}</h1>
        {
            todos.filter((todo)=>todo.isDone===isDone)
            .map((todo)=>{
                return(
                    <ListSection key={todo.id} >
                    <TodoItem onClick={()=>navigate(`/${todo.id}`)}>
                        <p>{todo.title}</p>
                        <p>{todo.body}</p>
                        <p>{String(todo.isDone)}</p>
                    </TodoItem>
                    <ButtonSection>
                        <Button onClick={()=>{dispatch(switchTodo(todo.id))}}>{!isDone? "완료":"취소"}</Button>
                        <Button onClick={()=>{
                            dispatch(deleteTodo(todo.id))
                            }}>삭제</Button>
                    </ButtonSection>
                    </ListSection>

                )
            })
        }
    </>
  )
}

const ListSection = styled.section`
    margin-top: 50px;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    font-size: 20px;
    gap:10px;
    position: relative;
`
const TodoItem = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    padding:20px;
    width:400px;
`

const ButtonSection = styled.div`
    position: absolute;
    top:10px;
    left : 310px;
`
const Button = styled.button`
    width: 50px;
    margin:5px;

`
