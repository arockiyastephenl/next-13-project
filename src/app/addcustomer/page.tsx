// pages/add-customer.js
"use client";

import { useState } from "react";
import { redirect } from "next/navigation"


export default function Page() {
  const [customerData, setCustomerData] = useState({
    name: "",
    email: "",
    phone:"",
    address: "",
  });

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setCustomerData({
      ...customerData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      console.log("Customerdata: " + JSON.stringify(customerData));
      // Create the new customer by making a POST request to the API route
      const response = await fetch("/api/addCustomer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(customerData),
      });

      if (response.ok) {
      redirect("/")
      } else {
        // Handle error, e.g., display an error message to the user
        const errorData = await response.json();
        console.error("Error creating customer:", errorData.error);
      }
    } catch (error) {
      console.error("Error creating customer:", error);
    }
  };

  return (
    <div  className="bg-white p-6 rounded-xl w-full md:w-fit  mt-14 sm:mt-0">
      <div  className="flex flex-col items-center sm:items-center w-full">
      <>
      <h1 className="text-2xl sm:text-3xl font-semibold mb-3 text-[#0630A0]">Add Customer</h1>
      <form onSubmit={handleSubmit} className="space-y-4 mt-6 w-full md:max-w-6xl lg:max-w-6xl">
        <div className="form-group flex gap-2  w-full">
          <label htmlFor="name" className="text-[#0630A0]">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={customerData.name}
            onChange={handleInputChange}
            required
            className="w-full form-control px-6 py-3 text-base font-normal  text-gray-700 bg-[#E3E8F1] bg-clip-padding border border-solid border-blue-100 rounded transition ease-in-out m-0
            focus:text-gray-700 focus:bg-[#E3E8F1] focus:border-[#FFC444] focus:outline-none"
          />
        </div>
        <div className="form-group flex gap-2  w-full">
          <label htmlFor="email" className="text-[#0630A0]" >Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={customerData.email}
            onChange={handleInputChange}
            required
            className="w-full form-control px-6 py-3 text-base font-normal  text-gray-700 bg-[#E3E8F1] bg-clip-padding border border-solid border-blue-100 rounded transition ease-in-out m-0
            focus:text-gray-700 focus:bg-[#E3E8F1] focus:border-[#FFC444] focus:outline-none"
          />
        </div>
        <div className="form-group flex gap-2  w-full">
          <label htmlFor="phone" className="text-[#0630A0]">phone:</label>
          <input
            type="phone"
            id="phone"
            name="phone"
            value={customerData.phone}
            onChange={handleInputChange}
            required
            className="w-full form-control px-6 py-3 text-base font-normal  text-gray-700 bg-[#E3E8F1] bg-clip-padding border border-solid border-blue-100 rounded transition ease-in-out m-0
            focus:text-gray-700 focus:bg-[#E3E8F1] focus:border-[#FFC444] focus:outline-none"
          />
        </div>
        <div className="form-group flex gap-2  w-full">
          <label htmlFor="address" className="text-[#0630A0]" >Address:</label>
          <input
            type="address"
            id="address"
            name="address"
            value={customerData.address}
            onChange={handleInputChange}
            required
            className="w-full form-control px-6 py-3 text-base font-normal  text-gray-700 bg-[#E3E8F1] bg-clip-padding border border-solid border-blue-100 rounded transition ease-in-out m-0
            focus:text-gray-700 focus:bg-[#E3E8F1] focus:border-[#FFC444] focus:outline-none"
          />
        </div>
        {/* Add other customer fields as needed */}
        <div className="flex gap-5 ">
          <button
            type="submit"
            className="bg-[#0630A0] font-medium text-white w-full p-2 rounded-lg"
          >
            Add Customer
          </button>
        </div>
      </form>
      </>
      </div>
    </div>
  );
}

// export default AddCustomerPage;
