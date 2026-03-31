import Input from '../../components/general/Input';
import Button from '../../components/general/Button';
import { faKey, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';

function Register({
  username,
  password,
  setUsername,
  setPassword,
  setIsLoggedIn,
  setUserUsername,
}) {
  return (
    <>
      <div className="register-container">
        <h1>Create a new account</h1>
        <Input
          label="Username"
          icon={faUser}
          value={username}
          setValue={setUsername}
        />
        <Input
          label="Password"
          icon={faKey}
          value={password}
          setValue={setPassword}
          type="password"
        />
        <Button label="Sign Up" icon={faPlus} />
      </div>
    </>
  );
}

export default Register;
