import './styles/App.css';
import {Header} from './components/Header/Header';
import {MatchList} from './components/MatchList/MatchList';

export default function App() {
  return (
      <div className='app-container'>
        <Header/>
        <MatchList/>
      </div>
  );
}

