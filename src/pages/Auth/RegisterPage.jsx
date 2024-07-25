import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const RegisterPage = () => {
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const { setIsAuth } = useContext(AuthContext);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onRegister = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Basic validation
    if (!username || !email || !password) {
      setError("All fields are required");
      return;
    }

    try {
      const response = await axios.post(import.meta.env.VITE_API_REGISTER, {
        fullName: username,
        email,
        password,
      });

      if (response.data.token) {
        localStorage.setItem('token', JSON.stringify(response.data.token));
        localStorage.setItem('user', JSON.stringify(response.data.data));
        setIsAuth(true);
        navigate('/');
      }
    } catch (error) {
      setError("Registration error: " + (error?.response?.data?.message || error.message));
    }
  };

  return (
    <div className="h-screen flex items-center justify-center w-full text-black">
      <div className="shadow-lg rounded-xl w-full tablet:w-2/3 laptop:w-1/3 mx-9">
        <form onSubmit={onRegister} className="flex flex-col gap-4 p-3 w-full h-[600px] bg-white shadow-lg border border-[#97979752] rounded-xl">
          <img src="/logoo.png" className="object-contain w-full h-20 select-none" alt="Logo" />
          <p className="text-2xl font-bold text-center">Register to continue</p>
          <input
            className="h-16 font-semibold rounded-lg text-black border placeholder:text-gray-600 px-2 outline-none text-xl"
            type="text"
            placeholder="Username"
            name="username"
            required
          />
          <input
            className="h-16 font-semibold rounded-lg text-black border placeholder:text-gray-600 px-2 outline-none text-xl"
            type="email"
            placeholder="Email"
            name="email"
            required
          />
          <div className="w-full flex items-center">
            <input
              className="py-4 font-semibold text-black border border-r-0 rounded-l-lg placeholder:text-gray-600 w-5/6 px-2 outline-none text-xl"
              type={hiddenPassword ? "password" : "text"}
              placeholder="Password"
              name="password"
              required
            />
            <FontAwesomeIcon
              onClick={() => setHiddenPassword(!hiddenPassword)}
              className="text-xl rounded-r-lg border border-l-0 cursor-pointer text-black bg-white py-5 w-16 px-2"
              icon={hiddenPassword ? faEyeSlash : faEye}
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button className="w-full text-xl border bg-blue-500 h-16 rounded-2xl text-white font-semibold active:scale-95">
            Continue
          </button>
          <p className="text-2xl font-normal select-none text-center">Or continue with:</p>
          <div className="flex justify-evenly">
            <img className="w-8 h-8 cursor-pointer select-none object-contain" src="/google.png" alt="Google" />
            <img className="w-8 h-8 cursor-pointer select-none object-contain" src="/microsoft.png" alt="Microsoft" />
            <img className="w-8 h-8 cursor-pointer select-none object-contain" src="/apple.png" alt="Apple" />
            <img className="w-8 h-8 cursor-pointer select-none object-contain" src="/slarck.png" alt="Slack" />
          </div>
          <Link
            className="text-xl font-normal text-end self-end bg-blue-500 select-none h-12 w-1/3 flex items-center justify-center rounded-lg active:scale-95 text-white"
            to="/login"
          >
            Or login
          </Link>
        </form>
      </div>
      <img className="absolute hidden tablet:block tablet:w-1/3 bottom-0 left-0 -z-10 select-none" src="/left.png" alt="" />
      <img className="absolute hidden tablet:block tablet:w-1/3 bottom-0 right-0 -z-10 select-none" src="/right.png" alt="" />
    </div>
  );
};

export default RegisterPage;
