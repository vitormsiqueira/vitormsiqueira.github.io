import './App.css';
import * as C from './App.styles';
import logoBack from './svgs/logo-vms-gradient.png';
import { Header } from './components/Header';

function App() {
  return (
    
    <C.Container>
      <Header/>

      <C.SectionPage>
        <C.Home>
          <C.Title>
            <span className="work">I'm</span>
            <span className="poppins"> Vitor Siqueira</span>
            <span className="work">,</span>
            <br/><span className="work"> a</span>
            <span className="poppins"> creative</span>
            <span className="work"> full-stack developer</span>
          </C.Title>
        </C.Home>
      </C.SectionPage>

      <C.SectionPage>
        <C.Home>
          ...
        </C.Home>
      </C.SectionPage>

    </C.Container>
    
  );
}

export default App;
