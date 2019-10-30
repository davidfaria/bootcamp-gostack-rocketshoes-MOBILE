import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CurrencyFormat from 'react-currency-format';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  ProductList,
  Product,
  Image,
  Title,
  Price,
  ButtonAddToCart,
  ButtonAmount,
  ButtonAmountText,
  ButtonAddToCartText,
} from './styles';

import api from '../../services/api';
// import {formatPrice} from '../../util/format';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    const res = await api.get('products');

    const data = res.data.map(product => ({
      ...product,
      // priceFormatted: formatPrice(product.price),
    }));
    this.setState({
      products: data,
    });
  }

  handleAddProduct(id) {
    const {addToCartRequest} = this.props;
    addToCartRequest(id);
  }

  render() {
    const {products} = this.state;
    const {navigation, amount} = this.props;
    return (
      <Container>
        <ProductList
          data={products}
          keyExtractor={product => String(product.id)}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <Product>
              <Image
                alt="Tenis"
                source={{
                  uri: item.image,
                }}
              />
              <Title>{item.title}</Title>

              <CurrencyFormat
                value={item.price}
                displayType="text"
                thousandSeparator="."
                prefix="R$"
                decimalSeparator=","
                decimalScale={2}
                fixedDecimalScale
                renderText={value => <Price>{value}</Price>}
              />

              {/* <Price>{item.priceFormatted}</Price> */}

              <ButtonAddToCart onPress={() => this.handleAddProduct(item.id)}>
                <ButtonAmount>
                  <Icon name="add-shopping-cart" size={16} color="#fff" />
                  <ButtonAmountText>{amount[item.id] || 0}</ButtonAmountText>
                </ButtonAmount>

                <ButtonAddToCartText>Adicionar ao carrinho</ButtonAddToCartText>
              </ButtonAddToCart>
            </Product>
          )}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount || 0;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
