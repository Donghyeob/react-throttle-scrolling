import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Scroll = () => {
  const [totalData, setTotalData] = useState([])
  const [currentSection, setCurrentSection] = useState(1)
  const [splitData, setSplitData] = useState([])
  const [loading, setLoading] = useState()
  const [throttleCount, setThrottleCount] = useState(0)
  const printData = 20
  const lastId = currentSection * printData - 1

  const jsonDataCall = async () => {
    await axios.get('https://jsonplaceholder.typicode.com/comments')
      .then((res) => {
        setTotalData(res.data)
        setSplitData(res.data.slice(0, lastId))
        setCurrentSection(currentSection + 1)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const currentDataCall = () => {
    // console.log(currentSection)
    // console.log(lastId)
    // console.log(totalData.slice(0, lastId))
    setSplitData(totalData.slice(0, lastId))
    setCurrentSection(currentSection + 1)
  }

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight
    const scrollTop = document.documentElement.scrollTop
    const clientScroll = document.documentElement.clientHeight
    scrollTop + clientScroll >= scrollHeight && currentDataCall()
  }

  const throttleScroll = () => {
    !loading &&
      setLoading(setTimeout(() => {
        console.log('Throttle Count')
        setThrottleCount(throttleCount + 1)
        console.log(throttleCount)
        setLoading(null)
        handleScroll()
      }, 1000)
      )
  }

  useEffect(() => {
    jsonDataCall()
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', throttleScroll)
    return () => {
      window.removeEventListener('scroll', throttleScroll)
    }
  }, [currentSection, loading])

  return (
    <>
      scroll area!
      {splitData.map((v, i) => (
        <div key={i} style={{ marginBottom: '10px' }}>
          { v.id}
          { v.body}
        </div>
      ))
      }
      {loading && <div>Loading...</div>}
    </>
  )
}

export default Scroll