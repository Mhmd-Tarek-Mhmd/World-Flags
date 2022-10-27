import { useState, useEffect } from "react";

function useFetch(url: string, storageKey: string, sortDataCB?: Function): [] {
  const [data, setData] = useState<null | []>(null);

  useEffect(() => {
    if (localStorage[storageKey]) {
      setData(JSON.parse(localStorage[storageKey]));
    } else {
      url &&
        fetch(url)
          .then((data) => data.json())
          .then((data) => {
            const sortedData = sortDataCB ? sortDataCB(data) : data;
            setData(sortedData);
            localStorage[storageKey] = JSON.stringify(sortedData);
          });
    }
  }, [url, storageKey]);

  return data as [];
}

export default useFetch;
