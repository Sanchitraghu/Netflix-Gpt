import React from 'react'

const PaymentSuccess = () => {
  return (
    <div className="w-full h-screen flex flex-col gap-3 justify-center items-center -mt-14 bg-gray-50">
      <img
      className="w-80"
        src={
          "https://i.pinimg.com/originals/b2/d4/b2/b2d4b2c0f0ff6c95b0d6021a430beda4.gif"
        }
        alt="Imgg"
      />
      <h3 className="text-2xl">Payment processing...</h3>
    </div>
  )
}

export default PaymentSuccess;
