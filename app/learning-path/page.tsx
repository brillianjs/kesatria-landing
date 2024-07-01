/**
 * v0 by Vercel.
 * @see https://v0.dev/t/3xVmHb5YDvV
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function LearningPathPage() {
  return (
    <div className="w-full max-w-5xl mx-auto py-12 md:py-20">
      <div className="px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Comprehensive Learning Path
          </h1>
          <p className="max-w-[800px] mx-auto text-muted-foreground md:text-xl/relaxed">
            Embark on a transformative journey through our comprehensive
            learning path, designed to equip you with the essential skills and
            knowledge to thrive in the dynamic world of technology.
          </p>
        </div>
        <Tabs defaultValue="fundamentals" className="mt-12">
          <TabsList className="grid grid-cols-3 border-b">
            <TabsTrigger value="fundamentals">Fundamentals</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="advanced">Advanced Topics</TabsTrigger>
          </TabsList>
          <TabsContent value="fundamentals">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">HTML & CSS</h3>
                <p className="text-muted-foreground">
                  Master the foundations of web development with HTML and CSS.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>Semantic HTML</li>
                  <li>CSS Basics</li>
                  <li>Responsive Design</li>
                  <li>CSS Layouts</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">JavaScript Essentials</h3>
                <p className="text-muted-foreground">
                  Dive into the world of JavaScript and learn the fundamentals.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>Variables and Data Types</li>
                  <li>Control Flow and Loops</li>
                  <li>Functions and Scope</li>
                  <li>DOM Manipulation</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">
                  Git and Version Control
                </h3>
                <p className="text-muted-foreground">
                  Understand the importance of version control and how to use
                  Git.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>Git Basics</li>
                  <li>Branching and Merging</li>
                  <li>Collaboration with Git</li>
                  <li>GitHub Workflows</li>
                </ul>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="projects">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Personal Portfolio</h3>
                <p className="text-muted-foreground">
                  Build a professional portfolio website to showcase your work.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>HTML/CSS Structure</li>
                  <li>Responsive Design</li>
                  <li>JavaScript Interactivity</li>
                  <li>Deployment</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">E-commerce Website</h3>
                <p className="text-muted-foreground">
                  Build a fully functional e-commerce website with shopping
                  cart.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>Product Listings</li>
                  <li>Shopping Cart Functionality</li>
                  <li>Checkout Process</li>
                  <li>Admin Dashboard</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Todo App</h3>
                <p className="text-muted-foreground">
                  Create a simple yet effective todo application.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>Task Management</li>
                  <li>Filtering and Sorting</li>
                  <li>Local Storage Integration</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="advanced">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">React Fundamentals</h3>
                <p className="text-muted-foreground">
                  Dive into the world of React and learn its core concepts.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>Components and Props</li>
                  <li>State Management</li>
                  <li>Lifecycle Methods</li>
                  <li>Hooks</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Backend Development</h3>
                <p className="text-muted-foreground">
                  Explore the backend side of web development.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>Node.js and Express</li>
                  <li>Database Integration</li>
                  <li>API Design</li>
                  <li>Authentication and Authorization</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">
                  Deployment and Hosting
                </h3>
                <p className="text-muted-foreground">
                  Learn how to deploy and host your web applications.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>Hosting Platforms</li>
                  <li>Continuous Integration/Deployment</li>
                  <li>Domain Management</li>
                  <li>SSL/HTTPS Configuration</li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
