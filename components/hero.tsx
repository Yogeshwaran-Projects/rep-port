import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

//here what the first page of your details goes so edit here like name and other things 
export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">Welcome to my portfolio</p>
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-balance">
                Full Stack Developer & Designer
              </h1>
              <p className="text-xl text-muted-foreground text-balance">
                I craft beautiful, performant web experiences that solve real problems. Specializing in React, Next.js,
                and modern web technologies.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                View My Work
                <ArrowRight size={18} />
              </Button>
              <Button size="lg" variant="outline">
                Get In Touch
              </Button>
            </div>
          </div>
          <div className="relative h-96 sm:h-full min-h-96 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-border flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl font-bold text-primary/20">{"</>"}</div>
              <p className="text-muted-foreground mt-4">Your image here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
