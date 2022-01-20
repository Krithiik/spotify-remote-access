import { getProviders, signIn } from "next-auth/react";

function Login({ providers }) {
  return (
    <div className="md:grid grid-cols-2 justify-center min-h-screen w-fill bg-black p-10 space-y-10">
      <div className="flex flex-col items-center justify-center  text-white space-y-4">
        <h2 className="text-lg md:text-2xl text-white font-semibold">
          Terms and conditions
        </h2>
        <h3 className="text-lg font-medium">
          Since spotify provide API only for remote access:
        </h3>
        <p>
          - You need a Premium Account inorder to play music through Spotify API
        </p>
        <p>
          - Another device with spotify must be up and running inorder to
          continue.
        </p>
        <p>
          - Try to login with username/email and password, if there is any
          trouble logging in with other ways.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img
          className="w-52 mb-5 "
          src="https://i.imgur.com/fPuEa9V.png"
          alt=""
        />

        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              className="bg-[#18D860] text-white p-5 rounded-full font-semibold text-base"
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            >
              Login with {provider.name}
            </button>
          </div>
        ))}
      </div>
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
