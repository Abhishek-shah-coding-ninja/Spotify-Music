import React, { useEffect, useState } from "react";
import Login from "./Login";
import "./App.css";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{user,token},dispatch] =useDataLayerValue();
  

  // It will run on given condition
  useEffect(() => {
    //  code--------
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log("men", user);

        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
    }

    
  }, []);


  return (
    <div className="App">
      {/* <h1>Hello this is spotify 🚀   </h1> */}

      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
