import { Suspense } from "react"
import Banner from "./componants/Banner"
import Footer from "./componants/Footer"
import Navbar from "./componants/Navbar"
import Technologies from "./componants/Technologies"
import type { ITechnologie } from "./type"

const technologiesFetch = async (): Promise<ITechnologie[]> => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
}


function App() {
  const technologiesPromise = technologiesFetch();
  return (
    <>
      <Navbar/>
      <Banner/>
      <Suspense fallback={<div>Loading...</div>}>
        <Technologies technologiesPromise={technologiesPromise}></Technologies>
      </Suspense>
      <Footer/>
    </>
  )
}

export default App
