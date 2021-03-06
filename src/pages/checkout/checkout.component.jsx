import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';
import CkeckoutItem from '../../components/checkout/checkout.component';
import StripeScheckoutButton from '../../components/stripe-button/stripe-button.component';

import {CheckoutPageContainer, CheckoutHeaderContainer, HeaderBlockContainer, TotalContainer} from './checkout.styles';

const CheckoutPage = ({cartItems, total}) => (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <HeaderBlockContainer>
                <span>Product</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Description</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Quantity</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Price</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Remove</span>
            </HeaderBlockContainer>
        </CheckoutHeaderContainer>
        {cartItems.map(cartItem => (<CkeckoutItem key={cartItem.id} cartItem={cartItem}/>))}
        <TotalContainer>
            <span>TOTAL = ${total}</span>
        </TotalContainer>
        <StripeScheckoutButton price={total}/>
    </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);