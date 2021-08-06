import React, { useState } from 'react'
import { scrollDataSet } from '../source/scrollDataSet'

const Scroll = () => {
  const totalData = scrollDataSet
  const [currentSection, setCurrentSection] = useState(1)
  const [splitData, setSplitData] = useState(totalData.slice(0, 19))

  return (
    <>
      scroll area!
    </>
  )
}

export default Scroll