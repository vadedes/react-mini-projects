import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';

//fetch data from API
//Set Loading State
//Pass Props to children

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setloading] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setloading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      console.log(tours);
      setloading(false);
      setTours(tours);
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <section>
          <div className='title'>
            <h2>no tours left</h2>
            <button className='btn' onClick={() => fetchTours()}>
              refresh
            </button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
