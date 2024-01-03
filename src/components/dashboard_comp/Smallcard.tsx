import React from 'react'

const Smallcard = () => {
  return (
<>
<div className="block p-3 sm:p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 className="mb-2 text-lg sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">This Month Revenue</h5>
<p className="mb-3 text-xl sm:text-4xl font-bold text-gray-950 dark:text-gray-400">$105000</p>
<a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-violet-700 rounded-lg hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800">
    {'+20.6%'}
    </a>
</div>

<div className="block p-3 sm:p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 className="mb-2 text-lg sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Today Earning</h5>
<p className="mb-3 text-xl sm:text-4xl font-bold text-gray-950 dark:text-gray-400">$105000</p>
<a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-violet-700 rounded-lg hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800">
    {'+20.6%'}
    </a>
</div>
<div className="block p-3 sm:p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 className="mb-2 text-lg sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Product Sold</h5>
<p className="mb-3 text-xl sm:text-4xl font-bold text-gray-950 dark:text-gray-400">$105000</p>
<a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-violet-700 rounded-lg hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800">
    {'+20.6%'}
    </a>
</div>
</>
  )
}

export default Smallcard
