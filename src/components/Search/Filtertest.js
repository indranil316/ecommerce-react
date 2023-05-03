import React from 'react'

function Filter() {
  return (
    <div className="flex flex-col justify-between w-full lg:w-1/4 bg-gray-100 p-4">
        <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">Filter By</h2>
            <form>
            <div className="mb-4">
                <label className="block font-medium mb-2" for="size">Size</label>
                <select className="form-select" id="size">
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block font-medium mb-2" for="width">Width</label>
                <select className="form-select" id="width">
                <option>Narrow</option>
                <option>Medium</option>
                <option>Wide</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block font-medium mb-2" for="category">Category</label>
                <select className="form-select" id="category">
                <option>Men's Clothing</option>
                <option>Women's Clothing</option>
                <option>Shoes</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block font-medium mb-2" for="color">Color</label>
                <select className="form-select" id="color">
                <option>Red</option>
                <option>Green</option>
                <option>Blue</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block font-medium mb-2" for="price">Price Range</label>
                <input className="form-input" type="range" min="0" max="1000" step="50" id="price"/>
            </div>
            <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700" type="submit">Filter</button>
            </form>
        </div>
        <div className="text-center">
            <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300">Clear Filters</button>
        </div>
        </div>
  )
}

export default Filter