import React from 'react'

const RestaurantDetail = () => {
  return (
    <div className="font-semibold border border-gray-400 rounded-2xl p-5">
        <div className="flex gap-4 items-center">
            <div>⭐4.3 (16k+ ratings)</div>
            <div>.</div>
            <div>₹300 for two</div>
        </div>
        <div className="text-orange-600 underline">Pizzas</div>
        <div className="flex gap-3">
            <div className="flex pt-2 flex-col items-center">
                <div className="w-2 h-2 rounded-[50%] bg-[#c4c4c4]"></div>
                <div className="w-[1px] h-[23px] bg-[#c4c4c4]"></div>
                <div className="w-2 h-2 rounded-[50%] bg-[#c4c4c4]"></div>
            </div>
            <div className="flex flex-col gap-1">
                <h1>Outlet<span className="mx-3 text-gray-400  ">Bandra Kurla Complex</span></h1>
                <h1>30-35min</h1>
            </div>
        </div>
    </div>
  )
}

export default RestaurantDetail