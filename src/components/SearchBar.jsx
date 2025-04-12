import { useState } from "react";


const SearchBar = ({masterCollection, updater, text, updateText}) =>{
    
    const handleSearch = () => {
        const newData = masterCollection.filter((restaurant) =>
          restaurant?.info?.name.toLowerCase().includes(text.toLowerCase())
        );
        console.log("newData", newData);
        updater(newData);
      };

      const handleSearchText = (val) => {
        updateText(val);
      };
    return(
        <div className="w-full max-w-xs relative">
          <input
            className="border-[1px] p-2 border-black rounded-md w-full"
            type="text"
            value={text}
            onChange={(e) => handleSearchText(e.target.value)}
            placeholder="Enter name of restaurant"
          />
          {text.trim() && <button
            onClick={handleSearch}
            className="text-xl absolute right-0 top-1/2 -translate-y-1/2"
          >
            🔍
          </button>}
        </div> 
    )
}

export default SearchBar