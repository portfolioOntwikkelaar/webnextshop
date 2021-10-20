import { FC } from "react"
import style from './Swatch.module.css'
import { Check } from "@components/icons"
import cn from 'classnames'
import { isDark } from "@lib/color"

interface Props {
  color?: string
  label?: string
  active?: boolean
  variant?: "size" | "color" | string
  onClick: () => void
}

const Swatch: FC<Props> = ({color, label, variant, active, ...rest}) => {

  label = label?.toLowerCase()
  variant = variant.toLocaleLowerCase()

  const rootClassName = cn(
    style.roots,
    {
      [style.active]: active,
      [style.color]: color,
      [style.size]: variant === "size",
      [style.dark]: color && isDark(color)
    }
  )
  return (
    <button 
      style={color ? {backgroundColor: color} : {}}
      className={rootClassName}
      {...rest}
      >
        { variant === "color" && active && 

          <span>
          <Check />
        </span>
        }
        { variant === "size" ? label : null }

    
    </button>
  )
}

export default Swatch