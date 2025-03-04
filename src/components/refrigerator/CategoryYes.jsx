import * as S from "./CategoryYes.style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import plus_gray from '@/assets/refrigerator/plus_gray.svg';
import minus from '@/assets/refrigerator/minus.svg'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {deleteIngredient} from '@/apis/refrigerator/deleteIngredient'

export default function CategoryYes({ category, ingredient}) {
  const plusIngrident = [{ ingredient_id: 0, name: '+', picture: plus_gray }, ...ingredient];
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]); // 선택된 아이템 이름 저장
  const navigate = useNavigate()
  // console.log(isDeleteMode)
  // console.log(selectedItems)
  // console.log(plusIngrident)

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1,
  };

  const groupedItems = [];
  for (let i = 0; i < plusIngrident.length; i += 12) {
    groupedItems.push(plusIngrident.slice(i, i + 12));
  }
  // console.log(groupedItems)
  const handleCancel =()=>{
    setIsDeleteMode(false)
    setSelectedItems([])
  }

  const handleComplete = async () => {
    try {
      for (let item of selectedItems) {
        await deleteIngredient(item)
        console.log(`${item} deleted successfully`);
      }
      alert('삭제가 완료되었습니다')
      window.location.reload();  // 페이지 새로고침
      setIsDeleteMode(false);
    } catch (error) {
      alert('삭제를 실패하였습니다')
      console.error("Error deleting string:", error);
    }
  };

  const handleItemClick = (name) => {
    if (selectedItems.includes(name)) {
      setSelectedItems(selectedItems.filter((itemName) => itemName !== name)); // 선택 해제
    } else {
      setSelectedItems([...selectedItems, name]); // 선택 추가
    }
  };

  return (
    <S.CateWrapper $category={category}>
      <S.CateHeader>

        {!isDeleteMode ? (
          <>
            <S.CateName>{category}</S.CateName>
            <S.DeleteText onClick={() => setIsDeleteMode(true)}>삭제하기</S.DeleteText>
          </>
         ) : (
          <>
            <S.CateName>삭제할 재료를 선택해주세요</S.CateName>
            <S.ButtonContainer>
              <S.CancelButton onClick={handleCancel}>취소</S.CancelButton>
              <S.CompleteButton onClick={handleComplete}>완료</S.CompleteButton>
            </S.ButtonContainer>
          </>
        )}
      </S.CateHeader>
      <Slider {...settings}>
        {groupedItems.map((group, index) => (
          <div key={index}>
            <S.GridContainer>
              {group.map((item,index) => (
                <S.ItemContainer key={index}>
                  {item.ingredient_id === 0 ? (
                    <S.PlusImg 
                      src={item.picture} 
                      alt="plus"
                      onClick={() => {
                        navigate('/refrigerator/add-ingredient', { state: { value: category } });
                      }}
                    />
                  ) : (
                    <>
                      <S.ItemImageContainer onClick={() => isDeleteMode && handleItemClick(item.name)}>
                        <S.ItemImage src={item.picture} alt={item.name} $isDeleteMode={isDeleteMode} />
                        {isDeleteMode && !selectedItems.includes(item.name) && ( 
                          <S.DeleteImg src={minus} alt="minus" />
                        )}
                        {isDeleteMode && selectedItems.includes(item.name) && <S.RedOverlay />}
                      </S.ItemImageContainer>
                      <S.ItemText>{item.name}</S.ItemText>
                    </>
                  )}
                </S.ItemContainer>
              ))}
            </S.GridContainer>
          </div>
        ))}
      </Slider>
    </S.CateWrapper>
  );
}
