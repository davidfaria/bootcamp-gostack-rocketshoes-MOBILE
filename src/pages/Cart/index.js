import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CurrencyFormat from 'react-currency-format';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ScrollView, TouchableHighlight} from 'react-native';
import {
  Container,
  Products,
  Product,
  ProductInfo,
  ProductImage,
  ProductDetail,
  Title,
  Price,
  ProductRemove,
  ProductControls,
  ProductControlButton,
  ProductControlAmount,
  ProductSubtotal,
  TotalFooterContainer,
  TotalText,
  TotalPrice,
  ButtonOrder,
  ButtonOrderText,
  EmptyContainer,
  EmptyText,
} from './styles';

import * as CartActions from '../../store/modules/cart/actions';

function Cart({products, total, updateAmountRequest, removeFromCart}) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  function renderProduct(product) {
    return (
      <Product key={String(product.id)}>
        <ProductInfo>
          <ProductImage
            alt={product.title}
            source={{
              uri: product.image,
            }}
          />
          <ProductDetail>
            <Title>{product.title}</Title>
            <CurrencyFormat
              value={product.price}
              displayType="text"
              thousandSeparator="."
              prefix="R$"
              decimalSeparator=","
              decimalScale={2}
              fixedDecimalScale
              renderText={value => <Price>{value}</Price>}
            />
          </ProductDetail>
          <ProductRemove onPress={() => removeFromCart(product.id)}>
            <Icon name="delete-forever" size={24} color="#7159c1" />
          </ProductRemove>
        </ProductInfo>

        <ProductControls>
          <ProductControlButton onPress={() => decrement(product)}>
            <Icon name="remove-circle-outline" size={24} color="#7159c1" />
          </ProductControlButton>
          <ProductControlAmount
            keyboardType="numeric"
            value={String(product.amount)}
          />
          <ProductControlButton onPress={() => increment(product)}>
            <Icon name="add-circle-outline" size={24} color="#7159c1" />
          </ProductControlButton>
          <ProductSubtotal>
            <CurrencyFormat
              value={product.subtotal}
              displayType="text"
              thousandSeparator="."
              prefix="R$"
              decimalSeparator=","
              decimalScale={2}
              fixedDecimalScale
              renderText={value => <Price>{value}</Price>}
            />
          </ProductSubtotal>
        </ProductControls>
      </Product>
    );
  }

  function renderTotal() {
    return (
      <TotalFooterContainer>
        <TotalText>Total</TotalText>

        <CurrencyFormat
          value={total}
          displayType="text"
          thousandSeparator="."
          prefix="R$"
          decimalSeparator=","
          decimalScale={2}
          fixedDecimalScale
          renderText={value => <TotalPrice>{value}</TotalPrice>}
        />

        <ButtonOrder>
          <ButtonOrderText>Finalizar Pedido</ButtonOrderText>
        </ButtonOrder>
      </TotalFooterContainer>
    );
  }

  return (
    <Container>
      <ScrollView>
        {products.length ? (
          <Products>
            {products.map(product => renderProduct(product))}
            {renderTotal()}
          </Products>
        ) : (
          <EmptyContainer>
            <Icon name="remove-shopping-cart" size={64} color="#eee" />
            <EmptyText>Seu carrinho está vazio.</EmptyText>
          </EmptyContainer>
        )}
      </ScrollView>
    </Container>
  );
}

const mapStateToProps = state => ({
  products: state.cart.map(product => ({
    ...product,
    subtotal: product.price * product.amount,
  })),
  total: state.cart.reduce(
    (total, product) => total + product.price * product.amount,
    0,
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
