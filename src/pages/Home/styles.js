import styled from 'styled-components/native';
import {darken} from 'polished';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #191920;
`;

export const ProductList = styled.FlatList`
  margin-top: 50px;
`;

export const Product = styled.View`
  background: #fff;
  width: 300px;
  height: 442px;
  border-radius: 4px;
  padding: 20px;
  margin: 20px 10px 0px 10px;
`;

export const Image = styled.Image`
  height: 200px;
  width: 200px;
  align-self: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #333;
  margin-bottom: 5px;
`;
export const Price = styled.Text`
  font-size: 24px;
  color: #000;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ButtonAddToCart = styled.TouchableOpacity`
  background: #7159c1;
  color: #fff;
  width: 260px;
  height: 42px;
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
  margin-top: auto;
`;

export const ButtonAmount = styled.Text`
  color: #fff;
  font-weight: bold;
  align-items: center;
  padding: 10px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background: ${darken(0.04, '#7159c1')};
  margin-right: 5px;
`;

export const ButtonAmountText = styled.Text`
  font-size: 16px;
`;

export const ButtonAddToCartText = styled.Text`
  color: #fff;
  font-weight: bold;
  align-self: center;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
`;
