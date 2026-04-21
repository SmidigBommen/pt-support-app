export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-8 px-6 py-10">
      <section className="max-w-3xl">
        <p className="text-sm font-medium text-teal-700">MVP discovery</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-normal text-slate-950">
          PT Support App
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-700">
          A relationship-driven support tool for personal trainers and clients,
          focused on check-ins, attention management, session prep, and progress
          beyond the scale.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          "Trainer support dashboard",
          "Client check-in",
          "Session prep",
        ].map((title) => (
          <div key={title} className="rounded-md border border-slate-200 p-5">
            <h2 className="font-medium text-slate-950">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Planned MVP slice for validation with trainers and clients.
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
