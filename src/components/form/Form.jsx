// import styled, { css } from "styled-components";

// const Form = (props) => {
//   return (
//     <StForm
//       onSubmit={(e) => {
//         e.preventDefault();
//         props.onSubmitHandler(props.recipe);
//       }}
//     >
//       <StH1>당신의 레시피를 추천해주세요!</StH1>
//       <StLabel htmlFor="title">Title</StLabel>
//       <StInput
//         type="text"
//         name="title"
//         id="title"
//         onChange={(ev) => {
//           const { value } = ev.target;
//           props.setRecipe({
//             ...props.recipe,
//             id: Math.floor(Math.random() * 10000),
//             title: value,
//           });
//         }}
//       />
//       <StLabel htmlFor="url">Image URL</StLabel>
//       <StInput
//         type="text"
//         name="url"
//         id="url"
//         onChange={(ev) => {
//           const { value } = ev.target;
//           props.setRecipe({
//             ...props.recipe,
//             id: Math.floor(Math.random() * 10000),
//             imgurl: value,
//           });
//         }}
//       />
//       <StLabel htmlFor="recipe">Recipe</StLabel>
//       <StTextarea
//         name="recipe"
//         id="recipe"
//         cols="40"
//         rows="10"
//         onChange={(ev) => {
//           const { value } = ev.target;
//           props.setRecipe({
//             ...props.recipe,
//             id: Math.floor(Math.random() * 10000),
//             recipe: value,
//           });
//         }}
//       ></StTextarea>
//       <div>
//         <StButton add>Add Recipe</StButton>
//         <Link to={`/lists`}>
//           <StButton back>Back</StButton>
//         </Link>
//       </div>
//     </StForm>
//   );
// };

// const StForm = styled.form`
//   /* background-color: aqua; */
//   max-width: 1000px;
//   width: 95%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   min-height: 90vh;
//   margin-top: -100px;
// `;

// const StH1 = styled.h1`
//   color: #02415c;
//   font-size: 50px;
//   margin-bottom: 70px;
//   /* background-color: #b0c4cc;
//   border-radius: 20px; */
// `;
// const StLabel = styled.label`
//   color: #02415c;
//   font-size: 20px;
//   margin: 10px;
//   font-weight: bold;
// `;

// const StInput = styled.input`
//   width: 500px;
//   height: 30px;
//   border-radius: 10px;
//   border: 0;
//   background-color: #d6edf8;
//   font-size: 20px;
//   padding: 10px;
// `;

// const StTextarea = styled.textarea`
//   width: 500px;
//   border-radius: 10px;
//   border: 0;
//   background-color: #d6edf8;
//   font-size: 20px;
//   padding: 10px;
// `;

// export default Form;
