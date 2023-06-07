import React, { useState, useEffect } from 'react';

export default function Quote() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=computers',
          {
            headers: {
              'X-Api-Key': '8xq3zwv2C1lnUvRdoSwiig==qMdjeZk1bIzxlyTQ',
            },
          },
        );
        const json = await res.json();
        setData(json);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [setData, setIsLoading]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (hasError) {
    return <div>Something went wrong</div>;
  }
  return (
    <>
      {data.map((item) => (
        <div key={item}>
          <p key={item.quote}>{item.quote}</p>
          <p key={item.author}>{item.author}</p>
        </div>
      ))}
    </>
  );
}
