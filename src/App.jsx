import React, { useState, useEffect } from 'react';
import Form from './components/Form/Form';
import Header from './components/Header';
import News from './components/News';

function App() {

  const [category, setCategory] = useState("");
  const [news, setNews] = useState([]);

  useEffect(() => {

    const getNews = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${category}&apiKey=07073812c528406990b6e0dcf4e1491b`;
      const response = await fetch(url);
      const data = await response.json();
      setNews(data.articles);
    };

    getNews();

  }, [category]);

  return (
    <div>
      <Header title="News Search"/>
      <Form
        setCategory={setCategory}
      />
      <div className="container mt-5">
        <News
          news={news}
        />
      </div>
    </div>
  );
}

export default App;
