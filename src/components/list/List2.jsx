import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const List = (props) => {
  return (
    <div>
      <StDiv key={props.list.id}>
        {/* <a href="https://www.naver.com">상세보기</a> */}
        <Link to={`/lists/${props.list.id}`}>
          <StSpan>상세보기</StSpan>
        </Link>
        <StH4>{props.list.title}</StH4>
        <StH6>{props.list.recipe}</StH6>
        <div>
          <StButton delete onClick={() => props.onDeleteRecipe(props.list.id)}>
            삭제하기
          </StButton>
          <StButton complete onClick={() => props.onChangeRecipe(props.list)}>
            {props.list.done ? "완료" : "취소"}
          </StButton>
        </div>
      </StDiv>
    </div>
  );
};

const StH4 = styled.h4`
  font-size: 1.8rem;
  margin: 10px;
`;

const StH6 = styled.h6`
  font-size: 1.15rem;
  margin: 10px;
`;

const StButton = styled.button`
  background-color: transparent;
  border-radius: 10px;
  width: 130px;
  padding: 10px 30px;
  margin: 10px;
  cursor: pointer;
  ${(props) =>
    props.delete &&
    css`
      border: 2px solid red;
    `};
  ${(props) =>
    props.complete &&
    css`
      border: 2px solid green;
    `};
`;

const StDiv = styled.div`
  width: 330px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  border: 5px solid rgb(1, 87, 65);
  border-radius: 10px;
`;

const StSpan = styled.span`
  color: black;
  cursor: pointer;
`;

export default List;
