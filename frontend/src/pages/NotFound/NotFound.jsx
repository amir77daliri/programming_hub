import { useRouteError } from "react-router-dom";

const NotFound = () => {
    const error = useRouteError();
    //console.error(error);

    return (
        <div id="error-page" className="text-center mt-10">
            <h1> صفحه مورد نظر یافت نشد 🤷‍♂️</h1>
            <p>
                صفحه ایی که دنبالش هستی رو نمیتونیم پیدا کنم. مطمئنی درست اومدی
                ؟؟ 
            </p>
            <p>
                <i>{error.statusText || error.message} 404</i>
            </p>
        </div>
    );
}

export default NotFound;