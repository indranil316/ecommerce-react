import {  XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Dialog, Disclosure} from '@headlessui/react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { useEffect, useRef } from 'react';

function MobileNav(props) {
  const {
    mobileMenuOpen, 
    setMobileMenuOpen, 
    classNames, 
    categories, 
    handleSearchSubmit, 
    search, 
    setSearch,
    mobileSearchFocus,
    setMobileSearchFocus
  } = props;

  const searchFormRef = useRef(null);

  useEffect(function(){
    if(mobileSearchFocus){
      searchFormRef.current.click();
      searchFormRef.current.focus();
      setMobileSearchFocus(false);
    }
  },[mobileSearchFocus])

  return (
    <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">GemsKart</span>
              <img
                className="h-8 w-auto"
                src={logo}
                alt="GemsKart"
              />
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
            <div id='search' className='mb-10'>
              <form autoFocus={true} onSubmit={handleSearchSubmit}>   
                  <label for="default-search" className="text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                  <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokelinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                      </div>
                      <input 
                        ref={searchFormRef}
                        type="search" 
                        value={search} 
                        onChange={e=>{setSearch(e.target.value)}} 
                        id="default-search" 
                        className="block w-full p-[5px] pl-10 text-sm text-gray-900 border-b focus:outline-0 focus:border-black-800" 
                        placeholder="Search Products..." 
                        required
                      />
                  </div>
              </form>
            </div>  
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {
                  categories.map(category=>{
                    return(
                      <Disclosure as="div" className="-mx-3" key={category.id}>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                            {category.name}
                            <ChevronDownIcon
                              className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                              aria-hidden="true"
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="mt-2 space-y-2">
                            {category.children.map((item) => (
                              <Disclosure.Button
                                key={item.id}
                                as={Link}
                                to={'/shop/'+item.slug}
                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {item.name}
                              </Disclosure.Button>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                    )
                  })
                }
              </div>
              <div className="py-6">
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
  )
}

export default MobileNav