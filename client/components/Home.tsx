import React from 'react';
import Customer from './Customer';
import Header from './Header';
import Admin from './Admin';
import { useLocation } from 'react-router-dom';

export default function Home() {
  const [render, setRender] = React.useState<any>([]);
  const [isAdmin, setIsAdmin] = React.useState<boolean>(false);
  const { state } = useLocation();

  React.useEffect(() => {
    if (state || state !== undefined) {
      const { gmail, isadmin, strikes, isblacklisted } = state;
      console.log('gmail:', gmail);
      console.log('isadmin:', isadmin);
      setIsAdmin(isadmin);
      console.log('strikes:', strikes);
      console.log('isblacklisted:', isblacklisted);
    }
    if (isAdmin == true) {
      setRender([<Admin key="admin" />]);
    } else {
      setRender([<Customer key="customer" />]);
    }
  }, [setRender, setIsAdmin]);
  return (
    <>
      <Header />
      {render}
    </>
  );
}
