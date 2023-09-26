import React from "react"

const Search = ({setSearch, setPagination}) => {

  const searching = (e) => {
  setSearch(e.target.value)
  setPagination("&page=1")
  }

  return (
    <form className="w-50">
        <input type="text" className="w- form-control"  placeholder='Buscar' onChange={searching}/>
    </form>
  )
}

export default Search