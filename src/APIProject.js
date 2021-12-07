import { useState } from "react";
import './App.css';
//import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

const APIProject = () => {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({
        error: false,
        message: ""
    })

    const getAPI = async () => {
        try {
            setLoading(true)
            const response = await fetch("https://api.quotable.io/random")
            if (response.status !== 200) {
                throw new Error("The API id down, try again later!")
            } 
            const data = await response.json()
            setQuote(data.content)
            setAuthor(data.author)
            setLoading(false)
        }
        catch (error) {
            setError({ error: true, message: error.message})
        }
    }

    if (error.error) {
        return <h1>{error.message}</h1>
    }
    return (    
        <div className="App">
            <div className="quoteBox">
                <div className="container">
                    <h1>Quote Box</h1>
                    {loading ? <p>loading...</p>
                    :
                    <h2>{quote}</h2>
                    }
                    <h3>{author}</h3>
                    <button className="quoteButton" onClick={getAPI}>New Quote</button>
                </div>
            </div>
        </div>       
    )
}

export default APIProject;