import { CartPageProps } from '../../../pages/CartPage'
import CartEmptyMessage from '../CartEmptyMessage'
import CartItem from '../CartItem'

const CartList = ({ cartItems, removeFromCart }: CartPageProps) => {
  return (
    <>
      {cartItems?.length > 0 ? (
        cartItems.map((item) => (
          <CartItem
            item={item}
            removeFromCartFn={removeFromCart}
            key={item.id}
          />
        ))
      ) : (
        <CartEmptyMessage />
      )}
    </>
  )
}

export default CartList
