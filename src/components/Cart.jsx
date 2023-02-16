import React, {useContext} from 'react';
import { ShopContext } from '../context';

function Cart() {
	const { order, handleBasketShow = Function.prototype } = useContext(ShopContext);
	
	const quantity = order.length;
	
	return (
		<div
			className='cart purple darken white-text'
			onClick={handleBasketShow}
		>
			<i className='small material-icons'>shopping_cart</i>
			{quantity ? (
				<span className='cart-quantity'>{'(' + quantity + ')'}</span>
			) : '(0)'}
		</div>
	);
}

export { Cart };