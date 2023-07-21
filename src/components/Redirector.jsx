// Redirector.jsx
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Redirector() {
  const navigate = useNavigate();
  const location = useLocation();
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    // Check if the current location is the initial home page
    const isHomePage = location.pathname === '/';
    console.log('Current location:', location.pathname);
    // Perform the redirect after a certain delay only on the initial home page
    if (isHomePage) {
      const redirectDelay = setTimeout(() => {
        setShouldRedirect(true);
      }, 300);

      return () => {
        clearTimeout(redirectDelay);
      };
    }
  }, [location.pathname]);

  useEffect(() => {
    // Redirect to the home page if the flag is set
    if (shouldRedirect) {
      console.log('Redirecting to /home...');
      navigate('/home');
    }
  }, [navigate, shouldRedirect]);

  return null;
}

export default Redirector;
