import AuthLayout from "../Component/Layout/AuthLayouts";
import FormLogin from "../Component/Fragment/FormLogin";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <FormLogin />
      <p className="text-sm mt-5 text-center">
      Durung Ndue Akun..?{" "} 
        <Link to="/register" className="font-bold text-red-600">
          Register Sek..
        </Link>
      </p>
    </AuthLayout>
  );
};

export default LoginPage;