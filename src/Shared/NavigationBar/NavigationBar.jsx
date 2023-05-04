
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { Tooltip } from 'react-tooltip';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user);

    // log out..
    const handleLogOut = (event) => {
        event.preventDefault();
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    return (
        <div className="navbar bg-violet-50 mt-3 mb-5 flex justify-between rounded-md min-h-fit">
            <div className='ml-3'>
                <Link to='/'><span className='font-bold text-2xl text-black'>Palatable</span><span className='font-bold text-2xl text-blue-700'>Maker</span></Link>
            </div>
            <div>
                <Link className='mr-5 hover:text-blue-600 font-bold' to='/'>Home</Link>
                <Link className='ml-5 hover:text-blue-600 font-bold' to='/blogs'>Blog</Link>
            </div>

            <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {
                                user ? <>
                                    <img className='my-element' src={user.photoURL} />
                                    <Tooltip anchorSelect='.my-element' place='right'>
                                        {user.displayName}
                                    </Tooltip>
                                </> :
                                    <img src="https://thumbs.dreamstime.com/b/flat-male-avatar-image-beard-hairstyle-businessman-profile-icon-vector-179285629.jpg" />
                            }

                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        {
                            user ? <>

                                <Link className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>

                                <Link>Settings</Link>
                                <Link to='/'>Logout</Link>

                            </> :
                                ''
                        }

                    </ul>
                </div>
                {
                    user ?
                        <div>
                            <Link onClick={handleLogOut} to='/'>
                                <button className='font-bold bg-violet-600 text-white rounded-xl py-3 px-8'>
                                    LogOut
                                </button>
                            </Link>
                        </div> :
                        <div>
                            <Link to='/login'>
                                <button className='font-bold bg-violet-600 text-white rounded-xl py-3 px-8'>
                                    LogIn</button>
                            </Link>
                        </div>
                }
            </div>
        </div>

    );
};

export default NavigationBar;