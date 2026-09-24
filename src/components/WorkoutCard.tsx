import Link from "next/link";
import type { IWorkout } from "@/types/workout";
import Image from "next/image";

interface WorkoutCardProps {
  workout: IWorkout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link
      href={`/exercise/${workout.id}`}
      className="group block h-full"
    >
      <div className="flex h-full flex-col overflow-hidden rounded-xl border border-[#292c32] bg-[#1a1d22] transition hover:border-[#c2f800]">

        {/* Image */}
        <div className="relative h-60 w-full">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover transition duration-300 group-hover:scale-[1.02]"
          />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6">

          {/* Muscle Groups */}
          <div className="flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#c2f800] px-3 py-1 text-sm font-medium text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Workout Name */}
          <h3 className="mt-4 text-2xl font-bold uppercase tracking-wide text-white">
            {workout.name}
          </h3>

          {/* Equipment */}
          <p className="mt-4 text-base text-[#9b9da5]">
            {workout.equipment}
          </p>

          {/* Stats */}
          <div className="mt-5 flex items-center gap-6 text-base text-white">

            <span className="flex items-center gap-2">
              <span className="text-xl text-[#c2f800]">◷</span>
              {workout.duration} min
            </span>

            <span className="flex items-center gap-2">
              <span className="text-xl text-[#c2f800]">♨</span>
              {workout.caloriesBurned} kcal
            </span>

            <span className="flex items-center gap-2">
              <span className="text-xl text-[#c2f800]">☆</span>
              {workout.rating}
            </span>

          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;