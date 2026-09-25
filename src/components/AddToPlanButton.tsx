"use client";

import toast from "react-hot-toast";
import type { IWorkout } from "@/types/workout";
import { usePlan } from "@/context/PlanContext";
import { FiCalendar } from "react-icons/fi";

interface AddToPlanButtonProps {
  workout: IWorkout;
}

const AddToPlanButton = ({ workout }: AddToPlanButtonProps) => {
  const { selectedWorkouts, addToPlan } = usePlan();

  const isAdded = selectedWorkouts.some((item) => item.id === workout.id);

  const handleAddToPlan = () => {
    addToPlan(workout);
    toast.success("Added to today's plan");
  };

  return (
    <button
      onClick={handleAddToPlan}
      disabled={isAdded}
      className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition ${
        isAdded
          ? "cursor-not-allowed bg-[#292c32] text-[#9b9da5]"
          : "bg-[#c2f800] text-black hover:bg-[#a8d900]"
      }`}
    >
      <FiCalendar className="h-5 w-5" />

      {isAdded ? "Added to today's plan" : "Add to today's plan"}
    </button>
  );
};

export default AddToPlanButton;