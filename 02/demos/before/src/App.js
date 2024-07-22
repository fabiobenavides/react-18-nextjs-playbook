import Welcome from './welcome';

function App() {

  const names = ['Fabio', 'Benavides'];


  return (
    <div className="App">
      { names.map(name => Welcome(name)) }
    </div>
  );
}

export default App;
