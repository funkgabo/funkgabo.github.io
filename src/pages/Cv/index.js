import React, { useEffect, useState } from 'react'
import { CvSectionStyles } from './styles'

import CvData from '../../data/cv.json'

export const Cv = () => {
  const [cvJobs, setCvJobs] = useState(null)
  const [cvEducation, setCvEducation] = useState(null)
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const jobsData = await new Promise(resolve => {
        setTimeout(() => {
          resolve(CvData.jobs)
        }, 2000)
      })
      setCvJobs(jobsData)
    };
    fetchData()
  }, []);

  return (
    <CvSectionStyles>
      {cvJobs ? (
        <ul>
          {cvJobs.map(item => (
            <li key={item.id}>{item.charge}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </CvSectionStyles>
  );
}
