import React from 'react';

const DealerInfoCard = ({ dealer, onClose }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 relative">
      <button 
        onClick={onClose} 
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
      >
        ✕
      </button>
      <h2 className="text-2xl font-bold mb-4">{dealer.name}</h2>
      
      <div className="space-y-3">
        <div>
          <h3 className="font-semibold">Address</h3>
          <p>{dealer.address.street}</p>
          <p>{dealer.address.city}, {dealer.address.state} {dealer.address.zipCode}</p>
        </div>
        
        <div>
          <h3 className="font-semibold">Contact</h3>
          <p>Phone: {dealer.contact.phone}</p>
          {dealer.contact.email && <p>Email: {dealer.contact.email}</p>}
        </div>
        
        <div>
          <h3 className="font-semibold">Vehicle Types</h3>
          {dealer.vehicleTypes.map((type, index) => (
            <div key={index}>
              <p>{type.type.toUpperCase()} Vehicles</p>
              <p className="text-sm text-gray-600">
                Brands: {type.brands.join(', ')}
              </p>
            </div>
          ))}
        </div>
        
        {dealer.availableProducts && (
          <div>
            <h3 className="font-semibold">Available Products</h3>
            <p>{dealer.availableProducts.join(', ')}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DealerInfoCard;