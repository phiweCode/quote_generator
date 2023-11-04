import React from 'react'
import { Form } from 'react-router-dom'


function Search() {

  return (
    <div className='search-container'>
        <Form method='Get' action='/quote_generator/search/'>
            <div className='input-group input-group-sm'>
            <input aria-label="search quotes" className='form-control w-80' type='search' name='search' />
            <button type='submit' className='btn btn-primary' >Search Quote</button>
            </div>
        </Form>
    </div>
  )
}

export default Search;
