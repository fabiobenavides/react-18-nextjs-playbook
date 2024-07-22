import Welcome from './welcome';

function App() {

  const names = ['Fabio', 'Benavides'];


  return (
    <div className="App">
      { names.map(n => Welcome(n)) }
    </div>
  );
}

export default App;
