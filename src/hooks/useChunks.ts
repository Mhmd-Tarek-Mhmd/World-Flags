import { useState, useEffect } from "react";

/**
 * useChunks or Split into chunks
 * @param data Array of data wanted to split into chunks
 * @param n Number of chunks
 * @returns Array of chunks
 */

function useChunks(data: [], n: number): {}[] {
  const [chunks, setChunks] = useState<[] | {}[]>([]);

  useEffect(() => {
    if (data) {
      for (let i = 0; i < data?.length; i += n) {
        const chunk = data.slice(i, i + n);
        setChunks((prev) => [...prev, chunk as {}]);
      }
    }
  }, [data]);

  return chunks;
}

export default useChunks;
