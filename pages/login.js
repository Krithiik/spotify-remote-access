import { getProviders, signIn } from "next-auth/react";

function Login({ providers }) {
  return (
    <div className="flex flex-col items-center min-h-screen w-fll justify-center bg-black">
      {/* <p className="text-white p-4">
        Try to login with username/email and password, if there is any trouble
        logging in with other ways.
      </p> */}
      <img className="w-52 mb-5" src="https://i.imgur.com/fPuEa9V.png" alt="" />

      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className="bg-[#18D860] text-white p-5 rounded-full"
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Login;

//Runs before the page loads (server side render)
export async function getServerSideProps() {
  //set up providers in next-auth before page render.
  const providers = await getProviders();
  //return providers to props of Login
  return {
    props: {
      providers,
    },
  };
}
