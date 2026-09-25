import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#0f1013] px-4 text-white">
      <div className="text-center">
        <p className="text-sm font-bold tracking-[0.2em] text-[#c2f800]">
          FITLOG
        </p>

        <h1 className="mt-3 text-7xl font-black tracking-tight sm:text-8xl">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-bold uppercase">
          Workout Not Found
        </h2>

        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#9b9da5]">
          The page you are looking for does not exist or the workout
          could not be found.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block rounded-full bg-[#c2f800] px-6 py-3 text-sm font-bold text-black transition hover:bg-[#a8d900]"
        >
          Back to Workouts
        </Link>
      </div>
    </main>
  );
};

export default NotFound;