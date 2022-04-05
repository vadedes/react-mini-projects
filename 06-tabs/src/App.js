import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const url = 'https://course-api.com/react-tabs-project';
function App() {
  //define states
  //loading
  const [loading, setLoading] = useState(true);
  //jobs
  const [jobs, setJobs] = useState([]);
  //value to set the index of active job
  const [value, setValue] = useState(0);

  //fetch data
  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setJobs(data);
    setLoading(false);
  };

  //load data
  useEffect(() => {
    fetchData();
  }, []);

  //set loading
  if (loading) {
    return (
      <section className='section loading'>
        <h1>Loading...</h1>
      </section>
    );
  }

  //destructure data
  const { title, dates, duties, company } = jobs[value];

  return (
    <div className='section'>
      <div className='title'>
        <h2>experience</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        <div className='btn-container'>
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                className={`job-btn ${index === value && 'active-btn'}`}
                onClick={() => setValue(index)}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        <article className='job-info'>
          <h3>{title}</h3>
          <h3>{company}</h3>
          <p className='job-date'>{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className='job-desc'>
                <FaAngleDoubleRight className='job-icon' />
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
      <button type='button' className='btn'>
        more info
      </button>
    </div>
  );
}

export default App;
