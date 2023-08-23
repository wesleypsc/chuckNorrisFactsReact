import { useState, useEffect} from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [jokes, setJokes] = useState([])
  const [joke, setJoke] = useState({id: "", joke: "", jokeURL: ""})
  const [search, setSearch] = useState()

  function handdleAddOneJoke(data){
    const newJoke = {
      id: data.id, 
      joke: data.value,
      jokeURL: data.url
    }

    setJokes([newJoke])
  }
  
  function handdleAddJokes(data){
    const newJoke = {
      id: data.id, 
      joke: data.value,
      jokeURL: data.url
    }

    setJokes(prevState =>  [...prevState, newJoke])
  }

  async function fetchRandom(){
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
  
    handdleAddOneJoke(data)
  }

  async function fetchJokes(){
    const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${search}`);
    const data = await response.json();

    setJokes([])
  
    data.result.map(result =>{
      handdleAddJokes(result)
    })
  }
  
  async function fetchLucky(){
    const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${search}`);
    const data = await response.json();
  
    // console.log(data)
    handdleAddOneJoke(data.result[0])
  }

  useEffect(() => {
    fetchRandom()
  }, [])

  return (
    <main>
      <img className='chuckNorrisLogo' src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png" alt="Chuck Norris API Logo" />

      <div className='searchBox'>
        <input 
          type="text" 
          placeholder='Type your search'
          onBlur={(e) => setSearch(e.target.value)}
        />

        <button className='btnSearch' onClick={fetchJokes} type='button'>Hit me!</button>
        <button className='btnLucky' onClick={fetchLucky} type='button'>Get Lucky!</button>
        <button className='btnRandom' onClick={fetchRandom} type='button'>Get Random</button>

      </div>
      

      {
        jokes.map(item => (
          <Card 
            key = {item.id}
            id = {item.id}
            url = {item.jokeURL} 
            text = {item.joke} />
        ))
      }
    </main>
  )
}

export default App
