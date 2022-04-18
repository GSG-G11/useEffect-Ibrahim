import React, { useEffect, useState } from "react";

const Gif = () => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const sign = controller.signal;

    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=EdEC78oEheuKSEpJi8VS9S9udf0SaK0E`,
      { sign }
    )
      .then((response) => response.json())
      .then((data) => console.log(data));

    return () => {
      controller.abort();
    };
  }, [search]);

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
};

export default Gif;
