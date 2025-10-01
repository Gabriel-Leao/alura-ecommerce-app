import { ReactNode } from 'react'
import Input, { InputProps } from '../Input'
import Styles from './index.module.scss'

type IconInputProps = {
  children: ReactNode
} & InputProps

const IconInput = ({ children, ...props }: IconInputProps) => {
  return (
    <div className={Styles.iconInputContainer}>
      <Input {...props} />
      <div className={Styles.iconContainer}>{children}</div>
    </div>
  )
}

export default IconInput
