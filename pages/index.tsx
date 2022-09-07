import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Top from '../components/top'
import Navbar from '../components/Navbar'
import Bottom from '../components/Bottom'

const Home: NextPage = () => {
  return (
    <>
    <Top/>
    <Navbar/>
    <Bottom/>

    </>
  )
}

export default Home
