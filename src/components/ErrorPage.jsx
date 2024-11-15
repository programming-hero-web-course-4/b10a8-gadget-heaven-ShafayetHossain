import error_img from '../assets/404-error.jpg'
const ErrorPage = () => {
    return (
        <div className='h-svh flex justify-center items-center w-1/2 m-auto'>
            <div className='bg-slate-200 p-5 rounded-xl'>
            <img className='rounded-xl' src={error_img} alt="" />


            </div>
        </div>
    );
};

export default ErrorPage;