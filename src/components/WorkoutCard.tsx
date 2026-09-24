import type { IWorkout } from "@/types/workout";
import Image from "next/image";

interface WorkoutCardProps {
  workout: IWorkout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <div className="rounded-xl border border-[#292c32] bg-[#15171c] p-4">
      <Image
        src={workout.image}
        alt={workout.name}
        width={700}
        height={400}
        className="h-52 w-full rounded-lg object-cover"
      />
      <h3 className="text-xl font-bold text-white">{workout.name}</h3>

      <div className="mt-4 flex items-center justify-between text-sm text-[#9b9da5]">
        <span>{workout.difficulty}</span>
        <span>{workout.duration} min</span>
        <span>{workout.caloriesBurned} kcal</span>
      </div>

      <div className="mt-3 text-sm text-[#c2f800]">★ {workout.rating}</div>

      <p className="mt-2 text-[#9b9da5]">{workout.description}</p>
    </div>
  );
};

export default WorkoutCard;
