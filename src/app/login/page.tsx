import LoginForm from "@/components/login-form";

export default function Login() {
  return (
    <main className="flex flex-col items-center bg-green-800 h-dvh">
      <section className="flex flex-col items-center p-10 pb-10 my-auto bg-black shadow-2xl">
        <div className="text-6xl font-semibold m-10 text-green-600 mb-10">LOGIN</div>
        <LoginForm />
      </section>
    </main>
  );
}
