import RegisterForm from "@/components/register-form";

export default function Register() {
  return (
    <main className="flex flex-col items-center bg-green-800 h-dvh">
      <section className="flex flex-col items-center p-10 my-auto bg-black shadow-2xl">
        <div className="text-6xl font-semibold m-10 text-green-600">
          SIGN UP
        </div>
        <RegisterForm />
      </section>
    </main>
  );
}
