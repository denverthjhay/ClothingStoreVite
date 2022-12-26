import { useContext} from 'react';
import { Product } from '../../models';
import { ClothingShopContext } from '../Context';
import { ProductCard } from '../ProductCard';
import { ProductsWrapper, Title} from './Wishlist.styled';

export const Wishlist = () => {
const { saved } = useContext(ClothingShopContext);

  return (
    <>
      <Title>{saved.length} {saved.length > 1 ? "Items" : "Item"} in your wishlist currently</Title>
      <ProductsWrapper>
      {saved.map((product: Product, index) => (
          <ProductCard {...product} key={index} />
        ))}
      </ProductsWrapper>
    </>
  );
};