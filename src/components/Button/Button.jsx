import styles from "./Button.module.css"

const Button = (props) => {
  return (
    <>
        <button className={props.isLogin ? styles.login_btn : styles.shop_btn}>
          {props.text}
        </button> 
    </>
  )
}

export default Button
