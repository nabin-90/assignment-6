import { getWorkouts } from "@/lib/api";
import WorkoutGrid from "./WorkoutGrid";

const WorkoutLibrary = async () => {
  const workouts = await getWorkouts();

  return (
    <section id="library" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1800px]">
        {/* Section Header */}
        <div className="mb-10">
          <p className="mb-3 text-sm font-bold tracking-wider text-[#c2f800]">
            TRAIN SMART
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Workout Library
          </h2>
        </div>

        {/* Workout Cards */}
        <WorkoutGrid workouts={workouts} />
      </div>
    </section>
  );
};

export default WorkoutLibrary;