import './CartItem.css'
import React from 'react'

export default function CartItem() {
  return (
    <div className='CartItem'>
        <div className="main">
                <div className="img">
                    <img
                        src="https://imgs.search.brave.com/ItrU0KKUpVWqWyZs3aNlqhhLLXAIjRHZWX1Vwj1VLX4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MTgzNTQ2OTEzNzMt/ZDg1MWM1YzNhOTkw/P2l4bGliPXJiLTQu/MC4zJml4aWQ9TTN3/eE1qQTNmREI4TUh4/elpXRnlZMmg4Tm54/OGRITm9hWEowZkdW/dWZEQjhmREI4Zkh3/dyZ3PTEwMDAmcT04/MA"
                        alt=""
                    />
                </div>
                <div className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, deleniti.</div>
                <div className="price">INR 100.00</div>
            </div>
            <button className="btn btn-danger">Remove Item</button>
    </div>
  )
}
