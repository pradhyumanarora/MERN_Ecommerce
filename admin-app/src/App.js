import {BrowserRouter as Router , Route ,Routes} from 'react-router-dom'
import Home from './container/Home';
import Signin from './container/SignIn';
import Signup from './container/SignUp';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element= {<Home/>}/>
          <Route path="/signin" element= {<Signin/>}/>
          <Route path="/signup" element= {<Signup/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
