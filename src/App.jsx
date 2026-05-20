import { Suspense } from 'react'
import './App.css'
import DaisyNav from './component/DaisyNav/DaisyNav'
import NavBer from './component/NavBer/NavBer'
import PricingOptions from './component/PricingOptions/PricingOptions'
import ResultsChart from './component/ResultsChart/ResultsChart'


const pricingPromise = fetch('PricingData.json')
.then(res => res.json());

function App() {
  

  return (
    <>
     <header>
    <NavBer></NavBer>
      {/* <DaisyNav></DaisyNav> */}
     </header>
     <main>
      <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
        <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
      </Suspense>

      <ResultsChart></ResultsChart>
     </main>
    </>
  )
}

export default App
