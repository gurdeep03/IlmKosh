import React from "react"
import { Link } from "react-router-dom"

function romance(){
return(
<div>
  <div className="books"></div>
  <style>{`
  .books {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
  background-color: #666666;
  position: relative;
}

.allbooks {
  background-color: #f1dcd7;
  border-radius: 10px;
  padding: 20px;
  width: 200px;
  height: 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: px dotted #3c1501e3 ;
  cursor: pointer;
  position: relative;
  z-index: 2;
}

.allbooks:hover {
  transform: scale(1.1);
}

.allbooks img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
}

.allbooks h2 {
  margin-top: 0;
  margin-bottom: 10px;
  color: #3c1501e3 ;
  font-family: Raleway;
}

.allbooks p {
  margin: 0;
  font-size: 0.9rem;
  color: dark#3c1501e3 green;
  font-family: Manrope;
}
.Read {
    background-color: #3c1501e3 ;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    margin-top: 10px;
    cursor: pointer;
    decoration: none;
    }


`}</style>

<div className="books">
  <a className="allbooks">
    
    <h2>Romance</h2>
    <p>Subtitles </p>
    <Link to="/horror" className="Read">Read</Link>
  </a>
  <a className="allbooks">
    
    <h2> Romance</h2>
    <p>Subtitles</p>
    <Link to="/horror" className="Read">Read</Link>
  </a>
  <a className="allbooks">
    
    <h2>Romance</h2>
    <p>Subtitles</p>
    <Link to="/horror" className="Read">Read</Link>
  </a>
  <a className="allbooks">
  
    <h2>Romance</h2>
    <p>Subtitles</p>
    <Link to="/horror" className="Read">Read</Link>
  </a>
  <a className="allbooks">
      
      <h2>Romance</h2>
      <p>Subtitles</p>
      <Link to="/horror" className="Read">Read</Link>
  </a>
  <a className="allbooks">
   
    <h2>Romance</h2>
    <p>Subtitles</p>
    <Link to="/horror" className="Read">Read</Link>
  </a>
  <a className="allbooks">
   
    <h2>Romance</h2>
    <p>Subtitles</p>
    <Link to="/horror" className="Read">Read</Link>
  </a>
  <a className="allbooks">
    
    <h2>Romance</h2>
    <p>Subtitles</p>
    <Link to="/horror" className="Read">Read</Link>
  </a>
  <a className="allbooks">
   
    <h2>Romance</h2>
    <p>Subtitles</p>
    <Link to="/horror" className="Read">Read</Link>
  </a>
  <a className="allbooks">
   
    <h2>Romance</h2>
    <p>Subtitles</p>
    <Link to="/horror" className="Read">Read</Link>
  </a>
  <a className="allbooks">
    
    <h2>Romance</h2>
    <p>Subtitles</p>
    <Link to="/horror" className="Read">Read</Link>
  </a>
</div>
</div>
);}
export default romance;