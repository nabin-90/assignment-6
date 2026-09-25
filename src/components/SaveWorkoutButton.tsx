"use client";

import toast from "react-hot-toast";
import type { IWorkout } from "@/types/workout";
import { usePlan } from "@/context/PlanContext";

interface SaveWorkoutButtonProps {
  workout: IWorkout;
}

const SaveWorkoutButton = ({ workout }: SaveWorkoutButtonProps) => {
  const { savedWorkouts, saveWorkout } = usePlan();

  const isSaved = savedWorkouts.some((item) => item.id === workout.id);

  const handleSave = () => {
    saveWorkout(workout);
    toast.success("Saved for later");
  };

  return (
    <button
      onClick={handleSave}
      disabled={isSaved}
      className={`rounded-lg border px-4 py-2 text-sm font-medium transition ${
        isSaved
          ? "cursor-not-allowed border-[#292c32] text-[#9b9da5]"
          : "border-[#9b9da5] text-white hover:border-white"
      }`}
    >
      {isSaved ? "✓ Saved" : "♧ Save for later"}
    </button>
  );
};

export default SaveWorkoutButton;
