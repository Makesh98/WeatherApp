import axios from"axios"
import { useState } from "react"

function App(){

    const [deg,setdeg] = useState("0")
    const [city,setcity] = useState("France")
    const [desc,setdesc] = useState("Raining")
    const [enteredvalue,setenteredvalue] = useState("")

    function handleInput(event)
    {
        console.log(event.target.value)
        setenteredvalue(event.target.value)
    }

    function getData()
    {
        var weather = axios(`https://api.openweathermap.org/data/2.5/weather?q=${enteredvalue}&appid=b46e68e9db0d2dcc2e29687efbda4d41`)

        weather.then(function(dalta){
            setdeg(dalta.data.main.temp)
            setcity(dalta.data.name)
            setdesc(dalta.data.weather[0].main)
        })
    }


    return(
    <div className="flex flex-row justify-center h-[100vh] items-center " >

        <div style={{backgroundImage: "linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)"}} className="p-3 rounded-md shadow">
        <h1 className="font-medium text-xl">Hey! ⛅</h1>
        <p className="text-lg">Do you want to know the Weather Report :)</p>
        <input onChange={handleInput} type="text" className="rounded-md h-6 text-xl mt-2 p-1 outline-none" placeholder="City Name?"></input>
        <br />

        <button onClick={getData} className="bg-black text-white rounded-lg p-1 text-lg mt-2">Get Report ⚡</button>

        <p className="text-xl mt-2">Degree: {deg} | City: {city} | Weather: {desc}</p>
        </div>

    </div>)
}

export default App