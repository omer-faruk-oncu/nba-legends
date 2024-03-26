import Header from "./components/Header";
import {data} from "./helper/data"
import "./App.css"
import CardContainer from "./components/CardContainer";
import {useState} from  'react';



function App() {

  const [searchPlayer, setSearchPlayer] = useState("") 

  return (
    <div className="App">
      <Header searchPlayer={searchPlayer} setSearchPlayer={setSearchPlayer} />
      <CardContainer data={data} searchPlayer={searchPlayer}/>
    </div>
  );
}

export default App;
