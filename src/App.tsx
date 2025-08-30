import './App.css';
import './assets/css/themes.scss';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { Tooltip } from "bootstrap";
import { ToastContainer } from 'react-toastify';
import { APP_ROUTES } from '@core/routing/routes';

function App() {

  useEffect(() => {
    // Enable tooltips after component mounts
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
      new Tooltip(tooltipTriggerEl);
    });
  }, []);


  const renderRoutes = (routes: Array<any>) => {
    return routes.map((route, index) => {
      const {
        path,
        component: Component,
        guard: Guard,
        redirectTo,
        children
      } = route;

      if (redirectTo) {
        return (
          <Route
            key={index}
            path={path}
            element={<Navigate to={redirectTo} replace />}
          />
        );
      }

      let element;
      if (Component) {
        element = <Component />;
      } else {
        console.warn(`Missing component for path: ${path}`);
        element = <></>;
      }

      if (Guard) {
        element = <Guard>{element}</Guard>;
      }

      return (
        <Route key={index} path={path} element={element}>
          {children && renderRoutes(children)}
        </Route>
      );
    });
  };


  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <BrowserRouter>
        <Routes>
          {renderRoutes(APP_ROUTES)}
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
