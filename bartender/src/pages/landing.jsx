import React from 'react'


const landing = () => {
  return (
    <div className='landing_page'>
        {/* This controls the Neon sign on top */}
        <div className='container'>
            <div className='neon'>
                The Home
            </div>
            <div className='flux'>
                Bartender's Guide
            </div>
        </div>
        {/* This controls the lower neon sign, clicking the sign will take you to the main page */}
        <a href="/mainpage">
        <div className='small_neon hover:cursor-pointer'>
            <h1>CLICK</h1>
            {/* The offset should make the first E look like it is malfunctioning slightly */}
            <h1>H<span id='offset'>E</span>RE</h1>
        </div>
        </a>
    </div>
  )
}

export default landing