import Slider from "../../container/Slider/Slider";
import { ImageContainer } from "./ProductOverviewStyles.styled";
import Price from "../../components/Price/Price";
import Stars from "../../components/common/Product/Stars";
import ItemColors from "../../components/ItemColors/ItemColors";
import ItemDescription from "../../components/ItemDescription/ItemDescription";
import AddItemButton from "../../components/AddItemButton/AddItemButton";
import { firstLetterUpperCase } from "../../utils/appUtils";
import SliderImages from "../../components/SliderImages/SliderImages";
import { useState } from "react";

const ContentContainer = ({ item, colorsState, handleColorClick }) => {
  const { id, shoe, type, price, priceType, shoeImages, itemStars } = item;
  const { color } = colorsState.find((c) => c.active) ?? colorsState[0];

  const [slider, setSlider] = useState(null);

  return (
    <div className="page-content-container">
      <div className="item-details-container">
        <div className="slider-container">
          <div className="slider-image-container">
            <Slider
              items={shoeImages.map((shoeImage, idx) => ({
                id: "slide-" + idx,
                innerElement: (
                  <ImageContainer>
                    <img
                      src={shoeImage}
                      alt="shoe"
                      className="item-img"
                      draggable="false"
                    />
                  </ImageContainer>
                ),
              }))}
              setSlider={setSlider}
              touchable
            />
          </div>
          <SliderImages images={shoeImages} slider={slider} />
        </div>
        <section className="item-details-section">
          <h1 className="item-title">{firstLetterUpperCase(shoe ?? type)}</h1>
          <div className="item-rates">
            <Price price={price} priceType={priceType} fontSize="27.5px" />
            <Stars filledStars={itemStars} />
          </div>
          {colorsState && (
            <ItemColors
              colors={colorsState}
              handleColorClick={handleColorClick}
            />
          )}
          <ItemDescription style={{ marginTop: "1rem" }}>
            A great, awesome-designed and comfortable shoe that fits your feet
            and makes you feel motivated and ready to go for work out. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Aliquam, nostrum.
            Nam dignissimos tenetur amet vel, non sed quidem id provident.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Recusandae, temporibus? Eaque alias, eum adipisci incidunt omnis rem
            officiis obcaecati unde.
          </ItemDescription>
          <div className="add-item-button-container">
            <AddItemButton
              itemId={id}
              itemColor={color}
              text="Add item"
              activeText="Remove item"
              style={{
                height: "45px",
                width: "100%",
                fontSize: "22.5px",
              }}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContentContainer;
