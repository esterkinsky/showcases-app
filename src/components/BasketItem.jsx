import React, { useContext } from 'react';
import { ShopContext } from '../context';

function BasketItem(props) {
	const {
		itemId,
		displayName,
		price,
		quantity,
	} = props;

	const { removeFromBasket, incQuantity, decQuantity } = useContext(ShopContext);

	return (
		<li className='collection-item'>
			{displayName}{' '}
			<i
				className='Tiny material-icons'
				onClick={() => decQuantity(itemId)}
			>
				arrow_downward
			</i>{' '}
			x{quantity}{' '}
			<i
				className='Tiny material-icons'
				onClick={() => incQuantity(itemId)}
			>
				arrow_upward
			</i>{' '}
			= {price * quantity} руб.
			<span
				className='secondary-content black-text'
				onClick={() => removeFromBasket(itemId)}
			>
				<i className='small material-icons'>delete</i>
			</span>
		</li>
	);
}

export { BasketItem };