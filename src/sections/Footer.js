import Logo from '../resources/Logo.png'
import FacebookLogo from '../resources/social/facebook.png'
import TwitterLogo from '../resources/social/twitter.png'
import InstagramLogo from '../resources/social/instagram.png'
import footer from '../data/footer'

const Footer = () => (
  <footer className="container flex flex-col gap-12 md:gap-24 mx-auto px-6 lg:px-0 py-12 lg:py-24">
    <div className="flex flex-col md:flex-row justify-between gap-12">
      <div className="flex flex-col items-start gap-6 md:gap-12 w-full md:w-1/4">
        <img className="h-4" src={ Logo } alt="Realm" />
        <p className="text-sm md:text-base text-neutral-500">Invite your teammates to get direct or shared numbers. Manage all owned numbers from a simple interface.</p>
        <div className="flex items-center gap-10">
          <a className="opacity-20 hover:opacity-100" href="/">
            <img className="h-6" src={ FacebookLogo } alt="Facebook" /> 
          </a>
          <a className="opacity-20 hover:opacity-100" href="/">
            <img className="h-6" src={ TwitterLogo } alt="Twitter" /> 
          </a>
          <a className="opacity-20 hover:opacity-100" href="/">
            <img className="h-6" src={ InstagramLogo } alt="Instagram" /> 
          </a>
        </div>
      </div>
      <div className="flex justify-between items-start gap-6 w-full md:w-1/3">
        { footer.map(col => (
          <div key={ col.title } className="">
            <h4 className="text-sm md:text-base font-medium mb-3 md:mb-6">{ col.title }</h4>
            <ul className="flex flex-col gap-1 md:gap-2">
              { col.links.map(link => (
                <li key={ link }>
                  <a className="text-xs md:text-sm text-neutral-500 hover:text-neutral-50 font-medium" href="/">{ link }</a>
                </li>
              )) }
            </ul>
          </div>
        )) }
      </div>
    </div>
    <div className="flex flex-col md:flex-row justify-between items-center gap-2">
      <span className="text-xs md:text-sm text-neutral-500">Copyright 2021, FIND Inc. All Rights Reserved.</span>
      <a className="text-xs md:text-sm text-neutral-500 hover:text-neutral-50" href="/">Term & Conditions</a>
    </div>
  </footer>
)

export default Footer