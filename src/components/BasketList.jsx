import { BasketItem } from './BasketItem';

function BasketList(props) {
	const {
		order = [],
		handleBasketShow = Function.prototype,
		removeFromBasket = Function.prototype,
		incQuantity,
		decQuantity,
	} = props;

	const totalPrice = order.reduce((sum, el) => {
		return sum + el.price * el.quantity;
	}, 0);

	return (
		<ul className='collection basket-list purple darken'>
			<li className='collection-item active purple darken'>Корзина</li>
			{order.length ? (
				order.map((item) => (
					<BasketItem
						key={item.mainId}
						removeFromBasket={removeFromBasket}
						incQuantity={incQuantity}
						decQuantity={decQuantity}
						{...item}
					/>
				))
			) : (
				<li className='collection-item'>Корзина пуста</li>
			)}
			<li className='collection-item active purple darken'>
				Общая стоимость: {totalPrice} руб.
			</li>
			<li className='collection-item'>
				<button className='btn btn-small purple darken-4'>Оформить</button>
			</li>
			<i
				className='material-icons basket-close'
				onClick={handleBasketShow}
			>
				Выйти
			</i>
		</ul>
	);
}

export { BasketList };