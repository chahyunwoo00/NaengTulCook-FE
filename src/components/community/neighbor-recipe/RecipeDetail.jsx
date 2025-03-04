import * as A from "./RecipeDetail.style";
import defaultSvg from "@/assets/default-img/default_thumbnail.svg";
import fireSvg from "@/assets/icons/recipe/icon_fire.svg";
import clockSvg from "@/assets/icons/recipe/icon_clock.svg";
import starSvg from "@/assets/icons/recipe/icon_star.svg";
import starActiveSvg from "@/assets/icons/recipe/icon_star_active.svg";
import { useState } from "react";
import { PostRecipeShare } from "@/apis/community/recipe-share/PostRecipeShare";
import { useLocation } from "react-router-dom";

export default function RecipeDetail({ data, postId }) {
  const location = useLocation();
  const { picture, title, userNickname } = location.state || {};

  const userId = localStorage.getItem("userId");
  console.log(data);

  const [isScrap, setIsScrap] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const handleScrap = () => {
    const fetchData = async () => {
      await PostRecipeShare({
        postId: postId,
        userId: userId,
      });
    };
    if (!isDone) {
      fetchData();
      setIsScrap(true);
      setIsDone(true);
    }
  };

  return (
    <A.PageLayout>
      {/* 썸네일 */}
      <A.ImgContainer>
        {picture ? (
          <A.ThumbnailImg src={`http://13.211.69.139:8080${picture}`} />
        ) : (
          <A.ThumbnailImg src={defaultSvg} />
        )}
        <A.OverlayGradation />
      </A.ImgContainer>

      {/* 기본 정보 */}
      <A.CardTitle>{title ? title : "누가비벼도 맛있는 비빔국수 레시피"}</A.CardTitle>

      <A.SubInfoWrapper>
        <A.ChipList>
          <A.ChipItem $stateColor="red">한식</A.ChipItem>

          <A.InfoChip>
            <img src={fireSvg} alt="레벨" />
            <span>초급</span>
            {/* {level == 1 ? <p>초급</p> : level == 2 ? <p>중급</p> : <p>고급</p>} */}
          </A.InfoChip>

          <A.InfoChip>
            <img src={clockSvg} alt="시간" />
            <span>10분 이내</span>
          </A.InfoChip>
        </A.ChipList>

        <A.ScrapButton onClick={handleScrap} $isActive={isScrap}>
          <img src={isScrap ? starActiveSvg : starSvg} alt="스크랩" />
          <span>스크랩</span>
        </A.ScrapButton>
      </A.SubInfoWrapper>

      {/* 프로필 정보 */}
      <A.ProfileContainer>
        <A.BoldText>{userNickname ? userNickname : "요리천재"}</A.BoldText>
        <A.SubProfileInfo>
          <p>20대</p>
          <p>1인 가구</p>
        </A.SubProfileInfo>
      </A.ProfileContainer>

      {/* 레시피 재료 */}
      <A.IngreWrapper>
        <A.BoldText>레시피 재료</A.BoldText>

        {/* map 추가 */}
        <A.IngreContainer>
          <p>기본 재료</p>
          <A.IngreChipList>
            {data?.ingredient.map((item, i) => (
              <A.IngreChip key={i}>{item.name}</A.IngreChip>
            ))}
          </A.IngreChipList>
        </A.IngreContainer>
        <A.IngreContainer>
          <p>양념</p>
          <A.IngreChipList>
            {data?.seasoning.map((item, i) => (
              <A.IngreChip key={i}>{item}</A.IngreChip>
            ))}
          </A.IngreChipList>
        </A.IngreContainer>
        <A.IngreContainer>
          <p>도구</p>
          <A.IngreChipList>
            {data?.tool.map((item, i) => (
              <A.IngreChip key={i}>{item}</A.IngreChip>
            ))}
          </A.IngreChipList>
        </A.IngreContainer>
      </A.IngreWrapper>
    </A.PageLayout>
  );
}
