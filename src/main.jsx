import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Notifications from './pages/Notifications.jsx'
import Career from './pages/Career.jsx'
import Contact from './pages/Contact.jsx'
import Events from './pages/Events.jsx'
import store from './store/store.js'
import Logout from './Components/Logout.jsx'
import Login from './Components/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import AddNotf from './Components/AddNotf.jsx'
import { Provider } from 'react-redux'
import AddEvent from './Components/AddEvent.jsx'
import Protected from './Components/Protected.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children: [
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/About',
        element:<About/>
      },
      {
        path:'/Notifications',
        element:<Notifications/>
      },
      {
        path:'/Career',
        element:<Career/>
      },
      {
        path:'/Contact',
        element:<Contact/>
      },
      {
        path:'/Events',
        element:<Events/>
      },
      {
        path:'/Login',
        element:<Login/>
      },
      {
        path:'/Logout',
        element:(
            <Protected>
              <Logout/>
            </Protected>
        )  
      },
      {
        path:'/Dashboard',
        element:(
            <Protected>
              <Dashboard/>
            </Protected>
        )  
      },
      {
        path:'/AddNotf',
        element:(
            <Protected>
              <AddNotf/>
            </Protected>
        )  
      },
      {
        path:'/AddEvent',
        element:(
            <Protected>
              <AddEvent/>
            </Protected>
        )  
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
    
  </React.StrictMode>,
)
