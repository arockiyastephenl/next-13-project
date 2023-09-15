// components/OrderDetail.tsx

import React from 'react';

interface OrderDetailProps {
  order: {
    id: number;
    customerId: number;
    // Add other order fields here
  };
  customer: {
    id: number;
    name: string;
    // Add other customer fields here
  };
  orderItems: {
    id: number;
    productId: number;
    quantity: number;
    price: number;
    // Add other order item fields here
  }[];
}

const OrderDetail: React.FC<OrderDetailProps> = ({ order, customer, orderItems }) => {
  return (
    <div>
      <h2>Order Details</h2>
      <p><strong>Order ID:</strong> {order.id}</p>
      <p><strong>Customer:</strong> {customer.name}</p>

      <h3>Order Items:</h3>
      <ul>
        {orderItems.map((item) => (
          <li key={item.id}>
            <p><strong>Product ID:</strong> {item.productId}</p>
            <p><strong>Quantity:</strong> {item.quantity}</p>
            <p><strong>Price:</strong> ${item.price}</p>
          </li>
        ))}
      </ul>

      {/* Add other order details as needed */}
    </div>
  );
};

export default OrderDetail;
