import KasaLogo from '../resources/sponsors/kasa.png'
import SaraminLogo from '../resources/sponsors/saramin.png'
import CoupangLogo from '../resources/sponsors/coupang.png'
import ShinhancardLogo from '../resources/sponsors/shinhancard.png'

const About = () => (
  <section className="grid md:grid-cols-3 gap-6 md:gap-12 border-b border-neutral-800 pb-12">
    <div>
      <h2 className="text-xl md:text-4xl text-neutral-50 font-medium leading-tight md:leading-snug">We Are In A Mission <br className="hidden md:block" /> To ─ Statiesfied Our Customers</h2>
    </div>
    <div className="flex flex-col gap-2 md:gap-3 text-neutral-500 text-sm md:text-base font-light">
      <p>Realm provides developers with the tools they need to create easy and accessible experiences for their users.</p>
      <p>Today, tens of millions of people in North America (and counting) have successfully connected their financial institutions to apps they love using Plaind.</p>
    </div>
    <div>
      <h5 className="text-neutral-500 text-sm md:text-base font-medium mb-3">Featured By</h5>
      <div className="inline-grid grid-cols-2 gap-x-1 gap-y-6">
        <img className="h-6 object-contain" src={ KasaLogo } alt="Kasa" />
        <img className="h-6 object-contain" src={ SaraminLogo } alt="Saramin" />
        <img className="h-6 object-contain" src={ CoupangLogo } alt="Coupang" />
        <img className="h-6 object-contain" src={ ShinhancardLogo } alt="Shinhancard" />
      </div>
    </div>
  </section>
)

export default About