import { useEffect, useState } from 'react'

const useFetch = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)


  return { loading, error, data }
}

export default useFetch