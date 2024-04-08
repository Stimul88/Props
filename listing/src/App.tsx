import './App.css'
import * as data from './data/etsy.json';
import Listing from "./components/Listing.tsx";


const json = JSON.stringify(data);
const objs = JSON.parse(json)

const objsArray = Object.values(objs)[0];

function App() {
  return (
      <Listing
        objs={objsArray}/>
  )
}

export default App
