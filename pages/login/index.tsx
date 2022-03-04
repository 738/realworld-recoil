import axios from 'axios';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { useForm } from 'react-hook-form';

import { LoginUser, UserResponse } from '~/@types/User';
import { ErrorResponse } from '~/@types/Error';
import { useAuth, useErrorMessages } from '~/hooks';

const Login: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<LoginUser>();
  const { login } = useAuth();

  const mutation = useMutation<{ data: UserResponse }, ErrorResponse, LoginUser>(
    (user) => {
      return axios.post('/api/users/login', { user });
    },
    {
      onSuccess: (result) => {
        login(result.data.user);
        router.push('/');
      },
    },
  );

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  const { errorMessages } = useErrorMessages(mutation.error);

  return (
    <div>
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign in</h1>
              <p className="text-xs-center">
                <Link href="/register">
                  <a href="">Need an account?</a>
                </Link>
              </p>

              {errorMessages}

              <form onSubmit={onSubmit}>
                <fieldset className="form-group">
                  <input className="form-control form-control-lg" type="text" placeholder="Email" {...register('email')} />
                </fieldset>
                <fieldset className="form-group">
                  <input className="form-control form-control-lg" type="password" placeholder="Password" {...register('password')} />
                </fieldset>
                <button className="btn btn-lg btn-primary pull-xs-right">Sign in</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
