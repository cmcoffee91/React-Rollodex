import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import UserPanel from "./UserPanel";
import RolodexAppBar from "./RollodexAppBar";
import Toolbar from '@material-ui/core/Toolbar';
import {AppBar} from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
}));

function App() {

    const classes = useStyles();
    const URL = "https://randomuser.me/api?results=25";
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const loadUsers = async () => {
            const response = await fetch(URL);
            const data = await response.json();
            setUsers(data.results);
        }
        loadUsers().then(r => console.log(""));
    }, []);



  return (
    <div className="App">
        <div className={classes.toolbar} />
        <RolodexAppBar></RolodexAppBar>
        <header className="App-header">
          {users.map((user, index) => (
              <UserPanel key={index} index={index} user={user} />
          ))}

      </header>
    </div>
  );
}

export default App;
