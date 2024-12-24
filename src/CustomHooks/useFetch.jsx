import { useEffect, useState } from 'react'
const useFetch = (url) => {

  const [data, setData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const abortController = new AbortController();

    fetch(url, { signal: abortController.signal })
      .then(res => {
        if (!res.ok) {
          throw new Error("Could not fetch the data for that resource");
        }
        return res.json();
      })
      .then(data => {
        // console.log(data);
        setData(data);
        setIsLoaded(false);
        setError(null);
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted');
        } else {
          setIsLoaded(false);
          setError(err.message);
        }
      });

    //cleanUP
    return () => {
      abortController.abort();
    };


  }, [url]);

  return { data, isLoaded, error };
}

export default useFetch