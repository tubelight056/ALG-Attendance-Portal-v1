import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useStyles } from "./styles";
import { useState } from "react";
import clsx from "clsx";
import MyTextField from "./Components/MyTextField";


export default function SignIn() {
  const classes = useStyles();
  const [data,setdata]=useState({
    username:"",
    password:""
  });
  function handleevent(event){
    const {value,name}=event.target;
    setdata(prev=>({
      ...prev,
      [name]:value
    }))
  }

  function handleclick(event){
    event.preventDefault();
    console.log(data);
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.root} noValidate>
        
          <MyTextField event={handleevent} value={data.name} id="username" type="name" label="User Name" myname="username"/>
          <MyTextField event={handleevent} value={data.password} type="password" id="password" label="Password" myname="password"/>
        
          <FormControlLabel
            control={
              <Checkbox
                style={{
                  color: "#FE6B8B"
                }}
                value="remember"
                color="secondary"
              />
            }
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={clsx(classes.submit, classes.button)}
            onClick={handleclick}
          >
            Sign In
          </Button>
          
        </form>
      </div>
    </Container>
  );
}
