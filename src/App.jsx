import { Navbar,Contact,Testimonials ,Experieance,About,Footer,Header, Services } from "./components"
import Portfolio from "./components/portfolio/Portfolio.jsx"
function App() {

  return(<>
        <Header />
        <Navbar />
        <About />
        <Experieance />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
     </>)
}

export default App
