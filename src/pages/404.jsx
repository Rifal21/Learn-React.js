import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex justify-center items-center min-h-screen flex-col">
      <h1 className="text-4xl text-center text-blue-600 font-bold">Opps!!</h1>
      <p className="text-2xl text-center text-slate-600 my-5">
        Sorry,Page {error.statusText || error.message}
      </p>
    </div>
  );
};

export default ErrorPage;
