import React from "react";

const Search = (props: any) => {
  const { placeholder, handleChange } = props;
  return (
    <input
      type="search"
      className="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default Search;
