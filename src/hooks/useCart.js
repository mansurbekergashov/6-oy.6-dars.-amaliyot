import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { calculateTotals } from '../store/cartSlice';

export const useCart = () => {
  const dispatch = useDispatch();
  const { cart, totalAmount, totalPrice } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(calculateTotals());
    localStorage.setItem("cart", JSON.stringify({ cart, totalAmount, totalPrice }));
  }, [cart, dispatch]);

  return {
    cart,
    totalAmount,
    totalPrice,
    dispatch,
  };
};