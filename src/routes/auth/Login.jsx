import Input from './../../components/general/Input';
import Button from './../../components/general/Button';
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';

function Login({ username, password, setUsername, setPassword }) {
  return (
    <>
      <div className="login-container">
        <h1>Sign in with your account</h1>
        <Input
          label="Username"
          icon={faUser}
          value={username}
          setValue={setUsername}
          inputAttributes={{ autoComplete: 'username' }}
        />
        <Input
          label="Password"
          icon={faKey}
          type="password"
          value={password}
          setValue={setPassword}
          inputAttributes={{ autoComplete: 'current-password' }}
        />
        <Button label="Sign In" icon={faKey} />
      </div>
    </>
  );
}

export default Login;
