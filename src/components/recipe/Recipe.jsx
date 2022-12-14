import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import { apis } from "../../lib/axios";

// const Detail = () => {
//   // const dispatch = useDispatch();
//   const user = useSelector((state) => state.counter.users);
//   const navigate = useNavigate();
//   const param = useParams();
//   // const { id } = useParams();

//   const getid = user.find((user) => user.id === parseInt(param.id));
//   // useEffect(() => {
//   //   dispatch(addButton(user));
//   // }, [dispatch, user]);

const Recipe = () => {
  const param = useParams();
  const navigate = useNavigate();

  const [recipes, setRecipes] = useState([]);
  console.log("recipe: ", recipes);

  const [review, setReview] = useState({ title: "" });
  //   console.log(review);
  const [reviews, setReviews] = useState([]);
  //   console.log(reviews); [recipes.reviews]

  //   const recipeList = recipes.find((recipe) => recipe.id === parseInt(param.id));
  //   console.log("recipeList:", recipeList);

  //   const fetchRecipes = async () => {

  /*
  const fetchReviews = async () => {
    const { data } = await axios.get("http://localhost:3000/reviews");
    setReviews(data);
    // return data.find((post) => post.id === param.id);
  };
  */

  /*
  useEffect(() => {
    const fetchRecipes = async () => {
      await axios
        .get(`http://localhost:3000/recipes/${param.id}`)
        .then(function (res) {
          console.log("res: ", res.data);
          setRecipes(res.data);
        })
        .catch(function (error) {
          console.log("error: ", error);
        });
    };
    fetchRecipes();
    // fetchReviews();
  }, [param.id]);
*/

  useEffect(() => {
    apis.getIdRecipes(param.id).then((res) => {
      const get = res.data;
      setRecipes(get);
    });
  }, [param.id]);

  /*
  // 레시피 전체 삭제 핸들러
  const onDeleteRecipeHandler = (recipeId) => {
    axios.delete(`http://localhost:3000/recipes/${recipeId}`);
    // const newRecipe = recipes?.filter((recipe) => recipe.id !== recipeId);
    // setRecipes(recipes);
    try {
      // 새로고침 되었을 때 경로 이동
      window.location.href = "/lists";
    } catch (error) {
      console.log(error);
    }
  };
  */

  // 레시피 전체 삭제 핸들러 apis instance 버전
  const onDeleteRecipe = (recipeId) => {
    apis.deleteRecipes(recipeId).then((res) => {
      window.location.href = "/lists";
    });
  };

  // 리뷰 추가 핸들러
  const onSubmitHandler = (review) => {
    axios.post(`http://localhost:3000/recipes/${param.id}`, review);
    console.log("recipes.reviews: ", recipes.reviews);
    console.log("review: ", review);
    // setReviews([{ ...recipes.reviews }, review]);
  };

  // 리뷰 삭제 핸들러
  const onDeleteHandler = (reviewId) => {
    axios.delete(`http://localhost:3000/recipes/${reviewId}`);
    const newReview = recipes.reviews?.filter(
      (review) => recipes.review.id !== reviewId
    );
    setReviews(newReview);
  };
  //   const recipeList = async () => {
  //     const { res } = await axios.get("http://localhost:3005/recipes");
  //     return res;
  //   };
  //   console.log(recipeList);

  /*
  const fetchRecipes = async () => {
    const { data } = await axios.get("http://localhost:3005/recipes");
    setRecipes(data);
    // const recipeList = data.find((recipe) => recipe.id === parseInt(param.id));
  };

  useEffect(() => {
    fetchRecipes();
  }, []);
  */

  return (
    <StContainer>
      <StDialog>
        <div>
          <StDialogHeader>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div>ID : {recipes.id}</div>
              <StButton
                borderColor="#ddd"
                onClick={() => {
                  // onDeleteRecipeHandler(param.id);
                  onDeleteRecipe(param.id);
                }}
              >
                삭제하기
              </StButton>
            </div>
            <div>
              <StButton
                borderColor="#ddd"
                onClick={() => {
                  navigate(`/board/${param.id}`);
                }}
              >
                수정하기
              </StButton>
              <StButton
                borderColor="#ddd"
                onClick={() => {
                  navigate("/lists");
                }}
              >
                이전으로
              </StButton>
            </div>
          </StDialogHeader>
          <StTitle>{recipes.title}</StTitle>
          <StBody>
            <StLeftBox>
              <img src={recipes.imgurl} alt="img" />
            </StLeftBox>
            <StRightBox>{recipes.recipe}</StRightBox>
          </StBody>
        </div>
        <StCommentBox>
          <div>
            <CommentSize>COMMENT</CommentSize>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onSubmitHandler(review);
              }}
            >
              <StCommentFunction
                type="text"
                onChange={(ev) => {
                  const { value } = ev.target;
                  setReview({
                    ...recipes.review,
                    id: Math.floor(Math.random() * 100000),
                    title: value,
                  });
                }}
              ></StCommentFunction>
              <StCommentButton>등록</StCommentButton>
            </form>
            <br></br>

            <CommentMarkBox>
              {recipes.reviews?.map((review) => (
                <div key={review.id}>
                  {review.id}: {review.title}
                  <button
                    type="button"
                    onClick={() => onDeleteHandler(review.id)}
                  >
                    삭제
                  </button>
                </div>
              ))}
            </CommentMarkBox>
          </div>
        </StCommentBox>
      </StDialog>
    </StContainer>
  );
};

