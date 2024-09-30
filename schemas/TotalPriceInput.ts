import React from 'react';
import { useFormValue } from 'sanity';

interface BookingFormValues {
  numberOfDays: number;
  pricePerNight: number;
  discount: number;
}

const TotalPriceInput = React.forwardRef<HTMLInputElement, any>((props, ref) => {
  // Use type assertion to indicate the expected shape of the values
  const { numberOfDays, pricePerNight, discount } = useFormValue<BookingFormValues>([
    'numberOfDays', 
    'pricePerNight', 
    'discount'
  ]) || { numberOfDays: 0, pricePerNight: 0, discount: 0 }; // Default values

  // Calculate total price
  const totalPrice = (pricePerNight * numberOfDays) - discount;

  return (
    <div>
      <input
        type="number"
        value={Math.max(totalPrice, 0)} // Ensure total price is not negative
        readOnly
        ref={ref}
      />
    </div>
  );
});

export default TotalPriceInput;
