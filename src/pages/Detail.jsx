import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteTodo } from "../redux/modules/todos";
import styled from "styled-components";
const Detail = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const todos = useSelector((state)=>state.todos);
  const selectedTodo = todos.find((todo)=>todo.id===id);
  const deleteBtnHandler=()=>{
    dispatch(deleteTodo(selectedTodo.id));
    navigate('/');
  }
  return (
    <DetailSection>
      <h2>{selectedTodo.title}</h2>
      <p>{selectedTodo.body}</p>
      <p>{String(selectedTodo.isDone)}</p>
      <ButtonSection>
      <button onClick={()=>navigate('/')}>돌아가기</button>
      <button onClick={deleteBtnHandler}>삭제</button>
      </ButtonSection>
    </DetailSection>
  );
};

const DetailSection=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px;
  gap:10px;
  border: 1px solid black;
  padding:20px;
`
const ButtonSection=styled.div`
  display: flex;
  gap:5px;
`
export default Detail;
