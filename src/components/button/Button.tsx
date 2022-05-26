import ButtonStyle from './Button.module.scss'
interface btnType {
    children: React.ReactNode,
    defaultStyle?: boolean,
    handleClick?: () => void,
}
const Button = ({children, defaultStyle, handleClick} : btnType ) => {
  return (
    <button onClick={handleClick} className={ButtonStyle.defaultBtn}>
      {children}
    </button>
  )
}

export default Button