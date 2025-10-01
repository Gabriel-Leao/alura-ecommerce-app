import Typography from '../../components/Typography'
import Styles from './CartPage.module.css'

import { Product } from '../../common/types/product'
import CartSummary from '../../components/Cart/CartSummary'
import CartList from '../../components/Cart/CartList'

export type CartPageProps = {
  cartItems: Product[]
  removeFromCart: (id: number) => void
}

const CartPage = ({ cartItems, removeFromCart }: CartPageProps) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0)

  return (
    <main className='container'>
      <div className={Styles.cartTitle}>
        <Typography variant='h4'>Carrinho de Compras</Typography>
      </div>

      <section className={Styles.cartPage}>
        <div className={Styles.cartItems}>
          <Typography
            variantStyle='body-large-bold'
            className={Styles.cartItemTitle}>
            Detalhes da compra
          </Typography>
          <CartList
            removeFromCart={removeFromCart}
            cartItems={cartItems}
          />
        </div>
        <CartSummary
          total={total}
          cartItemsLength={cartItems.length}
        />
      </section>
    </main>
  )
}

export default CartPage
