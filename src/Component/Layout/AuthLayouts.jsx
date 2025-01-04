const AuthLayout = (props) => {
  const{children, title} = props;
    return(
      <div className="text-2xl flex justify-center min-h-screen items-center">
        <div className="w-full max-w-xs">
          <h1 className="text-3xl font-bold mb-2 text-red-600">{title}</h1>
          <p className="font-medium text-slate-500 text-sm">
          Assalamualaikum Dekk..🙏
          </p>
          {children}
        </div>
      </div> 
    );
};

export default AuthLayout;