import { useEffect, useState } from "react";

function GenerateImage() {
  const [search, setSearch] = useState("");
  const [image, setImage] = useState("");
  const url = `https://robohash.org/${search}`;

  const setSearchFunc = (e) => {
    e.preventDefault();
    setSearch((value) => (value = e.target.value));
  };

  useEffect(() => {
    const controller = new AbortController();
    const sign = controller.signal;
    fetch(url, { sign }).then((data) => {
      return setImage((value) => (value = data.url));
    });
    return () => controller.abort();
  }, [search]);

  return (
    <div>
      <form>
        <input type="text" value={search} onChange={setSearchFunc} />
      </form>
      <img src={image} alt="" />
    </div>
  );
}

export default GenerateImage;
