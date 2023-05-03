import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faHeart, faUser, faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function HeaderTop() {
  return (
    <div className='w-full flex items-center justify-between pt-6 lg:px-8'>
      <div className='w-[30%]'>
        <Link to="/stores" className='flex cursor-pointer'>
          <FontAwesomeIcon icon={faLocationDot} size='lg'/>
          <span className='ml-2 text-[16px]'>Stores</span>
        </Link>
      </div>
        <div className='logo cursor-pointer'>
            <Link to="/" className='text-4xl font-bold'>GemsKart</Link>
        </div>
        <div className="flex items-center justify-end w-[30%]">          
          <form>   
              <label for="default-search" class="text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div class="relative">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  </div>
                  <input type="search" id="default-search" class="block w-full p-[5px] pl-10 text-sm text-gray-900 border-b focus:outline-0 focus:border-black-800" placeholder="Search Products..." required/>
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
    </div>
  )
}

export default HeaderTop