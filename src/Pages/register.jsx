import AuthLayout from "../Component/Layout/AuthLayouts";
import FormRegister from "../Component/Fragment/FormRegister";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <FormRegister />
      <p className="text-sm mt-5 text-center">
      Wes Ndue Akun..?{" "} 
        <Link to="/login" className="font-bold text-red-600">
          Login Sek..
        </Link>
      </p>
    </AuthLayout>
  );
};

export default RegisterPage;