import { NextPageContext } from 'next/types';

const Error = () => <h1>error</h1>;

Error.getInitialProps = async (context: NextPageContext) => {
  const { res, err } = context;
  const statusCode = res ? res.statusCode : (err ? err.statusCode : 404);

  return {
    statusCode,
  };
};

export default Error;
