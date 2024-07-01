import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function MainDashboard() {
  return (
    <main className="flex-1 p-6 sm:p-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <Image
            src="/placeholder.svg"
            alt="Course Thumbnail"
            width={400}
            height={225}
            className="rounded-t-lg object-cover"
          />
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold">
              Introduction to Web Development
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Learn the fundamentals of web development, including HTML, CSS,
              and JavaScript.
            </p>
          </CardContent>
        </Card>
        <Card>
          <Image
            src="/placeholder.svg"
            alt="Course Thumbnail"
            width={400}
            height={225}
            className="rounded-t-lg object-cover"
          />
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold">
              Data Structures and Algorithms
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Dive into the world of data structures and algorithms, essential
              for problem-solving.
            </p>
          </CardContent>
        </Card>
        <Card>
          <Image
            src="/placeholder.svg"
            alt="Course Thumbnail"
            width={400}
            height={225}
            className="rounded-t-lg object-cover"
          />
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold">React.js Fundamentals</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Explore the powerful React.js library and learn how to build
              modern web applications.
            </p>
          </CardContent>
        </Card>
        <Card>
          <Image
            src="/placeholder.svg"
            alt="Course Thumbnail"
            width={400}
            height={225}
            className="rounded-t-lg object-cover"
          />
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold">Python for Data Science</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Harness the power of Python to analyze data, build predictive
              models, and more.
            </p>
          </CardContent>
        </Card>
        <Card>
          <Image
            src="/placeholder.svg"
            alt="Course Thumbnail"
            width={400}
            height={225}
            className="rounded-t-lg object-cover"
          />
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold">Mastering Git and GitHub</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Gain proficiency in version control and collaboration using Git
              and GitHub.
            </p>
          </CardContent>
        </Card>
        <Card>
          <Image
            src="/placeholder.svg"
            alt="Course Thumbnail"
            width={400}
            height={225}
            className="rounded-t-lg object-cover"
          />
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold">Responsive Web Design</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Learn to create websites that adapt seamlessly to different
              devices and screen sizes.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
