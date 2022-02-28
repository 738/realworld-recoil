import { ErrorResponse } from '~/@types/Error';

export const useErrorMessages = (mutationError: ErrorResponse | null) => {
  const errors = mutationError?.response?.data.errors;

  return {
    errorMessages: (
      <>
        {errors && (
          <ul className="error-messages">
            {Object.keys(errors).map((entity) => {
              return errors[entity].map((sentence) => {
                return (
                  <li key={[entity, sentence].join('-')}>
                    {entity} {sentence}
                  </li>
                );
              });
            })}
          </ul>
        )}
      </>
    ),
  };
};
