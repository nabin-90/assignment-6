"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { IWorkout } from "@/types/workout";

interface PlanContextType {
  selectedWorkouts: IWorkout[];
  completedWorkouts: IWorkout[];
  savedWorkouts: IWorkout[];

  addToPlan: (workout: IWorkout) => void;
  removeFromPlan: (workoutId: number) => void;
  markAsDone: (workout: IWorkout) => void;

  saveWorkout: (workout: IWorkout) => void;
  removeFromSaved: (workoutId: number) => void;
}

const PlanContext = createContext<PlanContextType | undefined>(undefined);

export const PlanProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedWorkouts, setSelectedWorkouts] = useState<IWorkout[]>([]);

  const [completedWorkouts, setCompletedWorkouts] = useState<IWorkout[]>([]);

  const [savedWorkouts, setSavedWorkouts] = useState<IWorkout[]>([]);

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const savedPlan = localStorage.getItem("fitlog-plan");
    const savedCompleted = localStorage.getItem("fitlog-completed");
    const savedLater = localStorage.getItem("fitlog-saved");

    if (savedPlan) {
      setSelectedWorkouts(JSON.parse(savedPlan));
    }

    if (savedCompleted) {
      setCompletedWorkouts(JSON.parse(savedCompleted));
    }

    if (savedLater) {
      setSavedWorkouts(JSON.parse(savedLater));
    }

    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem("fitlog-plan", JSON.stringify(selectedWorkouts));
  }, [selectedWorkouts, hydrated]);

  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem("fitlog-completed", JSON.stringify(completedWorkouts));
  }, [completedWorkouts, hydrated]);

  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem("fitlog-saved", JSON.stringify(savedWorkouts));
  }, [savedWorkouts, hydrated]);

  // Add workout to today's plan
  const addToPlan = (workout: IWorkout) => {
    setSelectedWorkouts((prev) => {
      const alreadyAdded = prev.some((item) => item.id === workout.id);

      if (alreadyAdded) {
        return prev;
      }

      return [...prev, workout];
    });
  };

  // Remove workout from today's plan
  const removeFromPlan = (workoutId: number) => {
    setSelectedWorkouts((prev) =>
      prev.filter((workout) => workout.id !== workoutId),
    );
  };

  // Mark workout as done
  const markAsDone = (workout: IWorkout) => {
    setSelectedWorkouts((prev) =>
      prev.filter((item) => item.id !== workout.id),
    );

    setCompletedWorkouts((prev) => {
      const alreadyCompleted = prev.some((item) => item.id === workout.id);

      if (alreadyCompleted) {
        return prev;
      }

      return [...prev, workout];
    });
  };

  // Save workout
  const saveWorkout = (workout: IWorkout) => {
    setSavedWorkouts((prev) => {
      const alreadySaved = prev.some((item) => item.id === workout.id);

      if (alreadySaved) {
        return prev;
      }

      return [...prev, workout];
    });
  };

  // Remove workout from saved
  const removeFromSaved = (workoutId: number) => {
    setSavedWorkouts((prev) =>
      prev.filter((workout) => workout.id !== workoutId),
    );
  };

  return (
    <PlanContext.Provider
      value={{
        selectedWorkouts,
        completedWorkouts,
        savedWorkouts,
        addToPlan,
        removeFromPlan,
        markAsDone,
        saveWorkout,
        removeFromSaved,
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
