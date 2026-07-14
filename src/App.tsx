import { Layout } from "@/components/layout"
import { Hero } from "@/sections/hero"
import { SelectedWork } from "@/sections/selected-work"
import { Experiments } from "@/sections/experiments"
import { Capabilities } from "@/sections/capabilities"
import { About } from "@/sections/about"
import { Experience } from "@/sections/experience"
import { Contact } from "@/sections/contact"
import { SiteFooter } from "@/sections/site-footer"

function App() {
  return (
    <Layout>
      <Hero />
      <SelectedWork />
      <Experiments />
      <About />
      <Experience />
      <Capabilities />
      <Contact />
      <SiteFooter />
    </Layout>
  )
}

export default App
