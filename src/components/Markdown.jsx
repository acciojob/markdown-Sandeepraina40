import React from 'react'
import { useState } from 'react';
const Markdown = () => {
    const [markdown,setMarkdown] = useState("");
  return (
    <div className='container'>
        <div className='editor'><textarea value={markdown} onChange={(e)=> setMarkdown(e.target.value)}></textarea></div>
        <div className='preview'>{markdown}</div>
    </div>
  )
}

export default Markdown;