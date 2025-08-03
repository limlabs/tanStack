import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { ArrowRight, Check, ChevronRight, ChevronDown } from "lucide-react"

import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Accordion } from "../components/ui/accordion"

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-r from-blue-50 to-blue-100 py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:grid-cols-2 md:px-6">
            <div className="flex flex-col items-start gap-4">
              <div className="rounded-full bg-blue-200 px-3 py-1 text-sm font-medium text-blue-800">
                Trusted by 500+ Companies
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Simplify Your <span className="text-blue-600">Business Processes</span>
              </h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl">
                Limo helps businesses streamline operations, reduce costs, and improve efficiency with our
                innovative solutions.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/placeholder.svg?height=400&width=400"
                width={400}
                height={400}
                alt="Business dashboard"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                  Our Offerings
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
                <p className="max-w-[700px] text-gray-600 md:text-xl">
                  We offer a range of services to help your business thrive in today's competitive market.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 pt-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <Check className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold">Business Consulting</h3>
                  <p className="mt-2 text-gray-600">
                    Expert advice to optimize your business operations and increase profitability.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-gray-600">Strategic planning</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-gray-600">Market analysis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-gray-600">Performance optimization</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="mt-6 w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <Check className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold">Process Automation</h3>
                  <p className="mt-2 text-gray-600">
                    Streamline your workflows with our cutting-edge automation solutions.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-gray-600">Workflow optimization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-gray-600">Custom automation tools</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-gray-600">Integration services</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="mt-6 w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <Check className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold">Digital Transformation</h3>
                  <p className="mt-2 text-gray-600">
                    Transform your business with innovative digital solutions and strategies.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-gray-600">Technology assessment</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-gray-600">Digital strategy development</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-gray-600">Implementation support</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="mt-6 w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full bg-gray-50 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                  FAQ
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[700px] text-gray-600 md:text-xl">
                  Find answers to common questions about our services and process.
                </p>
              </div>
            </div>
            <div className="mt-12 max-w-3xl mx-auto">
              <Accordion
                items={[
                  {
                    title: "What industries do you serve?",
                    content: "We work with businesses across various industries, including technology, healthcare, finance, manufacturing, retail, and more. Our solutions are adaptable to the specific needs of each industry."
                  },
                  {
                    title: "How long does the implementation process take?",
                    content: "The timeline varies depending on the complexity of your project and specific requirements. Typically, our implementations range from 4-12 weeks. We'll provide a detailed timeline during our initial consultation."
                  },
                  {
                    title: "What kind of support do you offer?",
                    content: "We provide comprehensive support including 24/7 technical assistance, regular maintenance, training sessions, and dedicated account management. Our team is always available to help you succeed."
                  }
                ]}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
