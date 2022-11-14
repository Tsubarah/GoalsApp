import { logoutReq } from '../authConfig'
import { useEffect } from 'react';
import { useMsal } from '@azure/msal-react';
import LoadingSpinner from '../Components/LoadingSpinner';

const LogoutPage = () => {
    const { instance, accounts} = useMsal();

    useEffect(() => {
        if (accounts) {
            instance.logoutRedirect(logoutReq)
        }
      },[]);

  return (

    <div className="logout">
        {accounts && <LoadingSpinner />}
    </div>
  )
}

export default LogoutPage
