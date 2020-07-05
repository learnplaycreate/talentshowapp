import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Wangaratta Talent show</h1>
        <h2>Program</h2>
        <table>
          <tr>
            <td>Name</td>
            <td>Activity</td>
          </tr>
          <tr>
            <td>the winning</td>
            <td>Maknig Dumplings</td>
          </tr>
          <tr>
            <td>Frank</td>
            <td>Building Lego</td>
          </tr>
          <tr>
            <td>Mary, Neville</td>
            <td>Table Tennis</td>
          </tr>
          <tr>
            <td>Lucas, Scarlet</td>
            <td>Bed Bugs</td>
          </tr>
          <tr>
            <td>Bart</td>
            <td>Fort Making</td>
          </tr>
          <tr>
            <td>Charlie</td>
            <td>Cooking</td>
          </tr>
          <tr>
            <td>Liam</td>
            <td>Making a Website</td>
          </tr>
          <tr>
            <td>Charlie, Frank, Lucas, Scarlet</td>
            <td>Roller Blading</td>
          </tr>
          <tr>
            <td>Lucas</td>
            <td>Contempory Dance</td>
          </tr>
          <tr>
            <td>Mary, Neville</td>
            <td>Ballroom Dance</td>
          </tr>
        </table>

        <h2>Scores</h2>
        <table>
          <tr>
            <td>Name</td>
            <td>Activity</td>
            <td>Judge1</td>
            <td>Judge2</td>
            <td>Judge3</td>
            <td>Total Points</td>
          </tr>
          <tr>
            <td>Liam</td>
            <td>Maknig Dumplings</td>
            <td>
              <input></input>
            </td>
            <td>
              <input></input>
            </td>
            <td>
              <input></input>
            </td>
            <td>
              <p></p>
            </td>
          </tr>
          <tr>
            <td>Frank</td>
            <td>Building Lego</td>
            <td>
              <input></input>
            </td>
            <td>
              <input></input>
            </td>
            <td>
              <input></input>
            </td>
            <td>
              <p></p>
            </td>
          </tr>
          <tr>
            <td>Mary, Neville</td>
            <td>Table Tennis</td>
            <td>
              <input></input>
            </td>
            <td>
              <input></input>
            </td>
            <td>
              <input></input>
            </td>
            <td>
              <p></p>
            </td>
          </tr>
          <tr>
            <td>Lucas, Scarlet</td>
            <td>Bed Bugs</td>
            <td>
              <input></input>
            </td>
            <td>
              <input></input>
            </td>
            <td>
              <input></input>
            </td>
            <td>
              <p></p>
            </td>
          </tr>
          <tr>
            <td>Bart</td>
            <td>Fort Making</td>
            <td>
              <input></input>
            </td>
            <td>
              <input></input>
            </td>
            <td>
              <input></input>
            </td>
            <td>
              <p></p>
            </td>
          </tr>
          <tr>
            <td>Charlie</td>
            <td>Cooking</td>
            <td>
              <input></input>
            </td>
            <td>
              <input></input>
            </td>
            <td>
              <input></input>
            </td>
            <td>
              <p></p>
            </td>
          </tr>
          <tr>
            <td>Liam</td>
            <td>Making a Website</td>
            <td>
              <input></input>
            </td>
            <td>
              <input></input>
            </td>
            <td>
              <input></input>
            </td>
            <td>
              <p></p>
            </td>
          </tr>
          <tr>
            <td>Charlie, Frank, Lucas, Scarlet</td>
            <td>Roller Blading</td>
            <td>
              <input></input>
            </td>
            <td>
              <input></input>
            </td>
            <td>
              <input></input>
            </td>
            <td>
              <p></p>
            </td>
          </tr>
          <tr>
            <td>Lucas</td>
            <td>Contempory Dance</td>
            <td>
              <input></input>
            </td>
            <td>
              <input></input>
            </td>
            <td>
              <input></input>
            </td>
            <td>
              <p></p>
            </td>
          </tr>
          <tr>
            <td>Mary, Neville</td>
            <td>Ballroom Dance</td>
            <td>
              <input></input>
            </td>
            <td>
              <input></input>
            </td>
            <td>
              <input></input>
            </td>
            <td>
              <p></p>
            </td>
          </tr>
        </table>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
