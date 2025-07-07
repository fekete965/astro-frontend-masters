/** @jsxImportSource react */

import { addItemToCart } from '../../stores/cart';

type AddCartProps = {
	item: ShopItem;
};

export const AddToCart = ({ item }: AddCartProps) => {
	return (
		<button className="big-link" onClick={() => addItemToCart(item)}>
			Add To Cart
		</button>
	);
};
