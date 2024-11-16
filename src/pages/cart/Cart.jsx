import "./cart.css";
import Steps from "../../components/Steps"
import CartComponent from "../../components/cart/CartComponent"

const Cart = () => {
  //const [searchParams] = useSearchParams();
  //const productId = searchParams.get("productId");


  return (
    <div style={{ color: "#005256",paddingTop:"3rem" }}>
      <Steps stepsColor={[1]}/>
      <CartComponent />
    </div>
  );
};

export default Cart;
