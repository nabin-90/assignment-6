const Loading = () => {
  return (
    <main className="flex min-h-[60vh] items-center justify-center bg-[#0f1013] text-white">
      <div className="text-center">
        <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-[#292c32] border-t-[#c2f800]" />

        <p className="text-sm font-medium text-[#9b9da5]">
          Loading workouts…
        </p>
      </div>
    </main>
  );
};

export default Loading;