import Image from "next/image";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/lHV6waVffL2
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Instructor() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center text-primary-foreground">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Meet the Instructors of Kesatria Kode
              </h1>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Kesatria Kode is a premier bootcamp dedicated to transforming
                aspiring developers into industry-ready professionals. Our team
                of experienced instructors are here to guide you on your journey
                to becoming a coding superhero.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3 md:px-6">
          <div className="flex flex-col items-center space-y-4 rounded-lg bg-card p-6 text-center shadow-sm">
            <Image
              src="/placeholder.svg"
              width="120"
              height="120"
              alt="Instructor"
              className="h-30 w-30 rounded-full object-cover"
            />
            <div className="space-y-1">
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-muted-foreground">Lead Instructor</p>
            </div>
            <p className="text-muted-foreground">
              John is a seasoned software engineer with over 10 years of
              experience. He is passionate about teaching and helping students
              reach their full potential.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg bg-card p-6 text-center shadow-sm">
            <Image
              src="/placeholder.svg"
              width="120"
              height="120"
              alt="Instructor"
              className="h-30 w-30 rounded-full object-cover"
            />
            <div className="space-y-1">
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-muted-foreground">Senior Instructor</p>
            </div>
            <p className="text-muted-foreground">
              Jane is an expert in full-stack development and has a passion for
              mentoring students. She brings a wealth of industry experience to
              the classroom.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg bg-card p-6 text-center shadow-sm">
            <Image
              src="/placeholder.svg"
              width="120"
              height="120"
              alt="Instructor"
              className="h-30 w-30 rounded-full object-cover"
            />
            <div className="space-y-1">
              <h3 className="text-xl font-semibold">Michael Johnson</h3>
              <p className="text-muted-foreground">Instructor</p>
            </div>
            <p className="text-muted-foreground">
              Michael is a skilled backend engineer with a deep understanding of
              data structures and algorithms. He enjoys sharing his knowledge
              with aspiring developers.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg bg-card p-6 text-center shadow-sm">
            <Image
              src="/placeholder.svg"
              width="120"
              height="120"
              alt="Instructor"
              className="h-30 w-30 rounded-full object-cover"
            />
            <div className="space-y-1">
              <h3 className="text-xl font-semibold">Emily Davis</h3>
              <p className="text-muted-foreground">Instructor</p>
            </div>
            <p className="text-muted-foreground">
              Emily is a front-end specialist with a keen eye for design. She
              loves helping students create beautiful and responsive user
              interfaces.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg bg-card p-6 text-center shadow-sm">
            <Image
              src="/placeholder.svg"
              width="120"
              height="120"
              alt="Instructor"
              className="h-30 w-30 rounded-full object-cover"
            />
            <div className="space-y-1">
              <h3 className="text-xl font-semibold">David Lee</h3>
              <p className="text-muted-foreground">Instructor</p>
            </div>
            <p className="text-muted-foreground">
              David is a full-stack engineer with a passion for teaching. He
              enjoys helping students build end-to-end web applications and gain
              practical experience.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg bg-card p-6 text-center shadow-sm">
            <Image
              src="/placeholder.svg"
              width="120"
              height="120"
              alt="Instructor"
              className="h-30 w-30 rounded-full object-cover"
            />
            <div className="space-y-1">
              <h3 className="text-xl font-semibold">Sarah Chen</h3>
              <p className="text-muted-foreground">Instructor</p>
            </div>
            <p className="text-muted-foreground">
              Sarah is an expert in mobile development and has a passion for
              teaching students how to build cross-platform applications.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
