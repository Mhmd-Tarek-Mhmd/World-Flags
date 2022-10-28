import { useState, useEffect } from "react";
import { arrOrNull, func, str } from "../types";

function useFetch(url: str, storageKey: str, sortDataCB?: func): [] {
  const [data, setData] = useState<arrOrNull>(null);

  useEffect(() => {
    if (localStorage[storageKey]) {
      setData(JSON.parse(localStorage[storageKey]));
    } else {
      url &&
        fetch(url)
          .then((res: Response): Promise<[]> => res.json())
          .then((data: []): void => {
            const sortedData: [] = sortDataCB ? sortDataCB(data) : data;
            setData(sortedData);
            localStorage[storageKey] = JSON.stringify(sortedData);
          });
    }
  }, [url, storageKey]);

  return data as [];
}

export default useFetch;
