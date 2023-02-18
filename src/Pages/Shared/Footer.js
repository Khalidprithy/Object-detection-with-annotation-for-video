import React from 'react';
import logo from '../../Images/logo.png'

const Footer = () => {
    return (
        <div className='bg-white dark:bg-gray-900'>
            <footer class="container p-4 bg-white md:px-6 md:py-8 dark:bg-gray-900 mx-auto">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="/" class="flex items-center mb-4 sm:mb-0">
                        <img src={logo} class="h-8 mr-3" alt="Flowbite Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">VisualizeIt</span>
                    </a>
                    <ul class="flex flex-wrap items-center mb-6 text-lg text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="/" class="mr-4 hover:underline md:mr-6 ">About</a>
                        </li>
                        <li>
                            <a href="/" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="/" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
                        </li>
                        <li>
                            <a href="/" class="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="mx-auto block text-lg text-gray-500 sm:text-center dark:text-gray-400">© 3 <a href="https://devkbin.netlify.app/" class="hover:underline text-teal-600 font-bold text-lg">Dev.Kbin™</a>. All Rights Reserved.
                </span>
            </footer>
        </div>

    );
};

export default Footer;