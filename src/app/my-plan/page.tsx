"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePlan } from "@/context/PlanContext";
import toast from "react-hot-toast";

const MyPlanPage = () => {
  const {
    selectedWorkouts,
    savedWorkouts,
    removeFromPlan,
    markAsDone,
    removeFromSaved,
  } = usePlan();

  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

  const displayedWorkouts =
    activeTab === "today" ? selectedWorkouts : savedWorkouts;

  const totalMinutes = displayedWorkouts.reduce(
    (total, workout) => total + workout.duration,
    0,
  );

  const totalCalories = displayedWorkouts.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  return (
    <main className="min-h-screen bg-[#0f1013] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1080px]">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
            My Plan
          </h1>

          <p className="mt-2 text-sm text-[#9b9da5]">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-8 grid grid-cols-3 overflow-hidden rounded-xl border border-[#292c32] bg-[#15171c]">
          {/* Exercises */}
          <div className="border-r border-[#292c32] px-5 py-7 sm:px-8">
            <p className="text-xs text-[#9b9da5]">Exercises</p>

            <p className="mt-1 text-3xl font-bold text-[#c2f800] sm:text-4xl">
              {selectedWorkouts.length}
            </p>
          </div>

          {/* Minutes */}
          <div className="border-r border-[#292c32] px-5 py-7 sm:px-8">
            <p className="text-xs text-[#9b9da5]">Minutes</p>

            <p className="mt-1 text-3xl font-bold sm:text-4xl">
              {totalMinutes}
            </p>
          </div>

          {/* Calories */}
          <div className="px-5 py-7 sm:px-8">
            <p className="text-xs text-[#9b9da5]">Calories</p>

            <p className="mt-1 text-3xl font-bold sm:text-4xl">
              {totalCalories}
            </p>
          </div>
        </div>

        {/* Tabs + Sort */}
        <div className="mb-5 flex items-center justify-between gap-4">
          {/* Tabs */}
          <div className="flex rounded-lg border border-[#292c32] bg-[#15171c] p-1">
            <button
              onClick={() => setActiveTab("today")}
              className={`rounded-md px-4 py-2 text-xs font-semibold transition ${
                activeTab === "today"
                  ? "bg-[#252932] text-white"
                  : "text-[#8f929b]"
              }`}
            >
              Today&apos;s Plan
            </button>

            <button
              onClick={() => setActiveTab("saved")}
              className={`rounded-md px-4 py-2 text-xs font-semibold transition ${
                activeTab === "saved"
                  ? "bg-[#252932] text-white"
                  : "text-[#8f929b]"
              }`}
            >
              Saved
            </button>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <span className="hidden text-xs text-[#858892] sm:block">
              Sort By
            </span>

            <button className="flex items-center gap-2 rounded-lg border border-[#292c32] bg-[#15171c] px-3 py-2 text-xs text-white">
              Duration
              <span className="text-[#858892]">⌄</span>
            </button>
          </div>
        </div>

        {/* Empty State */}
        {displayedWorkouts.length === 0 ? (
          <div className="flex min-h-[270px] flex-col items-center justify-center rounded-xl border border-dashed border-[#292c32] text-center">
            <h2 className="text-xl font-black uppercase">Nothing Here Yet</h2>

            <p className="mt-2 text-sm text-[#8f929b]">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/#library"
              className="mt-5 rounded-full bg-[#c2f800] px-6 py-2.5 text-xs font-bold text-black transition hover:bg-[#a8d900]"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          /* Workout List */
          <div className="space-y-4">
            {displayedWorkouts.map((workout) => (
              <div
                key={workout.id}
                className="flex flex-col gap-4 rounded-xl border border-[#292c32] bg-[#15171c] p-4 sm:flex-row sm:items-center"
              >
                {/* Image */}
                <div className="relative h-20 w-full shrink-0 overflow-hidden rounded-lg sm:h-20 sm:w-32">
                  <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Workout Info */}
                <div className="min-w-0 flex-1">
                  <h2 className="text-base font-black uppercase">
                    {workout.name}
                  </h2>

                  <p className="mt-0.5 text-xs text-[#8f929b]">
                    {workout.equipment}
                  </p>

                  {/* Stats */}
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-[#c2c4ca]">
                    <span className="flex items-center gap-1">
                      <span className="text-[#c2f800]">◷</span>
                      {workout.duration} min
                    </span>

                    <span className="flex items-center gap-1">
                      <span className="text-[#c2f800]">♨</span>
                      {workout.caloriesBurned} kcal
                    </span>

                    <span className="flex items-center gap-1">
                      <span className="text-[#c2f800]">☆</span>
                      {workout.rating}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  <Link
                    href={`/exercise/${workout.id}`}
                    className="rounded-full border border-[#3a3d44] px-4 py-2 text-xs font-medium text-white transition hover:border-white"
                  >
                    View Details
                  </Link>

                  {activeTab === "today" && (
                    <button
                      onClick={() => {
                        markAsDone(workout);
                        toast.success("Workout marked as done");
                      }}
                      className="rounded-full bg-[#c2f800] px-4 py-2 text-xs font-bold text-black transition hover:bg-[#a8d900]"
                    >
                      ✓ Mark as Done
                    </button>
                  )}

                  <button
                    onClick={() => {
                      if (activeTab === "today") {
                        removeFromPlan(workout.id);
                        toast.success("Workout removed from today's plan");
                      } else {
                        removeFromSaved(workout.id);
                        toast.success("Workout removed from saved");
                      }
                    }}
                    className="px-1 text-lg text-[#858892] transition hover:text-white"
                    aria-label={`Remove ${workout.name}`}
                  >
                    ×
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default MyPlanPage;
