import type { IWorkout } from "@/types/workout";
import Image from "next/image";

interface WorkoutCardProps {
  workout: IWorkout;
  onAddToPlan: (workout: IWorkout) => void;
}

const WorkoutCard = ({ workout, onAddToPlan }: WorkoutCardProps) => {
  return (
    <div className="flex h-full flex-col rounded-xl border border-[#292c32] bg-[#15171c] p-4">
      <Image
        src={workout.image}
        alt={workout.name}
        width={700}
        height={400}
        className="h-52 w-full rounded-lg object-cover"
      />

      <h3 className="mt-3 text-xl font-bold text-white">{workout.name}</h3>

      <div className="mt-4 flex items-center justify-between text-sm text-[#9b9da5]">
        <span>{workout.difficulty}</span>
        <span>{workout.duration} min</span>
        <span>{workout.caloriesBurned} kcal</span>
      </div>

      <div className="mt-3 text-sm text-[#c2f800]">★ {workout.rating}</div>

      <p className="mt-2 flex-1 text-[#9b9da5]">{workout.description}</p>

      <button
        onClick={() => onAddToPlan(workout)}
        className="mt-4 w-full rounded-lg bg-[#c2f800] py-2 font-semibold text-black transition hover:bg-[#a8d900]"
      >
        Add to Plan
      </button>
    </div>
  );
};

export default WorkoutCard;
