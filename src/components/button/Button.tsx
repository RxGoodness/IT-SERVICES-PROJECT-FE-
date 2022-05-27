import ButtonStyle from './Button.module.scss'
interface btnType {
    children: React.ReactNode,
    secondaryStyle?: boolean,
    handleClick?: () => void,
}
const Button = ({children, secondaryStyle, handleClick} : btnType ) => {
  return (
    <button onClick={handleClick} className={ secondaryStyle ? ButtonStyle.secondarybtn : ButtonStyle.defaultBtn}>
      {children}
    </button>
  )
}

export default Button