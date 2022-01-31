import React, {useState} from 'react';
const axios = require('axios');

export const ProfilePage = () => {
  const [drag, setDrag] = useState(false)

  function dragStartHandler(e) {
      e.preventDefault()
      setDrag(true)
  }

  function dragLeaveHandler(e) {
      e.preventDefault()
      setDrag(false)
  }

  function onDropHandler(e) {
      e.preventDefault()
      let files = [...e.dataTransfer.files]
      console.log(files);
      const formData = new FormData()
      formData.append('file', files[0])
      formData.append('userId', 1)
      axios.post('', formData)
      setDrag(false)
  }

  return (
    <div className="app">
        {drag
            ? <div 
                className="drop-area"
                onDragStart={e => dragStartHandler(e)}
                onDragLeave={e => dragLeaveHandler(e)}
                onDragOver={e => dragStartHandler(e)}
                onDrop={e => onDropHandler(e)}
            >Отпустите файлы, чтобы загрузить их</div>
            : <div
                onDragStart={e => dragStartHandler(e)}
                onDragLeave={e => dragLeaveHandler(e)}
                onDragOver={e => dragStartHandler(e)}
        >Перетащите файлы, чтобы загрузить их</div>            
    
    
    
    }
    </div>
  )
  
}

