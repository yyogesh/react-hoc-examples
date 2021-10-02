import './App.css';
import { useState, useEffect } from 'react';
import ListRepos from './components/ListRepos';
import WithAuthExample from './components/WithAuthExample';
import Location from './components/Location';
// import WithLoading from './components/HOCLoading';

// const ListReposLoading = WithLoading(ListRepos);

function App() {
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);


  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch(`https://api.github.com/users/yyogesh/repos`)
        .then((json) => json.json())
        .then((repos) => {
          setLoading(false);
          setRepos(repos);
        });
    }, 2000);
  }, [])

  return (
    <div className="App">
      <ListRepos repos={repos} isLoading={loading} />

      <WithAuthExample isAuthenticated={true} />

      <Location />
    </div>
  );
}

export default App;
