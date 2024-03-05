import logo from './logo.svg';
import './App.css';
import Paragrafo from './components/Paragrafo';
import Card from './components/Card.js';
import Content from './components/Content.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Paragrafo 
          Texto= "Luis dbdvte fgbhreybdv vevbteb"
          Titulo= "Meu titulo"
        />
        <Card>
          <Content 
            Img = "https://avatars.githubusercontent.com/u/133153563?v=4"
            Titulo ="Luis"
            Text= "A descrição é a enumeração das características próprias dos seres, coisas, cenários, ambientes, costumes, impressões etc. A visão, o tato, a audição, o olfato e o paladar constituem a base da descrição"/>
       

          <Content 
            Img = "https://avatars.githubusercontent.com/u/133153563?v=4"
            Titulo ="Luis"
            Text= "A descrição é a enumeração das características próprias dos seres, coisas, cenários, ambientes, costumes, impressões etc. A visão, o tato, a audição, o olfato e o paladar constituem a base da descrição"/>
      

          <Content 
            Img = "https://avatars.githubusercontent.com/u/133153563?v=4"
            Titulo ="Luis"
            Text= "A descrição é a enumeração das características próprias dos seres, coisas, cenários, ambientes, costumes, impressões etc. A visão, o tato, a audição, o olfato e o paladar constituem a base da descrição"/>
     

          <Content 
            Img = "https://avatars.githubusercontent.com/u/133153563?v=4"
            Titulo ="Luis"
            Text= "A descrição é a enumeração das características próprias dos seres, coisas, cenários, ambientes, costumes, impressões etc. A visão, o tato, a audição, o olfato e o paladar constituem a base da descrição"/>
       

          <Content 
            Img = "https://avatars.githubusercontent.com/u/133153563?v=4"
            Titulo ="Luis"
            Text= "A descrição é a enumeração das características próprias dos seres, coisas, cenários, ambientes, costumes, impressões etc. A visão, o tato, a audição, o olfato e o paladar constituem a base da descrição"/>

          <Content 
            Img = "https://avatars.githubusercontent.com/u/133153563?v=4"
            Titulo ="Luis"
            Text= "A descrição é a enumeração das características próprias dos seres, coisas, cenários, ambientes, costumes, impressões etc. A visão, o tato, a audição, o olfato e o paladar constituem a base da descrição"/>
        </Card> 

        
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
