import axios from 'axios';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useMutation } from 'react-query';
import { useForm } from 'react-hook-form';
import { NewUser, UserResponse } from '~/@types/User';
import { ErrorResponse } from '~/@types/Error';

const Register: NextPage = () => {
  const { register, handleSubmit } = useForm<NewUser>();
  const mutation = useMutation<UserResponse, ErrorResponse, NewUser>((user) => {
    return axios.post('/api/users', { user });
  });
  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  const errors = mutation.error?.response?.data.errors;

  return (
    <div>
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign up</h1>
              <p className="text-xs-center">
                <Link href="/login">
                  <a>Have an account?</a>
                </Link>
              </p>

              {errors && (
                <ul className="error-messages">
                  {Object.keys(errors).map((entity) => {
                    return <li key={entity}>That {entity} is already taken</li>;
                  })}
                </ul>
              )}

              <form onSubmit={onSubmit}>
                <fieldset className="form-group">
                  <input className="form-control form-control-lg" type="text" placeholder="Your Name" {...register('username')} />
                </fieldset>
                <fieldset className="form-group">
                  <input className="form-control form-control-lg" type="text" placeholder="Email" {...register('email')} />
                </fieldset>
                <fieldset className="form-group">
                  <input className="form-control form-control-lg" type="password" placeholder="Password" {...register('password')} />
                </fieldset>
                <button className="btn btn-lg btn-primary pull-xs-right">Sign up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
