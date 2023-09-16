// pages/add-customer.js
"use client";

import { useState } from "react";


export default function Page() {
  const [orderData, setorderData] = useState({
    invoices: "",
    totalAmount: "",
    dueDate:"",
    claimedBy: "",
    order:"",
    orderId:"",
    // OrderItem:"",
  });

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setorderData({
      ...orderData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      console.log("orderdata: " + JSON.stringify(orderData));
      // Create the new order by making a POST request to the API route
      const response = await fetch("/api/addOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        // Handle success, e.g., redirect to the order list page
        // You can use Next.js router or handle navigation as needed
      } else {
        // Handle error, e.g., display an error message to the user
        const errorData = await response.json();
        console.error("Error creating order:", errorData.error);
      }
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  return (
    <div  className="bg-white p-6 rounded-xl w-full md:w-fit  mt-14 sm:mt-0">
      <div  className="flex flex-col items-center sm:items-center w-full">
      <>
      <h1 className="text-2xl sm:text-3xl font-semibold mb-3 text-[#0630A0]">Add order</h1>
      <form onSubmit={handleSubmit} className="space-y-4 mt-6 w-full md:max-w-6xl lg:max-w-6xl">
        <div className="form-group flex gap-2  w-full">
          <label htmlFor="name" className="text-[#0630A0]">Invoices:</label>
          <input
            type="text"
            id="invoices"
            name="invoices"
            value={orderData.invoices}
            onChange={handleInputChange}
            required
            className="w-full form-control px-6 py-3 text-base font-normal  text-gray-700 bg-[#E3E8F1] bg-clip-padding border border-solid border-blue-100 rounded transition ease-in-out m-0
            focus:text-gray-700 focus:bg-[#E3E8F1] focus:border-[#FFC444] focus:outline-none"
          />
        </div>
        <div className="form-group flex gap-2  w-full">
          <label htmlFor="email" className="text-[#0630A0]" >TotalAmount:</label>
          <input
            type="email"
            id="totalAmount"
            name="totalAmount"
            value={orderData.totalAmount}
            onChange={handleInputChange}
            required
            className="w-full form-control px-6 py-3 text-base font-normal  text-gray-700 bg-[#E3E8F1] bg-clip-padding border border-solid border-blue-100 rounded transition ease-in-out m-0
            focus:text-gray-700 focus:bg-[#E3E8F1] focus:border-[#FFC444] focus:outline-none"
          />
        </div>
        <div className="form-group flex gap-2  w-full">
          <label htmlFor="phone" className="text-[#0630A0]">DueDate:</label>
          <input
            type="phone"
            id="dueDate"
            name="dueDate"
            value={orderData.dueDate}
            onChange={handleInputChange}
            required
            className="w-full form-control px-6 py-3 text-base font-normal  text-gray-700 bg-[#E3E8F1] bg-clip-padding border border-solid border-blue-100 rounded transition ease-in-out m-0
            focus:text-gray-700 focus:bg-[#E3E8F1] focus:border-[#FFC444] focus:outline-none"
          />
        </div>
        <div className="form-group flex gap-2  w-full">
          <label htmlFor="address" className="text-[#0630A0]" >claimed By:</label>
          <input
            type="address"
            id="claimedBy"
            name="claimedBy"
            value={orderData.claimedBy}
            onChange={handleInputChange}
            required
            className="w-full form-control px-6 py-3 text-base font-normal  text-gray-700 bg-[#E3E8F1] bg-clip-padding border border-solid border-blue-100 rounded transition ease-in-out m-0
            focus:text-gray-700 focus:bg-[#E3E8F1] focus:border-[#FFC444] focus:outline-none"
          />
        </div>
        <div className="form-group flex gap-2  w-full">
          <label htmlFor="address" className="text-[#0630A0]" >Order:</label>
          <input
            type="address"
            id="order"
            name="order"
            value={orderData.order}
            onChange={handleInputChange}
            required
            className="w-full form-control px-6 py-3 text-base font-normal  text-gray-700 bg-[#E3E8F1] bg-clip-padding border border-solid border-blue-100 rounded transition ease-in-out m-0
            focus:text-gray-700 focus:bg-[#E3E8F1] focus:border-[#FFC444] focus:outline-none"
          />
        </div>
        <div className="form-group flex gap-2  w-full">
          <label htmlFor="address" className="text-[#0630A0]" >orderId:</label>
          <input
            type="text"
            id="orderId"
            name="orderId"
            value={orderData.orderId}
            onChange={handleInputChange}
            required
            className="w-full form-control px-6 py-3 text-base font-normal  text-gray-700 bg-[#E3E8F1] bg-clip-padding border border-solid border-blue-100 rounded transition ease-in-out m-0
            focus:text-gray-700 focus:bg-[#E3E8F1] focus:border-[#FFC444] focus:outline-none"
          />
        </div>
        
        {/* Add other order fields as needed */}
        <div className="flex gap-5 ">
          <button
            type="submit"
            className="bg-[#0630A0] font-medium text-white w-full p-2 rounded-lg"
          >
            Add order
          </button>
        </div>
      </form>
      </>
      </div>
    </div>
  );
}

// export default AddorderPage;
