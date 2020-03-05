import React from 'react';
import Card from './Card';
import {Link} from 'react-router-dom';

const Home = props => {



    return (
      <div className = "homeContainer">
        <Link to ="/sports">
          <Card category = "Sports" background = "imgs/sports.jpg"/>
        </Link>
        <Link to ="/music">
          <Card category = "Music" background = "imgs/music.jpg"/>
        </Link>
        <Link to ="/geography">
          <Card category = "Geography" background = "imgs/geography.jpg"/>
        </Link>
        <Link to ="/history">
          <Card category = "History" background = "imgs/history.jpg"/>
        </Link>
        <Link to ="/movies">
          <Card category = "Movies" background = "imgs/movies.jpg"/>
        </Link>
        <Link to ="/animals">
          <Card category = "Animals" background = "imgs/animals.jpg"/>
        </Link>
      </div>
  );
  }


export default Home;


