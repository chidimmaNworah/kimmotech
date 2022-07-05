import React from 'react'
import 'react-ionicons'

const contact = () => {
  return (
    <div className="flex w-full min-h-screen justify-center items-center">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-blue-600 w-full max-x-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white">
            <div className="flex flex-col space-y-8 justify-between">
                <div>
                    <h1 className="font-bold text-4xl tracking-wide">Contact Us</h1>
                    <p className="pt-2 text-gray-300 text-sm">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quos sapiente molestiae optio aliquid aspernatur deserunt blanditiis repellat dolores. Omnis veritatis dolorem quidem ad dolore quod repellendus alias exercitationem saepe.
                    </p>
                </div>
                <div className='flex flex-col space-y-4'>
                    <div><div className="inline-flex space-x-2 items-center">
                        <ion-icon name="call-sharp" className="text-gray-300 text-xl"></ion-icon>
                        <span>+234 907 036 1277</span>
                    </div></div>
                    <div><div className="inline-flex space-x-2 items-center">
                        <ion-icon name="mail-sharp" className="text-gray-300 text-xl"></ion-icon>
                        <span>+234 907 036 1277</span>
                    </div></div>
                    <div><div className="inline-flex space-x-2 items-center">
                        <ion-icon name="location-sharp" className="text-gray-300 text-xl"></ion-icon>
                        <span>Abuja, F.C.T., Nigeria</span>
                    </div></div>
                </div>
            </div>
            <div>
                <div className="bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80">
                        <form action="" className="flex flex-col space-y-4">
                            <div>
                                <label for="" className="text-sm">Your name</label>
                            </div>
                            <div>
                                <input type="text" placeholder='your name' className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2mt-2 outline-none focus:ring-2 focus:ring-blue-300" />
                            </div>
                            <div>
                                <label for="" className="text-sm">Your email</label>
                            </div>
                            <div>
                                <input type="email" placeholder='your email' className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-blue-300" />
                            </div>
                            <div>
                                <label for="" className="text-sm">Message</label>
                                <textarea className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-blue-300"></textarea>
                            </div>
                            <button className="transition duration-500 transform hover:-translate-y-1 inline-block self-end bg-blue-600 text-lg font-meduim rounded-full text-white px-8 py-3 cursor-pointer">
                                Sign Up
                            </button>
                        </form>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default contact