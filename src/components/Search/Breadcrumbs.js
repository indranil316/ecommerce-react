import React from 'react';
import {Link} from 'react-router-dom';

function Breadcrumbs(props) {
  const [category, subCategory] = props.links;
  return (
    <nav className="w-full rounded-md mt-5">
        <ol className="list-reset flex">
            <li>
                <Link
                    to="/"
                    className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600 capitalize"
                    >Home
                </Link>
            </li>
            <li>
                <span className="mx-2 text-neutral-500 dark:text-neutral-400">/</span>
            </li>
            <li>
                <Link
                    to={"/shop/"+category}
                    className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600 capitalize"
                    >{category}
                </Link>
            </li>
            <li>
                <span className="mx-2 text-neutral-500 dark:text-neutral-400">/</span>
            </li>
            <li className="text-neutral-500 dark:text-neutral-400 capitalize">{subCategory}</li>
        </ol>
    </nav>
  )
}

export default Breadcrumbs