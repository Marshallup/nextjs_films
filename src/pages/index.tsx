import MainPromo from 'components/MainPromo';
import type { NextPage } from 'next'
import { useState } from 'react';

const Home: NextPage = () => {
  const [data, setData] = useState([]);

  async function doFetch() {
    const url = `${String(process.env.NEXT_PUBLIC_API_URL)}/users/test`;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        setData(response);
        console.log(response, 'response')
      })
      .catch(error => {
        console.log(error.response, 'error');
      });
  }

  return (
    <>
      <MainPromo />
      {/* <button onClick={doFetch}>Сделать запрос на бек qweqw</button>
      <h2>Ответ здесь:</h2>
      <pre>
        { JSON.stringify(data) }
      </pre> */}
    </>
  )
}

export default Home
