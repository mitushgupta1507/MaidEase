import AuthLayout from "../components/Auth/AuthLayout";
import LoginForm from "../components/Auth/LoginForm";

const Login = () => {
  return (
    <main className="overflow-hidden">

      <AuthLayout
        title="Welcome Back 👋"
        subtitle="Login to access your bookings, favourite helpers and profile."
      >
        <LoginForm />
      </AuthLayout>

    </main>
  );
};

export default Login;