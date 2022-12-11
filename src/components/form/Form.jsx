import styled from "styled-components";

const Form = (props) => {
  return (
    <StForm onSubmit={props.onSubmit}>
      <div>
        <StLabel htmlFor="title">제목</StLabel>
        <StInput
          type="text"
          id="title"
          value={props.title || ""}
          onChange={(e) => props.setTitle(e.target.value)}
          // required
        />
        <StLabel htmlFor="recipe">내용</StLabel>
        <StInput
          type="text"
          id="recipe"
          value={props.recipe || ""}
          onChange={(e) => props.setRecipe(e.target.value)}
          // required
        />
      </div>
      <StButton>추가하기</StButton>
    </StForm>
  );
};

const StForm = styled.form`
  border-radius: 10px;
  background-color: rgb(227, 227, 227);
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
`;

const StLabel = styled.label`
  font-size: 1.1rem;
  margin: 10px;
  font-weight: bold;
`;

const StInput = styled.input`
  margin: 10px;
  width: 250px;
  height: 40px;
  border: 0;
  border-radius: 10px;
`;

const StButton = styled.button`
  width: 130px;
  color: white;
  border-radius: 10px;
  margin: 10px;
  padding: 10px 30px;
  background-color: rgb(1, 87, 65);
  border: 0;
  cursor: pointer;
`;

export default Form;
