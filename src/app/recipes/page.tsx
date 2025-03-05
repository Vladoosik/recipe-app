import Link from "next/link";
import {Suspense} from "react";
import {fetchData} from "@/api/fetchData";
import ErrorState from "@/components/errorState";
import Loader from "@/components/loader";

const Recipes = async ({ searchParams }: { searchParams: { query?: string; cuisine?: string; duration?: string } }) => {
  const query = searchParams.query || "";
  const cuisine = searchParams.cuisine || "";
  const duration = searchParams.duration || "";

  const apiKey = process.env.API_KEY;
  const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&cuisine=${cuisine}&maxReadyTime=${duration}&apiKey=${apiKey}`;
  const data = await fetchData(apiUrl);

  if (!data) {
    return <ErrorState />;
  }

  return (
      <div className="h-screen bg-gradient-to-b from-gray-900 to-black">
    <div className="w-full flex justify-center p-10 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.results?.length > 0 ? (
          data.results.map((item: any) => (
            <Link
              key={item.id}
              href={`/recipes/${item.id}`}
              className="cursor-pointer bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover rounded-md mb-4"
                style={{ objectFit: "cover" }}
              />
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
            </Link>
          ))
        ) : (
          <div className="flex flex-col w-screen items-center justify-center text-gray-200 mt-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-24 w-24 text-gray-500 mb-4 animate-bounce"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <h2 className="text-2xl font-semibold">No recipes found</h2>
            <p className="mt-2 text-center text-gray-300">
              Try searching for something else or check your filters!
            </p>
            <Link
                href="/"
                className="mt-5 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
            >
              Go Back to Home
            </Link>
          </div>
        )}
      </div>
    </div>
      </div>
  );
}

const SuspenseWrapper = (props: any) => {
  return (
      <Suspense fallback={<Loader/>}>
        <Recipes {...props} />
      </Suspense>
  );
};

export default SuspenseWrapper;
