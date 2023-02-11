function Cart(props) {
	const { quantity = 0, handleBasketShow = Function.prototype } = props;
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