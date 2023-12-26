import React from 'react'
import { FaRegCalendarPlus } from "react-icons/fa";


function AddNotes({newNote,setNewnote,HandleNewnote,len,setErr}){
    return(
        <form className='AddNote' >
            
            <label htmlFor="addNote">

            <input  className="aNote" 
                    type="text"
                    placeholder='Add Note'
                    value={newNote} 
                    required
                    onChange={(e)=>setNewnote(e.target.value)} // passing the value in the typing event target to the setState

            />

            </label>

          {setNewnote&&
           <label htmlFor='Add Note Button'><button 
                className='AddButton'
                onClick={HandleNewnote} 
                >
                    <FaRegCalendarPlus 
                    tabIndex={0}        />
            </button>
            </label>
            }

        </form> // note here form not forms ,
    )
}

export default AddNotes