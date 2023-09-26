import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Search = ({setSearch}) => {

  const searching = (e) => {
  setSearch (e.target.value)

  }

  return (
    <form>
  <div className="mb-3 col-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Buscar</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={searching}/>
  </div>
</form>
  )
}

export default Search