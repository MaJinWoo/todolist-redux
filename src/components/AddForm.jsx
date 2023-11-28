import React, { useState } from 'react'
import shortid from 'shortid';
import { addTodo } from '../redux/modules/todos';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

export default function AddForm() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const dispatch = useDispatch();
    const addTodoHendler=(e)=>{
        e.preventDefault();
        if(title==='' || body===''){
            alert('제목과 내용을 입력해주세요!');
            return 1;
        }else{
            alert('할 일이 추가되었습니다!');
        }
        const newTodo={
            id:shortid.generate(),
            title,
            body,
            isDone:false
        }
        dispatch(addTodo(newTodo));
        setTitle("");
        setBody("");
    }
  return (
    <AddFormSection>
        <h1>To Do 추가하기</h1>
        <StyledForm onSubmit={addTodoHendler}>
            <StyledInput value = {title} onChange={(e)=>setTitle(e.target.value)} placeholder='제목을 입력하세요.'/>
            <StyledInput value = {body} onChange={(e)=>setBody(e.target.value)} placeholder='내용을 입력하세요.'/>
            <button type="submit">완료</button>
        </StyledForm>
    </AddFormSection>
  )
}
const AddFormSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    font-size: 20px;
`
const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:10px;
`
const StyledInput = styled.input`
    font-size: 20px;
    outline: none;
`