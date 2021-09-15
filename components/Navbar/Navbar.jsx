import { forwardRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import logoPicture from '@/public/logo.png'

const navigation = [
  { name: 'PROFIL', href: '#', current: true },
  { name: 'KURIKULUM', href: '#', current: false },
  { name: 'PRESTASI', href: '#', current: false },
  { name: 'AGENDA', href: '#agenda', current: false },
  { name: 'GALERI', href: '#', current: false },
  { name: 'KONTAK', href: '#contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Logo = forwardRef((props, ref) => {
  return (
    <Image src={logoPicture} alt="Logo" />
  );
});

export function Navbar() {
  return (
    <>
      <Disclosure as="nav" className="z-10 w-full">
        {({ open }) => (
          <>
            <div className="absolute bg-transparent w-full">
              <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-2">
                <div className="container">
                  <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                      {/* Mobile menu button*/}
                      <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                          <MenuIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                      <div className="flex-shrink-0 flex items-center">
                        <Link
                          href="/"
                          passHref
                          className="cursor-pointer"
                        >
                          <Logo />
                        </Link>
                      </div>
                      <div className="hidden sm:block sm:ml-6">
                        <div className="flex space-x-4">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? 'font-bold'
                                  : 'hover:text-gray-300',
                                'px-3 py-2 rounded-md text-white text-sm font-medium'
                              )}
                              aria-current={item.current ? 'page' : undefined}
                            >
                              {item.name}
                            </a>
                          ))}
                          <a
                            href="#"
                            className="w-full flex items-center justify-center px-8 py-2 border border-transparent text-sm font-medium text-white bg-transparent hover:bg-white hover:text-black border-white border-solid"
                          >
                            PPDB
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </Disclosure.Panel>
            </div>
          </>
        )}
      </Disclosure>
    </>
  )
}
