import "./Button.module.css";

const Button = (props) => {
  return (
    <div className="btn_class">
        <button className="shop">{props.text}</button> 
    </div>
  )
}

export default Button
