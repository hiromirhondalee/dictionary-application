import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);

    function handleResponse(response) {
      console.log(response);
    }
  function search(event) {
    event.preventDefault();

    //documentation for api https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }


  return (
    <div>
      <form onSubmit={search}>
        <input type="search" placeholder="Enter word" onChange={handleChange} />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
