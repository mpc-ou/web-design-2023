import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Error from './pages/Error';
import { privateRouter, publicRouter } from './routes';
import ProtectedRoute from './components/ProtectedRoute';
import { useEffect } from 'react';
import UserProvider from './store/UserContext';

function App() {
  return (
    <Router>
      <div className='App'>
        <UserProvider>
          <Routes>
            {privateRouter.map((route, index) => {
              const Page = route.component;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <ProtectedRoute>
                      <Page />
                    </ProtectedRoute>
                  }
                />
              );
            })}
            {publicRouter.map((route, index) => {
              const Page = route.component;
              return <Route key={index} path={route.path} element={<Page />} />;
            })}
            <Route path='*' element={<Error />} />
          </Routes>
        </UserProvider>
      </div>
    </Router>
  );
}

export default App;
