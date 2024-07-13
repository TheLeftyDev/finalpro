import React from 'react'

const ApplicationCard = ({PA}:any) => {
  return (
    <div className='ApplicationCards flex flex-col'>
        {PA.map((card:any,index:any)=>{
            return (<div className='ApplicationCard'>
                <p className='p01 font-semibold'>Application {index+1}</p>
                <p className='p02'>{card.name}</p>
            </div>

            )
        })}
    </div>
  )
}

export default ApplicationCard