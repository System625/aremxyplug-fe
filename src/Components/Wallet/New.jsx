{walletAdded ? 
    <>
      <h2 className="text-[8px] leading-[10.4px] mt-1 text-center md:text-[9.17px] md:leading-[11.92px] md:mt-2 lg:text-[20px] lg:leading-[26px]">Your new wallet has been added successfully.</h2>
      <div className="flex gap-2 items-center absolute bottom-3 w-full justify-center">
        <button className="text-[6.59px] leading-[8.57px] px-2 py-[3px] text-white bg-primary rounded-full lg:text-[15px] lg:p-2 lg:px-4" onClick={() => setReDirect(true)}>View Wallet</button>
      </div>
    </>
     : 
    <>
    {/* if country is available, it will proceed to add wallet  */}
      {notAvailable ? 
      <>
      <h2 className="text-[8px] leading-[10.4px] mt-1 text-center md:text-[9.17px] md:leading-[11.92px] md:mt-2 lg:text-[20px] lg:leading-[26px]">This wallet is currently not available</h2>
      <div className="flex gap-2 items-center absolute bottom-3 w-full justify-center">
        <button onClick={onClick} className="text-[6.59px] leading-[8.57px] px-2 py-[3px] text-white bg-primary rounded-full lg:text-[15px] lg:p-2 lg:px-4">Okay</button>
      </div>
      </> : 
      <>
        <h2 className="text-[8px] leading-[10.4px] mt-1 text-center md:text-[9.17px] md:leading-[11.92px] md:mt-2 lg:text-[20px] lg:leading-[26px]">Please select the available currency to add new wallets.</h2>
        <div className="flex gap-2 items-center absolute bottom-3 w-full justify-center">
          <button className="text-[6.59px] leading-[8.57px] px-2 py-[3px] text-white bg-primary rounded-full md:text-[9.17px] lg:text-[15px] lg:p-2 lg:px-4" onClick={() => setWalletAdded(true)}>Add wallet</button>
          <button onClick={onClick} className="text-red-500 text-[6.59px] leading-[8.57px] px-2 py-[2px] rounded-full hover:bg-red-500 hover:text-white lg:text-[15px] lg:p-2 lg:px-4">Cancel</button>
        </div>
      </>
      }
    </>
  }