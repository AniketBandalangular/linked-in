import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './App.css';
import './firebase'
import { Feed } from './components/Feed/feed';
import Header from './components/Header/header';
import Sidebar from './components/Sidebar/sidebar';
import { login, logout, selectUser } from './features/counter/userSlice';
import Login from './components/Login/Login';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Widget from './components/Widgets/Widget';

function App() {
  const dispatch = useDispatch();
  const auth = getAuth();

  const changeAuthentication = () =>{
    onAuthStateChanged(auth, (userAuth) =>{
      if(userAuth){
          dispatch(login({
            email:userAuth.email,
            uid:userAuth.uid,
            displayName: userAuth.displayName,
            photoURL:userAuth.photoURL
        }))
      }else{
        dispatch(logout())
      }
    })
  }
  const user = useSelector(selectUser)

  React.useEffect(() => {
    changeAuthentication()
  }, []);

  return (
    <div className="App">
      {!user ? (<Login />) :(
        <>
          <Header user={user} />
          <div className="App-body">
            <Sidebar user={user} />
            <Feed />
            <Widget />
          </div>
        </>
      )
      }
      
        
    </div>
  );
}

export default App;
