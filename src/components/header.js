import React from 'react'

const Header = () => {
  const menuItems = [
    {
      id: '1',
      name: 'about',
      link: '#about',
    },
    {
      id: '2',
      name: 'services',
      link: '#services',
    },
    {
      id: '3',
      name: 'newsletter',
      link: '#newsletter',
    },
  ]

  return (
    <header className='fixed bottom-0 left-0 z-30 w-full text-gray-100 md:bg-transparent frostEffect md:relative'>
      <nav className='z-40 flex items-center justify-between w-full px-4 py-8 md:absolute md:top-0 md:left-0 md:p-8'>
        <div>
          <h2 className='flex items-center no-underline'>
            <span className='text-xl font-extrabold tracking-tight uppercase md:hidden'>
              BCD
            </span>
            <span className='hidden text-xl font-semibold tracking-tight uppercase md:block'>
              Braga`s Carcare Detailing
            </span>
          </h2>
        </div>
        <div className='flex items-center justify-center font-semibold uppercase'>
          {menuItems.map((item) => {
            return (
              <ul key={item.id}>
                <li>
                  <a
                    className='mx-2 md:mx-4 hover:text-orange-500'
                    href={item.link}
                  >
                    {item.name}
                  </a>
                </li>
              </ul>
            )
          })}
        </div>
      </nav>
    </header>
  )
}

export default Header
