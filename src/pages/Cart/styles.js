import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #191920;
`;
export const Products = styled.View`
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  margin: 70px 15px 0;
`;
export const Product = styled.View`
  background: #fff;
  width: 100%;
  margin-top: 5px;
  border-radius: 4px;
  padding: 10px;
  /* margin: 20px 10px 0px 10px; */
`;

export const ProductInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductImage = styled.Image`
  width: 90px;
  height: 90px;
`;

export const ProductDetail = styled.View`
  flex: 1;
  padding: 10px;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: #333;
`;
export const Price = styled.Text`
  margin-top: 5px;
  font-size: 18px;
  color: #000;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ProductRemove = styled.TouchableOpacity`
  padding: 5px;
`;

export const ProductControls = styled.View`
  flex-direction: row;
  align-items: center;
  background: #eee;
  padding: 5px;
  border-radius: 4px;
`;
export const ProductControlButton = styled.TouchableOpacity``;

export const ProductControlAmount = styled.TextInput.attrs({
  readonly: true,
  disabled: true,
})`
  background: #fff;
  padding: 5px;
  margin: 0 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 52px;
  text-align: center;
`;

export const ProductSubtotal = styled.Text`
  font-weight: bold;
  font-size: 16px;
  flex: 1;
  text-align: right;
`;

export const TotalFooterContainer = styled.View`
  flex: 1;
  padding: 10px;
  background: #fff;
  /* border-radius: 4px; */
  /* margin: 0px 15px 0; */
`;
export const TotalText = styled.Text`
  color: #999;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
`;
export const TotalPrice = styled.Text`
  color: #333;
  font-size: 32px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
`;
export const ButtonOrder = styled.TouchableOpacity`
  margin-top: 30px;
  background: #7159c1;
  padding: 12px;
  border-radius: 4px;
`;
export const ButtonOrderText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;
`;

export const EmptyContainer = styled.View`
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  margin: 70px 15px 0;
  align-items: center;
  justify-content: center;
`;

export const EmptyText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-top: 18px;
`;
