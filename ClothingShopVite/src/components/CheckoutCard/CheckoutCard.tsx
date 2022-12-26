import {
    ImageWrapper,
    InfoWrapper,
    SubTitle,
    TextContainer,
    Title,
    Wrapper,
  } from "./CheckoutCard.styled";
  
  import { Product } from "../../models";
  import { useContext} from "react";
  import { ClothingShopContext } from "../Context";
  
  export const CheckoutCard = ({ name, imageUrl, price, quantity }: Product) => {
 
    useContext(ClothingShopContext);
  
    return (
      <Wrapper>
        <InfoWrapper>
          <ImageWrapper background={imageUrl}></ImageWrapper>
          <TextContainer>
            <Title>{name}</Title>
            <SubTitle>Price per item: ₱ {price}.00</SubTitle>
            <SubTitle>Quantity: {quantity}</SubTitle>
            <SubTitle>Subtotal: ₱ {price * quantity}.00</SubTitle>
          </TextContainer>
        </InfoWrapper>
      </Wrapper>
    );
  };