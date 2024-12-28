interface IThrowError {
  error: string;
  name: string;
}

export const ThrowError = ({ error, name }: IThrowError) => {
  const err = new Error();
  err.message = error;
  err.name = name;
  throw err;
};
