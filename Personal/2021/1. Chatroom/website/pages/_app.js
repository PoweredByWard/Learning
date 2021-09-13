import "tailwindcss/tailwind.css";
import Nav from "../components/Nav";

function MyApp({ Component, pageProps }) {
  return (
      <div class="min-h-screen flex flex-col text-center">
        <div class="h-20">
          <Nav />
        </div>
        <div class="flex-grow bg-indigo-300">
          <Component {...pageProps} />
        </div>
      </div>
  );
}

export default MyApp;
