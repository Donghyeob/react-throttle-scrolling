import React from 'react'
import { scrollDataSet } from '../source/scrollDataSet'

const Scroll = () => {
  return (
    <>
      scroll area!
      {scrollDataSet.map((v) => (
        <p key={v.id}>{v.name}</p>
      ))}
    </>
  )
}

export default Scroll