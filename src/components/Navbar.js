import { useState } from 'react'
import Logo from '../resources/Logo.png'

const Navbar = () => {
  const [ state, setState ] = useState(false)

  return (
    <nav className="container flex flex-col md:flex-row relative mx-auto px-6 my-6">
      <div className="flex justify-between items-center w-full md:w-auto z-20">
        <a className="focus:outline-offset-8" href="/">
          <img className="h-4" src={ Logo } alt="Realm" />
        </a>
        <button className="md:hidden bg-neutral-800 focus:bg-neutral-700 focus:outline-none focus:ring-4 focus:ring-neutral-800 rounded-lg text-sm p-3" onClick={ () => setState(!state) }>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path id="primary" d="M9,18H21M3,12H21M3,6H15" style={{ fill: 'none', stroke: '#fff', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2 }}></path></svg>
        </button>
      </div>
      <div className={ `${ state ? 'flex' : 'hidden' } md:flex flex-col md:flex-row justify-end items-center gap-3 lg:gap-6 absolute md:relative left-0 right-0 bottom-0 bg-neutral-900 w-full md:mt-0 p-6 pt-0 md:p-0 pb-3 md:pb-0 translate-y-full md:translate-y-0 z-10` }>
        <ul className='flex flex-col md:flex-row text-center w-full md:w-auto text-xs lg:text-sm'>
          { [ 'properties', 'invest', 'agents', 'about' ].map(item => (
            <li key={ item } className="py-3 md:py-0 md:px-6 border-b border-neutral-800 md:border-b-0 md:border-r last:border-0">
              <a className="capitalize text-neutral-500 hover:text-neutral-50 focus:text-neutral-50 focus:outline-offset-8" href="/">{ item }</a>
            </li>
          )) }
        </ul>
        <div className="flex gap-3 w-full md:w-auto">
          <button className="w-full md:w-auto focus:outline-none focus:ring-4 focus:ring-neutral-50 rounded-lg text-xs lg:text-sm text-neutral-500 hover:text-neutral-50 focus:text-neutral-50 font-semibold px-5 py-2.5">Login</button>
          <button className="w-full md:w-auto bg-neutral-50 hover:bg-neutral-200 focus:bg-neutral-200 focus:outline-none focus:ring-4 focus:ring-neutral-400 rounded-lg text-neutral-900 text-xs lg:text-sm font-semibold px-5 py-2.5">Get Started</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar