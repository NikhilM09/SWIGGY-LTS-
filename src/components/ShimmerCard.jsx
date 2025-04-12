const ShimmerCard = () => {
  return new Array(20).fill(0).map((card, index) => {
    return (
      <div key={index} className="w-full md:max-w-[250px] max-w-[300px] shadow-md rounded-[15px]">
        <div className="w-full h-[150px] bg-[#f7f7f7] rounded-[15px]">
          <div className="w-full h-full object-cover rounded-[15px]" />
        </div>
        <div className="px-2">
          <h2 className="font-semibold text-2xl h-8 w-full my-2 bg-[#f7f7f7]"></h2>
          <div className="flex gap-2 my-2 justify-between">
            <h2 className="text-[16px] font-semibold w-24 h-4 bg-[#f7f7f7]"></h2>
            <h2 className="text-[16px] font-semibold w-24 h-4 bg-[#f7f7f7]"></h2>
          </div>
        </div>
        <p className="bg-[#f7f7f7] w-11/12 h-4 mx-auto my-2"></p>
        <p className="bg-[#f7f7f7] w-11/12 h-4 mx-auto my-2"></p>
      </div>
    );
  });
};

export default ShimmerCard;
