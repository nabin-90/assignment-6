"use client";

import type { IWorkout } from "@/types/workout";
import { usePlan } from "@/context/PlanContext";

interface AddToPlanButtonProps {
  workout: IWorkout;
}

const AddToPlanButton = ({
  workout,
}: AddToPlanButtonProps) => {
  const { selectedWorkouts, addToPlan } = usePlan();

  const isAdded = selectedWorkouts.some(
    (item) => item.id === workout.id,
  );

  const handleAddToPlan = () => {
    addToPlan(workout);
  };

  return (
    <button
      onClick={handleAddToPlan}
      disabled={isAdded}
      className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
        isAdded
          ? "cursor-not-allowed bg-[#292c32] text-[#9b9da5]"
          : "bg-[#c2f800] text-black hover:bg-[#a8d900]"
      }`}
    >
      {isAdded ? "✓ Added to today's plan" : "⊞ Add to today's plan"}
    </button>
  );
};

export default AddToPlanButton;