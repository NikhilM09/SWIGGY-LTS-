import React from 'react'
import RestaurantCard from './RestaurantCard'

const Cardcontainer = () => {
  return (
    <>
    {/* <div>This is Cardcontainer component</div> */}
    <div className="flex gap-4 px-4 py-4 flex-wrap justify-center">
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
    </div>
    </>
  )
}

export default Cardcontainer