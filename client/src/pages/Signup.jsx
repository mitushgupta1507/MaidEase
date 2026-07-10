import AuthLayout from "../components/Auth/AuthLayout";
import SignupForm from "../components/Auth/SignupForm";

const Signup = () => {
  return (
    <main className="overflow-hidden">

      <AuthLayout
        title="Create Your Account 🚀"
        subtitle="Join MaidEase and hire trusted maids, babysitters and nannies with complete confidence."
      >
        <SignupForm />
      </AuthLayout>

    </main>
  );
};

export default Signup;