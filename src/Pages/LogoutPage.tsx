import { logoutReq } from '../authConfig'
import { useEffect } from 'react';
import { useMsal } from '@azure/msal-react';

const LogoutPage = () => {
    const { instance, accounts} = useMsal();

    useEffect(() => {
        if (accounts) {
            instance.logoutRedirect(logoutReq)
        }
      },[]);

  return (
    <div className="logout">
 
    </div>
  )
}

export default LogoutPage
