import * as A from "./RecipeCard.style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RecipeCard from "@/components/recipe/RecipeCard";
import { useEffect, useState } from "react";
import { getRecipes } from "@/apis/recipe/getRecipes";
import { RecipesRecommend } from "@/dummy/RecipesRecommend"; // 나중에 삭제

export default function RecipeList() {
  const [recipeData, setRecipeData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const settings = {
    focusOnSelect: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    slidesToScroll: 1,
    // centerPadding: "14px",
    dot: false,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRecipes();
        // console.log(response); // 로그 나중에 삭제
        setRecipeData(response);
        setRecipeData(RecipesRecommend); // 나중에 삭제
      } catch (error) {
        setErrorMessage(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <A.SliderContainer>
      <Slider {...settings}>
        {recipeData.length > 0 &&
          recipeData.map((item, i) => (
            <A.SliderContent key={i}>
              <RecipeCard {...item} />
            </A.SliderContent>
          ))}
      </Slider>
    </A.SliderContainer>
  );
}
