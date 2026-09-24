"use client";

import { useState } from "react";
import type { IWorkout } from "@/types/workout";
import WorkoutCard from "./WorkoutCard";

interface WorkoutGridProps {
  workouts: IWorkout[];
}

const WorkoutGrid = ({ workouts }: WorkoutGridProps) => {
  const [selectedWorkouts, setSelectedWorkouts] = useState<IWorkout[]>([]);

  const handleAddToPlan = (workout: IWorkout) => {
    setSelectedWorkouts((prev) => [...prev, workout]);
  };

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {workouts.map((workout) => (
        <WorkoutCard
          key={workout.id}
          workout={workout}
          onAddToPlan={handleAddToPlan}
        />
      ))}
    </div>
  );
};

export default WorkoutGrid;