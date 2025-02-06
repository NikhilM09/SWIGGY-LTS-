import React from 'react'

const RestaurantCard = () => {
  return (
    <div>
        <div className="w-full md:max-w-[250px] max-w-[300px] h-[150px]">
            <img className="w-full h-full object-cover rounded-[15px] " src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597"/>
        </div>
        <div className="px-2">
            <h2 className="font-semibold text-2xl">Chinese Wok</h2>
            <div className="flex gap-2">
            <h2 className="text-[16px] font-semibold">⭐4.4</h2>
            <h2 className="text-[16px] font-semibold">35-40 min</h2>
            </div>
        </div>
        <p className="text-gray-500 px-3">Chinese, Asian, Tibetan, Desserts</p>
        <p className="text-gray-500 px-3">Santacruz East</p>
    </div>
  )
}

export default RestaurantCard