import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAsync } from "../../features/Auth/AuthSlice";
import { removeError } from "../../features/Auth/AuthSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(isAuthenticated)
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("ایمیل یا رمز عبور نمیتواند خالی باشد");
      return;
    }
    let loginData = {
      email: email,
      password: password,
    };

    dispatch(loginAsync(loginData));
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            ورود به حساب کاربری
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            {error && (
              <div className="text-red-500 p-1">
                <h2 className="text-lg">{error}</h2>
                <hr />
              </div>
            )}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                آدرس ایمیل
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  placeholder="ایمیل خود را وارد نمایید.."
                  autoComplete="email"
                  value={email}
                  onChange={(e) => {
                    if(error) {
                      dispatch(removeError())
                    }
                    setEmail(e.target.value)
                  }}
                  required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  رمز عبور
                </label>
                <div className="text-sm">
                  <Link
                    to={"#"}
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    فراموشی رمز عبور
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                placeholder="رمز خود را وارد نمایید.."
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={handleSubmitForm}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                ورود
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            عضو نیستید ؟{" "}
            <Link
              to={"#"}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              ثبت نام کنید
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
