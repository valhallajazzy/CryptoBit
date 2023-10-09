
import MyDay from "../components/screens/myDay/MyDay";
import Important from "../components/screens/important/Important";
import Planned from "../components/screens/planned/Planned";
import Home from "../components/screens/home/Home";
import Auth from "../components/screens/auth/Auth";
import SignUp from "../components/screens/signUp/SignUp";


export const routes = [
  {
    path: '/',
    component: Home 
  },
  {
    path: '/myday',
    component: MyDay 
  },
  {
    path: '/important',
    component: Important
  },
  {
    path: '/planned',
    component: Planned
  },
  {
    path: '/auth',
    component: Auth
  },
  {
    path: '/signup',
    component: SignUp
  }
]