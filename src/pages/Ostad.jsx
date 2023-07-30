
import { useAuth } from '../context/auth';
import { useUser } from '../context/user';

const Ostad = () => {
    const [user,setUser]=useUser();
    const [auth,setAuth]=useAuth()
    return (
        <div>
            <pre>
                {JSON.stringify(user,null,4)}
            </pre>
            <hr/>
            <pre>
                {JSON.stringify(auth,null,4)}
            </pre>
        </div>
    );
};

export default Ostad;