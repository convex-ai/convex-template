import Link from "next/link"
const ExampleCode = `# Go to the root of the project
convex run`
export default function Page() {
  return (
    <>
      <section
        className="container grid items-center justify-center gap-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:pb-24 lg:pt-16">
        <div className="mx-auto flex flex-col items-start gap-4 lg:w-[52rem]">
          <h1 className="text-3xl font-bold leading-[1.1] tracking-tighter sm:text-5xl md:text-6xl">
            Convex is ready for you.
          </h1>
          <p className="max-w-[42rem] leading-normal text-slate-700 sm:text-xl sm:leading-8">
            Just input your idea and Convex will generate the whole app for you.
          </p>
        </div>


        <pre className="relative ml-2 mt-4 block w-[520px] rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm ">
          <span className="text-muted-foreground"># Go to the root of the project{'\n'}</span>
          <span className="text-xl font-bold">
           convex run
          </span>
        </pre>
      </section>
    </>
  )
}
