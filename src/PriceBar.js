import React, { useState } from "react";

const PriceBar = ({ onPriceChange, productList }) => {
  const [priceRange, setPriceRange] = useState([0, 9999]);
  const [inStockOnly, setInStockOnly] = useState(false);

  const handlePriceChange = (e, index) => {
    const newRange = [...priceRange];
    newRange[index] = Number(e.target.value);
    if (newRange[0] > newRange[1]) return; // Prevent invalid ranges
    setPriceRange(newRange);
  };

  const handleStockChange = () => {
    setInStockOnly(!inStockOnly);
  };

  const applyFilters = () => {
    onPriceChange(priceRange, inStockOnly);
  };

  const clearFilters = () => {
    setPriceRange([0, 9999]);
    setInStockOnly(false);
    onPriceChange([0, 9999], false);
  };

  const inStockCount = productList.filter(
    (product) =>
      product.newprice >= priceRange[0] &&
      product.newprice <= priceRange[1] &&
      product.inStock
  ).length;

  const filteredProducts = productList.filter(
    (product) =>
      product.newprice >= priceRange[0] &&
      product.newprice <= priceRange[1] &&
      (!inStockOnly || product.inStock)
  );

  return (
    <div className="p-4 bg-white w-55">
      {/* Header */}
      <div className="flex justify-between items-center text-sm font-semibold border-b pb-2">
        <span className="uppercase text-gray-900">Refined By</span>
        <button className="text-gray-500 underline text-xs" onClick={clearFilters}>
          Clear All
        </button>
      </div>

      {/* Selected Price Range */}
      <div className="bg-gray-100 text-gray-700 text-sm p-2 mt-2 flex justify-between rounded-md">
        <span>Rs.{priceRange[0]}.00 - Rs.{priceRange[1]}.00</span>
        <button className="text-gray-600 text-xs" onClick={clearFilters}>✖</button>
      </div>

      {/* Availability Checkbox */}
      <div className="mt-4 border-t pt-2">
        <h3 className="text-sm font-semibold">AVAILABILITY</h3>
        <div className="flex items-center space-x-2 mt-1">
          <input type="checkbox" checked={inStockOnly} onChange={handleStockChange} />
          <label className="text-sm">In Stock ({inStockCount})</label>
        </div>
      </div>

      {/* Price Filter */}
      <div className="mt-4 border-t pt-2">
        <h3 className="text-sm font-semibold uppercase">Price</h3>
        <div className="relative mt-3">
          {/* Range Slider */}
          <div className="relative w-[155px] h-1 bg-gray-300 rounded-md">
            <div
              className="absolute h-1 bg-black rounded-md"
              style={{
                left: `${(priceRange[0] / 9999) * 100}%`,
                right: `${100 - (priceRange[1] / 9999) * 100}%`,
              }}
            />
            <div
              className="absolute w-4 h-4 bg-black rounded-full -top-1 cursor-pointer"
              style={{ left: `${(priceRange[0] / 9999) * 100}%` }}
            />
            <div
              className="absolute w-4 h-4 bg-black rounded-full -top-1 cursor-pointer"
              style={{right: `${100 - (priceRange[1] / 9999) * 100}%` }}
            />
          </div>

          <input
            type="range"
            min="0"
            max="9999"
            value={priceRange[0]}
            onChange={(e) => handlePriceChange(e, 0)}
            className="absolute w-full opacity-0 cursor-pointer"
          />
          <input
            type="range"
            min="0"
            max="9999"
            value={priceRange[1]}
            onChange={(e) => handlePriceChange(e, 1)}
            className="absolute w-full opacity-0 cursor-pointer"
          />
        </div>

        {/* Price Inputs */}
        <div className="flex items-center space-x-1 mt-3">
          <div className="flex w-[70px] items-center border rounded-md p-1">
            <span className="text-xs px-1">Rs</span>
            <input
              type="number"
              value={priceRange[0]}
              onChange={(e) => handlePriceChange(e, 0)}
              className="w-16 text-sm text-center outline-none"
            />
          </div>
          <span className="text-xs">to</span>
          <div className="flex w-[70px] items-center border rounded-md p-1">
            <span className="text-xs px-1">Rs</span>
            <input
              type="number"
              value={priceRange[1]}
              onChange={(e) => handlePriceChange(e, 1)}
              className="w-16 text-sm text-center outline-none"
            />
          </div>
        </div>
      </div>

      {/* Apply Button */}
      <button
        onClick={applyFilters}
        className="mt-4 w-[100%] bg-pink-500 text-white py-2 rounded-lg text-sm font-semibold uppercase"
        style={{backgroundColor:"#f9a8d4"}}
      >
        Apply
      </button>
    </div>
  );
};

export default PriceBar;
