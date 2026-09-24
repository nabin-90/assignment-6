"use client";

import { createContext, useContext, useState } from "react";
import type { IWorkout } from "@/types/workout";

interface PlanContextType {
  selectedWorkouts: IWorkout[];
  addToPlan: (workout: IWorkout) => void;
  removeFromPlan: (workoutId: number) => void;
}

const PlanContext = createContext<PlanContextType | undefined>(
  undefined,
);

export const PlanProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedWorkouts, setSelectedWorkouts] = useState<IWorkout[]>(
    [],
  );

  const addToPlan = (workout: IWorkout) => {
    setSelectedWorkouts((prev) => {
      const alreadyAdded = prev.some(
        (item) => item.id === workout.id,
      );

      if (alreadyAdded) {
        return prev;
      }

      return [...prev, workout];
    });
  };

  const removeFromPlan = (workoutId: number) => {
    setSelectedWorkouts((prev) =>
      prev.filter((workout) => workout.id !== workoutId),
    );
  };

  return (
    <PlanContext.Provider
      value={{
        selectedWorkouts,
        addToPlan,
        removeFromPlan,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
};

export const usePlan = () => {
  const context = useContext(PlanContext);

  if (!context) {
    throw new Error("usePlan must be used inside PlanProvider");
  }

  return context;
};