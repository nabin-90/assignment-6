import { getWorkouts } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ExerciseDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const ExerciseDetailsPage = async ({ params }: ExerciseDetailsPageProps) => {
  const { id } = await params;

  const workouts = await getWorkouts();

  const workout = workouts.find((item) => item.id.toString() === id);

  if (!workout) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0f1013] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Back */}
        <Link
          href="/#library"
          className="mb-6 inline-block text-sm text-[#9b9da5] transition hover:text-[#c2f800]"
        >
          ← Back to Workout Library
        </Link>

        {/* Main Layout */}
        <div className="grid items-stretch gap-8 md:grid-cols-[1fr_1fr]">
          {/* LEFT - IMAGE */}
          <div className="relative min-h-[590px] w-full overflow-hidden rounded-xl">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* RIGHT - DETAILS */}
          <div className="flex min-h-[590px] flex-col">
            {/* Title */}
            <h1 className="text-3xl font-bold uppercase tracking-wide">
              {workout.name}
            </h1>

            {/* Description */}
            <p className="mt-3 text-sm leading-5 text-[#c2c4ca]">
              {workout.description}
            </p>

            {/* Tags */}
            <div className="mt-4 flex gap-2">
              <span className="rounded-full bg-[#c2f800] px-3 py-1 text-xs font-medium text-black">
                Chest
              </span>

              <span className="rounded-full bg-[#c2f800] px-3 py-1 text-xs font-medium text-black">
                Arms
              </span>
            </div>

            {/* Workout Information */}
            <div className="mt-5 overflow-hidden rounded-xl border border-[#292c32] bg-[#1a1d22]">
              <div className="flex items-center justify-between border-b border-[#292c32] px-3 py-3 text-sm">
                <span className="font-medium text-white">EQUIPMENT</span>
                <span>Barbell, Bench</span>
              </div>

              <div className="flex items-center justify-between border-b border-[#292c32] px-3 py-3 text-sm">
                <span className="font-medium text-white">DIFFICULTY</span>
                <span>{workout.difficulty}</span>
              </div>

              <div className="flex items-center justify-between border-b border-[#292c32] px-3 py-3 text-sm">
                <span className="font-medium text-white">SETS</span>
                <span>4</span>
              </div>

              <div className="flex items-center justify-between border-b border-[#292c32] px-3 py-3 text-sm">
                <span className="font-medium text-white">REPS</span>
                <span>6-8</span>
              </div>

              <div className="flex items-center justify-between border-b border-[#292c32] px-3 py-3 text-sm">
                <span className="font-medium text-white">DURATION</span>
                <span>{workout.duration} min</span>
              </div>

              <div className="flex items-center justify-between border-b border-[#292c32] px-3 py-3 text-sm">
                <span className="font-medium text-white">CALORIES</span>
                <span>{workout.caloriesBurned} kcal</span>
              </div>

              <div className="flex items-center justify-between px-3 py-3 text-sm">
                <span className="font-medium text-white">RATING</span>
                <span>{workout.rating}</span>
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-6">
              <h2 className="text-xl font-bold">INSTRUCTIONS</h2>

              <ol className="mt-3 space-y-2 text-sm leading-5 text-[#d0d1d5]">
                <li>
                  1. Lie on the bench with eyes under the bar and feet planted.
                </li>

                <li>
                  2. Unrack with locked elbows and lower the bar to mid-chest.
                </li>

                <li>
                  3. Press up in a slight arc until elbows lock without
                  bouncing.
                </li>

                <li>
                  4. Keep shoulder blades pinched and a natural arch in the
                  back.
                </li>
              </ol>
            </div>

            {/* Buttons */}
            <div className="mt-auto flex items-center gap-3 pt-5">
              <button className="rounded-lg bg-[#c2f800] px-4 py-2 text-sm font-semibold text-black transition hover:bg-[#a8d900]">
                ⊞ Add to today&apos;s plan
              </button>

              <button className="rounded-lg border border-[#9b9da5] px-4 py-2 text-sm font-medium text-white transition hover:border-white">
                ♧ Save for later
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ExerciseDetailsPage;
