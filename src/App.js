import './App.css';
import {Route, Switch } from 'react-router-dom';
import ReloadOnBackButton from './utils/ReloadOnBackButton';
import {Header} from './components/layout/';
import { CardGame,StarRating,CommentList,ShareButton } from './components/pages';

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
      <Route exact path="/q1" component={()=><CardGame amount={5}/>} />
      <Route exact path="/q2" component={()=><StarRating />} />
      <Route exact path="/q3" component={()=><CommentList />} />
      <Route exact path="/q4" component={()=><ShareButton />} />
      </Switch>

      <ReloadOnBackButton />
    </div>
  );
}

export default App;
