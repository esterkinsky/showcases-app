function GoodsItem(props) {
    const {
		mainId,
        name,
        price,
		displayAssets,
        addToBasket = Function.prototype,
    } = props;

	const busketPrice = price.regularPrice;

    return (
        <div className='card'>
            <div className='card-image'>
				<img src={displayAssets[0].full_background} alt={name} />
            </div>
            <div className='card-action'>
                <button 
					className='btn purple darken'
                    onClick={() =>
                        addToBasket({
                            mainId,
                            name,
							price: busketPrice,
                        })
                    }
                >
                    Купить
                </button>
                <span className='right' style={{ fontSize: '1.8rem' }}>
					{busketPrice} руб.
                </span>
            </div>
        </div>
    );
}

export { GoodsItem };