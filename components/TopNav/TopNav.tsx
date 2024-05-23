'use client'

import { Fragment, useState } from 'react'
import { Button, Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import SearchButton from '../SearchButton'
import GitHubStars from '../GithubStars/GithubStars'

const products = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of your traffic',
    href: '#',
    icon: ChartPieIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Security',
    description: 'Your customers’ data will be safe and secure',
    href: '#',
    icon: FingerPrintIcon,
  },
  {
    name: 'Integrations',
    description: 'Connect with third-party tools',
    href: '#',
    icon: SquaresPlusIcon,
  },
  {
    name: 'Automations',
    description: 'Build strategic funnels that will convert',
    href: '#',
    icon: ArrowPathIcon,
  },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes: unknown[]) {
  return classes.filter(Boolean).join(' ')
}

export default function TopNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header
      className={`fixed left-0 right-0 z-30 mx-auto h-[48px] w-full border-b border-signoz_slate-500 bg-signoz_ink-500 px-12 text-slate-900 dark:text-slate-50`}
    >
      <nav
        className="mx-auto flex items-center justify-between py-2 text-slate-900 dark:text-slate-50"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 flex items-center gap-2 p-1.5">
            <Image
              className="h-6 w-auto"
              src="/img/SigNozLogo-orange.svg"
              width={160}
              height={60}
              alt=""
            />

            <span className="text-md font-bold">SigNoz</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden items-center lg:flex lg:gap-x-12">
          <Link href="/docs" className="text-sm font-semibold leading-6 ">
            Documentation
          </Link>

          <a href="/resource-center/blog" className="text-sm font-semibold leading-6 ">
            Resources
          </a>

          <Link href="/pricing" className="text-sm font-semibold leading-6 ">
            Pricing
          </Link>
          <Link href="/case-study" className="text-sm font-semibold leading-6 ">
            Customer Stories
          </Link>
          <Link href="/about-us" className="text-sm font-semibold leading-6 ">
            Newsroom
          </Link>

          <GitHubStars />
        </Popover.Group>
        <div className="hidden gap-8 lg:flex lg:flex-1 lg:justify-end">
          <SearchButton />

          <Link href="/teams">
            <Button className="primary-gradient flex justify-center gap-1 truncate rounded-full px-4 py-2 text-xs font-normal leading-4 text-white">
              Try SigNoz Cloud <ArrowRight size={14} />
            </Button>
          </Link>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-signoz_ink-500 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">SigNoz</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/docs"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-signoz_ink-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Documentation
                </Link>
                <Link
                  href="/resource-center/blog"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-signoz_ink-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Resources
                </Link>
                <Link
                  href="/pricing"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-signoz_ink-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </Link>

                <Link
                  href="/case-study"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-signoz_ink-200"
                >
                  Newsroom
                </Link>

                <div className="-mx-3 inline-block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-signoz_ink-200">
                  <GitHubStars />
                </div>
              </div>
              <div className="py-6">
                <SearchButton />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
