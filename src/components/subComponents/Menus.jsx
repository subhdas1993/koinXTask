import React from 'react'

function Menus() {
  return (
    <div>
      <div className='max-lg:w-full max-lg:overflow-auto max-lg:whitespace-nowrap w-5/6 lg:flex lg:justify-between menusCustom'>
        <div>Overview</div>
        <div>Fundamentals</div>
        <div>New Insights</div>
        <div>Sentiments</div>
        <div>Teams</div>
        <div>Technicals</div>
        <div>Tokenomics</div>
      </div>
    </div>
  )
}

export default Menus