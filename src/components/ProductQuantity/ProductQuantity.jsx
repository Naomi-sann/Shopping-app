import { useDispatch, useSelector } from "react-redux";
import {
  QuantityContainer,
  QuantityButton,
  QuantityCounter,
} from "../../styles/Elements/CartPageElements.styled";
import { FaPlus, FaMinus } from "react-icons/fa";
import { setQuantity } from "../../redux/user/userSlice";

const ProductQuantity = ({ productID, rounded, outline, stretch }) => {
  const userAcc = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

  const product = userAcc.cart.items.find((i) => i.id === productID);

  const quantityHandler = (actionType) => {
    const { quantity } = product;
    switch (actionType) {
      case "add":
        if (quantity < 100) {
          const newValue = quantity + 1;
          dispatch(setQuantity({ itemId: product.id, newQuantity: newValue }));
        }
        break;
      case "minus":
        if (quantity > 1) {
          const newValue = quantity - 1;

          dispatch(setQuantity({ itemId: product.id, newQuantity: newValue }));
        }
        break;
      default:
        console.error("action type not found");
    }
  };

  return (
    <QuantityContainer stretch={stretch}>
      <QuantityButton
        onClick={() => quantityHandler("minus")}
        dir="left"
        outline={outline}
        rounded={rounded}>
        <FaMinus />
      </QuantityButton>
      <QuantityCounter>
        <h2>{product ? product.quantity : "..."}</h2>
      </QuantityCounter>
      <QuantityButton
        onClick={() => quantityHandler("add")}
        dir="right"
        outline={outline}
        rounded={rounded}>
        <FaPlus />
      </QuantityButton>
    </QuantityContainer>
  );
};

export default ProductQuantity;
