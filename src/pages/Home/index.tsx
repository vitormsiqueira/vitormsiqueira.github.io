import './App.css';
import { Header } from '../../components/Header';
import * as C from './styles';

export const HomePage = () => {
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
