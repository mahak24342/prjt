import React from 'react'

const Nav = () => {
  return (
    <div >
        <div className='flex justify-between  h-16 p-5 shadow-md'>
            <div className=' w-14 bg-gray-300 h-8 p-3  items-center flex  text-orange-500 '>
Logo
            </div>
<div className='flex'>
<div>
Jobs
</div>
<div>Messages</div>
<div>Payments</div>
</div>
<div>
<div>ds</div>
</div>
        </div>
        <div className=' border-gray-300 border-b-2'>
    <div className='flex gap-5 m-5 pt-8 ml-16 w-full h-11 '>
        <div className='border-orange-500 border-b-2 pb-8 text-orange-500'>Job preview</div>
        <div>Applicants</div>
<div>Match</div>
<div>Messages</div>
    </div>
    </div>
    </div>
  )
}

export default Nav