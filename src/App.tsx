import { Layout } from "@/components/layout"
import { Hero } from "@/sections/hero"
import { SelectedWork } from "@/sections/selected-work"
import { Capabilities } from "@/sections/capabilities"
import { About } from "@/sections/about"
import { Experience } from "@/sections/experience"
import { Process } from "@/sections/process"
import { Experiments } from "@/sections/experiments"
import { Proof } from "@/sections/proof"
import { Contact } from "@/sections/contact"
import { SiteFooter } from "@/sections/site-footer"

function App() {
  return (
    <Layout>
      <Hero />
      <SelectedWork />
      <Capabilities />
      <About />
      <Experience />
      <Process />
      <Experiments />
      <Proof />
      <Contact />
      <SiteFooter />
    </Layout>
  )
}

export default App
