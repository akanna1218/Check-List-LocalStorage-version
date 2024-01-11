import React from 'react'
const EditNote = ({editNote,setEditNote,HandleEditSubmit,editingId}) => {


  
  return (
    <form>
    { editingId &&
      <div className='editNote'>
      <input
      type='text'
      value={editNote}
      onChange={(e)=>setEditNote(e.target.value)}>
      </input>
      <button
      onClick={()=>HandleEditSubmit(editingId)}
      tabIndex={0}
      style={{marginLeft:"5px"}}>
    Submit
      </button>
    </div>}</form>
  );
}



export default EditNote