const StContainer = styled.div`
  border: 5px solid #eee;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #c0e9fc;
`;

const StDialog = styled.div`
  width: 1000px;
  height: 760px;
  border: 5px solid grey;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #eee;
  /* @media screen and (max-width: 768px) {
    width: 95%;
  } */
`;

const StDialogHeader = styled.div`
  display: flex;
  height: 50px;
  justify-content: space-between;
  background-color: blue;
  padding: 0 24px;
  align-items: center;
`;

const StTitle = styled.h1`
  padding: 0 24px;
`;

const StBody = styled.main`
  padding: 0 24px;
`;

const StButton = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: #c0e9fc;
  border-radius: 12px;
  cursor: pointer;
  margin-left: 5px;
`;
const StLeftBox = styled.div`
  background: red;
  float: left;
  height: 350px;
  width: 470px;
  margin-bottom: 10px;
`;

const StRightBox = styled.div`
  background: green;
  float: right;
  height: 350px;
  width: 470px;
  margin-bottom: 10px;
  /* @media screen and (max-width: 800px) {
    width: 200px;
  } */
`;

const StCommentBox = styled.div`
  margin-top: -50px;
  padding-left: 25px;
  background: blue;
  /* padding: 0px; */
  height: 270px;
  /* @media screen and (max-width: 800px) {
    width: 200px;
  } */
`;

const StCommentFunction = styled.input`
  width: 700px;
  height: 50px;
  font-size: 17px;
  border: 0;
  border-radius: 15px;
  outline: none;
  padding-left: 10px;
  background-color: rgb(233, 233, 233);
`;

const StCommentButton = styled.button`
  position: relative;
  border: none;
  min-width: 150px;
  min-height: 50px;
  margin-left: 55px;
  background: linear-gradient(90deg, #c0e9fc 0%, #6ccefc 100%);
  border-radius: 1000px;
  color: darkslategray;
  cursor: pointer;
  box-shadow: 12px 12px 24px rgba(79, 209, 197, 0.64);
  font-weight: 700;
  transition: 0.3s;

  &:hover {
    transform: scale(1.2);
  }

  &:hover::after {
    content: "";
    width: 30px;
    height: 30px;
    border-radius: 100%;
    border: 8px solid #c0e9fc;
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ring 1.5s infinite;
  }
`;

const CommentMarkBox = styled.div`
  overflow: scroll;
  width: 700px;
  height: 120px;
  font-size: 17px;
  border: 0;
  border-radius: 15px;
  outline: none;
  padding-left: 10px;
  background-color: rgb(233, 233, 233);

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CommentSize = styled.h2`
  font-size: 20px;
`;
export default Recipe;
