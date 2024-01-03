import { Button } from '@/components/ui/button'
import Head from 'next/head'
import { useEffect, useState } from 'react'

interface DataProps {
  title: string
  subtitle: string
}

const Home = () => {
  const [data, setData] = useState<DataProps>()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:8080')
        const fetchedData = await res.json()
        setData(fetchedData)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <Head>
        <title>Starter Monorepo</title>
        <meta name="Starter Monorepo" content="Ini adalah halaman utama setup monorepo" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="min-h-screen flex justify-center items-center">
        <div>
          {data ? (
            <>
              <h1 className="text-4xl text-primary font-bold">{data.title}</h1>
              <p className="text-lg text-center text-gray-500 py-2">{data.subtitle}</p>
            </>
          ) : (
            <p className="text-center text-2xl text-primary">Loading</p>
          )}
          <div className="flex justify-center items-center">
            <Button onClick={() => alert('Oke get started')} size="lg">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
