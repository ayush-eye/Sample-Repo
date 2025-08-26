import Button from "../Button/Button";
import styles from "./Content.module.css";
const Content = () => {
  return (
    <>
    <div className={styles.content}>
        <h1>YOUR FEET DESERVE THE BEST</h1>

        <h3>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</h3>
      <div className="button">
      <Button text="SHOP"/>
      <Button text="CATEGORY"/>
      </div>
      <img src="./images/shoe_image.png"></img>
    </div>
    </>
  )
}

export default Content
