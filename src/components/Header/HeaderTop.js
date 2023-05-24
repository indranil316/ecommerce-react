import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faHeart, faUser, faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { Link, useNavigate } from 'react-router-dom';
import MobileNav from './MobileNav';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


function HeaderTop(props) {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [search, setSearch] = useState('');

  const handleSearchSubmit = e =>{
    e.preventDefault();
    props.setSearchRule("searchKey="+search);
    navigate('/shop?searchKey='+search);
  }

  return (
    <div className='w-full flex items-center justify-between py-6 lg:pb-0 lg:px-8'>
      <div className='w-[30%] flex gap-5'>
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
        <Link to="/stores" className='flex cursor-pointer'>
          <FontAwesomeIcon icon={faLocationDot} size='lg'/>
          <span className='ml-2 text-[16px] hidden lg:block'>Stores</span>
        </Link>
      </div>
        <div className='logo cursor-pointer'>
            <Link to="/" className='text-4xl font-bold'>GemsKart</Link>
        </div>
        <div className="flex items-center justify-end w-[30%]">          
          <form onSubmit={handleSearchSubmit}>   
              <label for="default-search" className="text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokelinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  </div>
                  <input 
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
          <Link to="/wishlist" className='mx-[8px]'>
            <FontAwesomeIcon icon={faHeart} size="lg"/>
          </Link>
          <Link to="/login" className='mx-[8px]'>
            <FontAwesomeIcon icon={faUser} size="lg"/>
          </Link>
          <Link to="/cart" className='mx-[8px]'>
            <FontAwesomeIcon icon={faCartShopping} size="lg"/>
          </Link>
        </div>
        <MobileNav
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          classNames={classNames}
          categories={props.categories}
        />
    </div>
  )
}

export default HeaderTop