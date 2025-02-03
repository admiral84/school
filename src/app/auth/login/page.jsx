import LoginForm from "@/components/loginForm/LoginForm";

function Page() {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-heading mb-6">
        Login
      </h1>
      <LoginForm />
    </div>
  );
}

export default Page;
