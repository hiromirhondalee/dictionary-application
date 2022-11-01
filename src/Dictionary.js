import React, { useState } from "react";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function handleChange(event) {
    setKeyword(event.target.value);
    console.log(keyword);
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
