import React, { useEffect, useState } from 'react'
import { CvDegreesStyles } from './styles'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import CvData from '../../data/cv.json'
import { DegreeItem } from '../../components/DegreeItem'
import { DegreeList } from '../../components/DegreesList'
import { DegreeCardSkeleton } from '../../components/DegreeCardSkeleton'

export const Cv = () => {
  const [degrees, setDegrees] = useState([])

  const getDegrees = () => {
    return new Promise((res) => {
      setTimeout(() => {
        const degrees = CvData.degrees
        res(degrees)
      }, 1000)
    })
  }

  useEffect(() => {
    getDegrees()
      .then(res => setDegrees(res))
  }, []);

  return (
    <CvDegreesStyles>
      <DegreeList>
        {(degrees.length === 0)
          ? <DegreeCardSkeleton cards={3} />
          : degrees.map(item => (
            <DegreeItem
            key={item.id}
            since={item.since}
            to={item.to}
            institution={item.institution}
            degreeType={item.degreeType}
            title={item.title}
            />
          ))
        }

      </DegreeList>
    </CvDegreesStyles>
  );
}
