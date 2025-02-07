import { Button } from "@/components/ui/button"
import { ArrowRight, Activity, Target, Users, BookOpen } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Transform Your Fitness Journey
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Track your progress, achieve your goals, and become the best version of yourself.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/auth">
                <Button className="px-8">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center space-y-4">
              <Activity className="h-12 w-12" />
              <h3 className="text-xl font-bold">Track Progress</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Monitor your workouts and see your improvements over time
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <Target className="h-12 w-12" />
              <h3 className="text-xl font-bold">Set Goals</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Define and achieve your fitness objectives
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <Users className="h-12 w-12" />
              <h3 className="text-xl font-bold">Join Community</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Connect with like-minded fitness enthusiasts
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <BookOpen className="h-12 w-12" />
              <h3 className="text-xl font-bold">Learn</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Access comprehensive exercise guides and tips
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}