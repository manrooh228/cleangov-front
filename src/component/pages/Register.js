import { Link } from "react-router-dom";
import "../css/Login.css";
import React from 'react';

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(API_URL, {
                username,
                password
            });
            alert(response.data);
            navigate("/");
        } catch (error) {
            if (error.response) {
                setError(error.response.data);
            } else if (error.request) {
                setError("No response from server. Please try again later.");
            } else {
                setError("An error occurred. Please try again.");
            }
        }
    };

    return (
        <div className="LoginPage">
            <div className="wrapper">
                <h2>REGISTER</h2>
                <form onSubmit={handleSubmit}>
                    <div className = "input-box">
                        <input type='text' placeholder='Enter your username' required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className = "input-box">
                        <input type='password' placeholder='Enter your password'  required 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className = "input-box">
                        <input type='password' placeholder='Confirm your password'  required 
                        //onChange = {(e) => checkPassword()}
                        />
                    </div>
                    <div className = "policy">
                        <input type='checkbox' />
                        <h3>I accept terms & conditions</h3>
                    </div>
                    <div className="input-box button">
                        <input type="submit" value="Register" />
                    </div>
                    <div className='text'>
                        <h3>Already have an account? <Link to="/login"><a>LOGIN</a></Link></h3>
                        {error && <h3 style={{ color: "red" }}>{error}</h3>}
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Register