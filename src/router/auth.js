
import Login from '../views/login'
export default function Auth({Children}) {
  if(localStorage.getItem('token')){
    return <Children/>
  } else {
     return <Login/>
  }
}
