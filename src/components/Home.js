import React from 'react';
import Card from './Card';
import {Link} from 'react-router-dom';

const Home = props => {



    return (
      <div className = "homeContainer">
        <Link to ="/sports">
          <Card category = "Sports" background = "../img/sports.jpg"/>
        </Link>
        <Link to ="/music">
          <Card category = "Music" background = "../img/music.jpg"/>
        </Link>
        <Link to ="/geography">
          <Card category = "Geography" background = "../img/geography.jpg"/>
        </Link>
        <Link to ="/history">
          <Card category = "History" background = "../img/history.jpg"/>
        </Link>
        <Link to ="/movies">
          <Card category = "Movies" background = "../img/movies.jpg"/>
        </Link>
        <Link to ="/animals">
          <Card category = "Animals" background = "../img/animals.jpg"/>
        </Link>
      </div>
  );
  }


export default Home;


