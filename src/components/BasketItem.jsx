function BasketItem(props) {
    const {
        id,
		displayName,
        price,
        quantity,
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;
    return (
        <li className='collection-item'>
			{displayName}{' '}
            <i
				className='Tiny material-icons'
                onClick={() => decQuantity(id)}
            >
				arrow_downward
            </i>{' '}
            x{quantity}{' '}
            <i
				className='Tiny material-icons'
                onClick={() => incQuantity(id)}
            >
				arrow_upward
            </i>{' '}
            = {price * quantity} руб.
            <span
                className='secondary-content black-text'
                onClick={() => removeFromBasket(id)}
            >
				<i className='small material-icons'>delete</i>
            </span>
        </li>
    );
}

export { BasketItem };