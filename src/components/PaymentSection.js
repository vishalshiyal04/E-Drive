import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const PaymentSection = () => {
  const location = useLocation();
  const vehicle = location.state?.vehicle;

  const [selectedPayment, setSelectedPayment] = useState("");
  const [address, setAddress] = useState({
    houseNo: "",
    streetName: "",
    city: "",
    state: "",
    postalCode: "",
  });

  const [isAddressSubmitted, setIsAddressSubmitted] = useState(false);
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmitAddress = () => {
    const { houseNo, streetName, city, state, postalCode } = address;
    if (
      houseNo.trim() &&
      streetName.trim() &&
      city.trim() &&
      state.trim() &&
      postalCode.trim()
    ) {
      setIsAddressSubmitted(true);
    } else {
      alert("Please fill out all address fields.");
    }
  };

  const handleEditAddress = () => {
    setIsAddressSubmitted(false);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 border rounded-lg shadow-md bg-white">
      {/* 📅 Date and Time */}
      <div className="text-right text-sm text-gray-600 mb-4">
        {dateTime.toLocaleDateString()}{" "}
        {dateTime.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })}
      </div>

      {/* 🚗 Vehicle Details + Delivery Address Side by Side */}
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        {/* Vehicle Details */}
        {vehicle && (
          <div className="w-full md:w-1/2 flex items-center gap-4 border rounded p-4 bg-gray-50">
            <img
              src={vehicle.image}
              alt={vehicle.name}
              className="w-36 h-28 object-cover rounded border"
            />
            <div>
              <h2 className="text-xl font-semibold">{vehicle.name}</h2>
              <p className="text-green-600 font-medium text-lg">
                ₹{vehicle.price?.toLocaleString()}
              </p>
            </div>
          </div>
        )}

        {/* 🏠 Delivery Address */}
        <div className="w-full md:w-1/2">
          <h2 className="font-semibold text-lg">1. Delivery address</h2>
          {!isAddressSubmitted ? (
            <div className="mt-2">
              <input
                type="text"
                name="houseNo"
                value={address.houseNo}
                onChange={handleAddressChange}
                placeholder="House No."
                className="mt-1 p-2 border rounded w-full"
              />
              <input
                type="text"
                name="streetName"
                value={address.streetName}
                onChange={handleAddressChange}
                placeholder="Street Name"
                className="mt-2 p-2 border rounded w-full"
              />
              <input
                type="text"
                name="city"
                value={address.city}
                onChange={handleAddressChange}
                placeholder="City"
                className="mt-2 p-2 border rounded w-full"
              />
              <input
                type="text"
                name="state"
                value={address.state}
                onChange={handleAddressChange}
                placeholder="State"
                className="mt-2 p-2 border rounded w-full"
              />
              <input
                type="text"
                name="postalCode"
                value={address.postalCode}
                onChange={handleAddressChange}
                placeholder="Postal Code"
                className="mt-2 p-2 border rounded w-full"
              />
              <button
                onClick={handleSubmitAddress}
                className="bg-blue-600 text-white text-sm mt-3 px-4 py-2 rounded hover:bg-blue-700"
              >
                Add Address
              </button>
            </div>
          ) : (
            <div className="mt-4 text-gray-700 p-4 border rounded bg-gray-50">
              <div className="flex justify-between items-start">
                <div>
                  <p>
                    {address.houseNo}, {address.streetName}
                  </p>
                  <p>
                    {address.city}, {address.state} - {address.postalCode}
                  </p>
                </div>
                <button
                  onClick={handleEditAddress}
                  className="text-blue-600 text-sm hover:underline"
                >
                  Edit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 💳 Payment Options */}
      <div>
        <h2 className="font-semibold text-lg text-orange-600">
          2. Select a payment method
        </h2>

        <div className="mt-4 space-y-6">
          {/* Available Balance */}
          <div className="border p-4 rounded-md bg-gray-50">
            <label className="flex items-center space-x-2">
              <input type="checkbox" />
              <span className="text-gray-700">
                Use Vouchers Code*
              </span>
            </label>
            <div className="flex items-center mt-3 space-x-2">
              <input
                type="text"
                placeholder="Enter Code"
                className="border p-1 rounded w-1/2"
              />
              <button className="bg-gray-100 px-4 py-1 border rounded hover:bg-gray-200">
                Apply
              </button>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="space-y-4">
            <label className="flex items-center space-x-3">
              <input
                type="radio"
                name="payment"
                onChange={() => setSelectedPayment("card")}
                checked={selectedPayment === "card"}
              />
              <div>
                <span className="font-medium">Credit or debit card</span>
                <div className="flex space-x-2 mt-1">
                  <img
                    src="https://img.icons8.com/color/32/visa.png"
                    alt="Visa"
                  />
                  <img
                    src="https://img.icons8.com/color/32/mastercard.png"
                    alt="Mastercard"
                  />
                  <img
                    src="https://img.icons8.com/color/32/amex.png"
                    alt="Amex"
                  />
                  <img
                    src="https://img.icons8.com/color/32/maestro.png"
                    alt="Maestro"
                  />
                  <img
                    src="https://img.icons8.com/color/32/rupay.png"
                    alt="Rupay"
                  />
                </div>
              </div>
            </label>

            <label className="flex items-center space-x-3">
              <input
                type="radio"
                name="payment"
                onChange={() => setSelectedPayment("netbanking")}
                checked={selectedPayment === "netbanking"}
              />
              <div className="flex flex-col">
                <span className="font-medium">Net Banking</span>
                <select className="mt-1 border rounded p-1 w-48">
                  <option>Choose an Option</option>
                  <option>SBI</option>
                  <option>HDFC</option>
                  <option>ICICI</option>
                </select>
              </div>
            </label>

            <label className="flex items-center space-x-3">
              <input
                type="radio"
                name="payment"
                onChange={() => setSelectedPayment("upi")}
                checked={selectedPayment === "upi"}
              />
              <span className="font-medium">Other UPI Apps</span>
            </label>

            <label className="flex items-center space-x-3">
              <input
                type="radio"
                name="payment"
                onChange={() => setSelectedPayment("emi")}
                checked={selectedPayment === "emi"}
              />
              <span className="font-medium">EMI</span>
            </label>

            <label className="flex items-center space-x-3 text-gray-400 cursor-not-allowed">
              <input type="radio" disabled />
              <span className="font-medium">
                Cash on Delivery/Pay on Delivery (Unavailable)
              </span>
            </label>
          </div>

          <button className="mt-4 bg-yellow-400 hover:bg-yellow-500 px-6 py-2 rounded text-sm font-medium">
            Use this payment method
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSection;