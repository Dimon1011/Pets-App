import React, { useState } from 'react';
import { ANIMALS } from  '@frontendmasters/pet';

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const  [animal, setAnimal] = useState("dog");

  return  (
    <div className="search-params">
    {/* <h1>{location}</h1> */}
      <form>
        <lable htmlFor="location">
          Location
          <input id="location" value={location}
          placeholder="location" 
          onChange={e => setLocation(e.target.value)} />
        </lable>
        <label htmlFor="animal">
          animal
          <select
            id="animal"
            value={animal}
            onChange= {e => setAnimal(e.target.value)}
            onBlur={e => setAnimal(e.target.value)}>
            <option>ALL</option>
            {ANIMALS.map(animal =>(
              <option value={animal}>{animal}</option>))}
            </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default SearchParams;