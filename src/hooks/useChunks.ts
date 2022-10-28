import { useState, useEffect } from "react";
import { num, obj } from "../types";

/**
 * useChunks or Split into chunks
 * @param data Array of data wanted to split into chunks
 * @param n Number of chunks
 * @returns Array of chunks
 */

function useChunks(data: obj[], n: num): obj[] {
  const [chunks, setChunks] = useState<[] | obj[]>([]);

  useEffect(() => {
    if (data) {
      for (let i: num = 0; i < data?.length; i += n) {
        const chunk: obj[] = data.slice(i, i + n);
        setChunks((prev) => [...prev, chunk]);
      }
    }
  }, [data]);

  return chunks as obj[];
}

export default useChunks;
