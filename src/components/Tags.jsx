import React, { useState } from 'react'

const Tags = () => {
    const [tags, setTags] = useState(['UI Designer', 'Ux Researcher', 'Graphic Designer', 'Deisgner'])
  return (
    <div>
        <div className='my-4'>
            <h1>Tags</h1>
            <div className='mt-2'>
                {tags.map((tag)=>(
                    <button key={tag} className='bg-blue-100 p-2 rounded m-2 text-[13px] hover:bg-blue-200 transition duration-150 ease-in-out'>{tag}</button>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Tags