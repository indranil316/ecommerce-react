import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import {Link} from 'react-router-dom';


export default function Nav(props) {

  const createNavItem = (category) => {
    return (
      <Popover className="relative" key={category.categoryId}>
        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
          {category.categoryName}
          <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
        </Popover.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4">
              {category.subCategories.map((item) => {
                return (
                  <div
                    key={item.subCategoryId}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    {/* <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                    </div> */}
                    <div className="flex-auto">
                      <Link 
                        to={'shop'+item.subCategoryNavLink} 
                        onClick={()=>{props.setSearchRule("categoryId="+item.subCategoryId)}} 
                        className="block font-semibold text-gray-900"
                      >
                          {item.subCategoryName}
                          <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-gray-600">{item.subCategoryDescription}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

    )
  }
  return (
    <>
      <nav className="mx-auto hidden lg:flex max-w-7xl items-center justify-center py-6" aria-label="Global">
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          {props.categories.map(category=>{
            return createNavItem(category);
          })}
          {/* <Link to="/" className="text-sm font-semibold leading-6 text-gray-900">
            Features
          </Link> */}
        </Popover.Group>
      </nav>
    </>
  )
}