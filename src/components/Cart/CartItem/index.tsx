import { Product } from '../../../common/types/product'
import Button from '../../Button'
import Typography from '../../Typography'
import Styles from './index.module.scss'

type CartItemProps = {
  item: Product
  removeFromCartFn: (id: number) => void
}

const CartItem = ({ item, removeFromCartFn }: CartItemProps) => {
  return (
    <div className={Styles.cartItem}>
      <div className={Styles.cartImageContainer}>
        <img
          src={item.imageSrc}
          alt={item.label}
        />
      </div>
      <div className={Styles.itemDetails}>
        <div>
          <Typography variantStyle='h6-small'>{item.label}</Typography>
          <Typography variantStyle='body'>{item.description}</Typography>
        </div>
        <Typography variantStyle='body-semi-bold'>R$ {item.price}</Typography>
        <Typography variantStyle='body-small-bold'>Quantidade: 1</Typography>
        <Typography variantStyle='body-small-bold'>Tamanho: único</Typography>
        <Button onClick={() => removeFromCartFn(item.id)}>Excluir</Button>
      </div>
    </div>
  )
}

export default CartItem
