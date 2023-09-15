"use client";
import { useState } from 'react';
export function CreateOrderPage() {
  const [orderData, setorderData] = useState({
    name: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setorderData({
      ...orderData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      console.log("orderdata: " + JSON.stringify(orderData));
      // Create the new order by making a POST request to the API route
      const response = await fetch('/api/addorder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        // Handle success, e.g., redirect to the order list page
        // You can use Next.js router or handle navigation as needed
      } else {
        // Handle error, e.g., display an error message to the user
        const errorData = await response.json();
        console.error('Error creating order:', errorData.error);
      }
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };

  
  

  return (
    <div className='flex flex-col sm:items-center w-full'>
      <h1>Add order</h1>
      <form onSubmit={handleSubmit}>
        <div className='flex'>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={orderData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={orderData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* Add other order fields as needed */}
        <div>
          <button type="submit">Add order</button>
        </div>
      </form>
    </div>
  );
}

// export default AddCustomerPage;
