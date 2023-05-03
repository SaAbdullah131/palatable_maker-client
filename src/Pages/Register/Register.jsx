import React,{useState} from 'react';
import signUpImage from '../../assets/Register/Sign up.gif'
import { Link } from 'react-router-dom';

const Register = () => {
    const [error,setError] = useState('');
    const user = null;

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,photo,email,password);

        setError('');
        // validation
        if(password.length<6) {
            setError('Password at least 6 character');
            return;
        }
       

    }
    return (
        <div>
            <h4 className='text-center mt-10 p-2 text-3xl font-bold'>Please Register</h4>
            <div className="hero min-h-screen bg-base-100 ">
                <div className="hero-content flex">
                    <div className="card flex-shrink-0 w-[100%] h-full max-w-sm shadow-2xl bg-base-100 border border-indigo-400">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Enter Your Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="Enter photo url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Enter Your Email" className="input input-bordered"required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Enter Your password" className="input input-bordered"required />
                            </div>
                            <div className="form-control mt-4">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <p className='font-semibold'>Already Have An Account ? <Link to='/login' className='text-blue-400 font-semibold'>Login</Link></p>
                            <p>{error}</p>
                        </form>

                    </div>
                    <img className='w-50' src={signUpImage} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Register;