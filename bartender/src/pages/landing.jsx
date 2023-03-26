import React from 'react'


const landing = () => {
  return (
    <div className='landing_page'>
        <div className='container'>
            <div className='neon'>
                The Home
            </div>
            <div className='flux'>
                Bartender's Guide
            </div>
        </div>
        <div className='small_neon'>
            <h1>CLICK</h1>
            {/* The offset should make the first E look like it is malfunctioning slightly */}
            <h1>H<span id='offset'>E</span>RE</h1>
        </div>
    </div>
  )
}

export default landing