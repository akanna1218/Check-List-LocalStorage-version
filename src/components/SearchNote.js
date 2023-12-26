import React from 'react'

const SearchNote = ({search,setSearch}) => {
  return (
    <form className='SearchNote' >

        <label htmlFor='search Note bar'>
          
        <input className="sNote"
        type='text'
        placeholder='Find Note '
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        ></input>

        </label>

    </form>
  )
}

export default SearchNote