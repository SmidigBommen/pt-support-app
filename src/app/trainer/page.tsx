import { orderSupportQueueItems } from "@/domain/support-queue/support-queue";
import { trainerDashboardSeed } from "@/features/trainer-dashboard/seed-data";

const priorityStyles = {
  high: "border-red-200 bg-red-50 text-red-900",
  medium: "border-amber-200 bg-amber-50 text-amber-900",
  low: "border-slate-200 bg-slate-50 text-slate-700",
};

export default function TrainerDashboardPage() {
  const supportItems = orderSupportQueueItems(
    trainerDashboardSeed.flatMap(({ client, supportItems }) =>
      supportItems.map((item) => ({
        ...item,
        clientName: client.name,
        goal: client.currentGoal,
        scenarioTitle: client.scenario.title,
        trainerReviewQuestion: client.scenario.trainerReviewQuestion,
        reflection: client.latestCheckIn.reflection,
      })),
    ),
  );

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-6 py-8">
      <header className="flex flex-col gap-3 border-b border-slate-200 pb-6">
        <p className="text-sm font-medium text-teal-700">Trainer dashboard</p>
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h1 className="text-3xl font-semibold text-slate-950">
              Who needs support today?
            </h1>
            <p className="mt-2 max-w-2xl text-slate-600">
              Seeded MVP view for testing whether trainers can quickly see who
              needs attention and why.
            </p>
          </div>
          <div className="rounded-md border border-slate-200 bg-white px-4 py-3">
            <p className="text-sm text-slate-500">Open support items</p>
            <p className="text-2xl font-semibold text-slate-950">
              {supportItems.length}
            </p>
          </div>
        </div>
      </header>

      <section className="grid gap-6 py-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="text-lg font-semibold text-slate-950">
            Support queue
          </h2>
          <div className="mt-4 grid gap-3">
            {supportItems.map((item) => (
              <article
                key={`${item.clientId}-${item.type}`}
                className="rounded-md border border-slate-200 bg-white p-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="font-medium text-slate-950">
                      {item.clientName}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">{item.goal}</p>
                  </div>
                  <span
                    className={`rounded-md border px-2.5 py-1 text-xs font-medium ${priorityStyles[item.priority]}`}
                  >
                    {item.priority}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  {item.reason}
                </p>
                <div className="mt-4 rounded-md border border-teal-100 bg-teal-50 p-3">
                  <p className="text-xs font-medium uppercase text-teal-800">
                    Scenario
                  </p>
                  <p className="mt-1 text-sm font-medium text-teal-950">
                    {item.scenarioTitle}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-teal-900">
                    {item.trainerReviewQuestion}
                  </p>
                </div>
                <p className="mt-3 border-l-2 border-slate-200 pl-3 text-sm leading-6 text-slate-500">
                  {item.reflection}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          <section>
            <h2 className="text-lg font-semibold text-slate-950">
              Session prep
            </h2>
            <div className="mt-4 grid gap-3">
              {trainerDashboardSeed
                .filter(({ supportItems }) => supportItems.length > 0)
                .slice(0, 3)
                .map(({ client, sessionPrep }) => (
                  <article
                    key={`${client.id}-session-prep`}
                    className="rounded-md border border-slate-200 bg-white p-4"
                  >
                    <h3 className="font-medium text-slate-950">
                      {sessionPrep.title}
                    </h3>
                    <ul className="mt-3 grid gap-2">
                      {sessionPrep.context.map((line) => (
                        <li
                          key={line}
                          className="text-sm leading-6 text-slate-600"
                        >
                          {line}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 rounded-md border border-teal-100 bg-teal-50 p-3">
                      <p className="text-xs font-medium uppercase text-teal-800">
                        Review prompts
                      </p>
                      <ul className="mt-2 grid gap-2">
                        {sessionPrep.reviewPrompts.map((prompt) => (
                          <li
                            key={prompt}
                            className="text-sm leading-6 text-teal-900"
                          >
                            {prompt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-950">
              Client snapshots
            </h2>
            <div className="mt-4 grid gap-3">
            {trainerDashboardSeed.map(({ client, supportItems }) => (
              <article
                key={client.id}
                className="rounded-md border border-slate-200 bg-white p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-medium text-slate-950">
                      {client.name}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      {client.currentGoal}
                    </p>
                  </div>
                  <span className="text-sm font-medium text-slate-700">
                    {supportItems.length} item{supportItems.length === 1 ? "" : "s"}
                  </span>
                </div>
                <dl className="mt-4 grid grid-cols-3 gap-3 text-sm">
                  <div>
                    <dt className="text-slate-500">Energy</dt>
                    <dd className="font-medium text-slate-950">
                      {client.latestCheckIn.energy}/10
                    </dd>
                  </div>
                  <div>
                    <dt className="text-slate-500">Confidence</dt>
                    <dd className="font-medium text-slate-950">
                      {client.latestCheckIn.confidence}/10
                    </dd>
                  </div>
                  <div>
                    <dt className="text-slate-500">Mood</dt>
                    <dd className="font-medium capitalize text-slate-950">
                      {client.latestCheckIn.mood}
                    </dd>
                  </div>
                </dl>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {client.nonScaleWin}
                </p>
                <div className="mt-4 rounded-md border border-slate-200 bg-slate-50 p-3">
                  <p className="text-xs font-medium uppercase text-slate-500">
                    Validation prompt
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">
                    {client.scenario.validationPrompt}
                  </p>
                </div>
              </article>
            ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
