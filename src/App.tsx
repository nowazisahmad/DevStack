import { Suspense, useState } from "react"
import Navbar from "./componants/Navbar"
import Banner from "./componants/Banner"
import Footer from "./componants/Footer"
import Technologies from "./componants/Technologies"
import type { ITechnologie } from "./type"

const technologiesFetch = async (): Promise<ITechnologie[]> => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
}


function App() {
  const technologiesPromise = technologiesFetch();
  const [stack, setStack] = useState<ITechnologie[]>([]);
  return (
    <>
      <Navbar/>
      <Banner/>
      <Suspense fallback={<div>Loading...</div>}>
        <Technologies technologiesPromise={technologiesPromise} stack={stack} setStack={setStack}></Technologies>
      </Suspense>
      <Footer/>
    </>
  )
}

export default App
