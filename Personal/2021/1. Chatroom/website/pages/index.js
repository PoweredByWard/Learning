import config from "../config.json"


export default function Home() {
  return (
    <div className="h-screen w-full bg-gray-100">
      <div className=" mt-10 w-full flex flex-col justify-center">
        <div className="mx-96 shadow-2xl rounded-xl bg-gray-400 p-10">
          <h2 className="text-lg text-center pb-5 font-semibold">
            Choose an option
          </h2>
          <div className="flex pb-10 justify-center">
            <p className="mr-9  w-64">
              {config.name} concept is a great way to meet new friends, even while
              practicing social distancing. When you use {config.name}, you are paired
              randomly with another person to talk one-on-one. If you prefer,
              you can add your interests and you’ll be randomly paired with
              someone who selected some of the same interests.
            </p>
            <img
              className="h-64"
              src="https://st4.depositphotos.com/3396639/20748/i/600/depositphotos_207484878-stock-photo-female-best-friends-watching-movie.jpg"
            />
          </div>
          <div className="flex justify-center">
            <a href="/chat" className="bg-blue-400 rounded-md shadow-lg px-4 py-2 mr-5 cursor-pointer text-lg font-semibold">
              Chat
            </a>
            <a href="/video" className="bg-red-400 rounded-md shadow-lg px-4 py-2 ml-5 cursor-pointer text-lg font-semibold">
              Video
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
