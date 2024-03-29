import './App.css';
import React, { useEffect, useState } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
  Button,
} from 'shards-react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import Loader from './Loader';

function App() {
  const [quote, setQuote] = useState();
  const [author, setAuthor] = useState();
  const [loading, setLoading] = useState();

  const options = {
    method: 'GET',
    url: 'https://quotes15.p.rapidapi.com/quotes/random/',
    headers: {
      'X-RapidAPI-Key': '9668ba13famsh518b845e512b1abp1b19b0jsn0c43a0db29b2',
      'X-RapidAPI-Host': 'quotes15.p.rapidapi.com',
    },
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  function fetchQuote() {
    setLoading(true);
    axios
      .request(options)
      .then(function (response) {
        setQuote(response.data.content);
        setAuthor(response.data.originator.name);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    <div className='jumbotron d-flex align-items-center min-vh-100'>
      <Card className='mx-auto align-middle my-auto' style={{ width: '50%' }}>
        <CardHeader
          style={{
            fontWeight: 400,
            fontSize: '1.5em',
          }}
        >
          Quote Generator
        </CardHeader>
        {loading ? (
          <Loader />
        ) : (
          <CardBody>
            <CardTitle
              className='mx-auto'
              style={{
                fontFamily: 'Vollkorn',
                fontSize: '2em',
                lineHeight: '1em',
              }}
            >
              {quote}
            </CardTitle>
            <p
              className='d-flex justify-content-end'
              style={{
                fontSize: '1.5em',
                lineHeight: '1em',
              }}
            >
              &mdash;{author}
            </p>
            <Button theme='danger' onClick={(e) => fetchQuote(e)}>
              Hit Me
            </Button>
          </CardBody>
        )}
        <CardFooter className='d-flex justify-content-center'>
          Powered by RapidAPI
        </CardFooter>
      </Card>
    </div>
  );
}

export default App;
