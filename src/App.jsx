import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Grupo 3</h1>
        <div className="grupos">
          <ul>
            <li>Alan Rodrigo Pamal De León - 202100303</li>
            <li>Edwin Aman Sam Pum - 202010307</li>
            <li>Derek Francisco Orellana Ibáñez - 202001151</li>
            <li>Teresa Celeste Rodas Castillo - 202010979</li>
            <li>Ana Lucia Fletes Ordóñez - 202010003</li>
          </ul>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Cqqz5gBY3QI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <h3>Enlaces</h3>
        <div className="grupos">
          <a href="https://drive.google.com/file/d/1H-vE-fAjcAPniK6CISY7Rjj2D_EPEpEu/view?usp=share_link" target="_blank" rel="noopener noreferrer">Manual</a>
          <a href="https://drive.google.com/file/d/1A5Zu9yWGsBEYcK0QsUyMvl15Lx-2O8g9/view?usp=share_link" target="_blank" rel="noopener noreferrer">Trifoliar</a>
        </div>
        <iframe title='manual' src="./files/Manual de mantenimiento para una laptop - Grupo 3.pdf" frameborder="0" width="50%" height="750px"></iframe>
        <iframe title='trifoliar' src="./files/Trifoliar de mantenimiento para una laptop - Grupo3.pdf" frameborder="0" width="50%" height="750px"></iframe>
      </header>
    </div>
  );
}

export default App;
