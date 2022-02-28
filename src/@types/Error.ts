import { components, operations } from '.';

// type GenericErrorModel = components['schemas']['GenericErrorModel'];
export type ErrorResponse = {
  response: {
    data: {
      errors: {
        [key: string]: string[];
      };
    };
  };
};
