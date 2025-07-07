import { computed, map } from 'nanostores';

type Cart = Record<number, CartItem | undefined>;

export const $cart = map<Cart>({});

export function addItemToCart(item: ShopItem) {
	const cartItem = $cart.get()[item.id];

	const quantity = cartItem ? cartItem.quantity : 0;

	$cart.setKey(item.id, {
		item,
		quantity: quantity + 1,
	});
}

export function removeItemFromCard(entry: CartItem) {
	$cart.setKey(entry.item.id, undefined);
}

export const $subtotal = computed($cart, (entries) => {
	const sum = Object.values(entries).reduce<number>((acc, item) => {
		if (item == null) {
			return acc;
		}

		return acc + item.quantity * item.item.price;
	}, 0);

	return sum;
});
