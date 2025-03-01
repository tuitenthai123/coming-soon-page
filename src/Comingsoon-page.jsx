import React from 'react'
import coverimg from "./asset/images/hero-desktop.jpg"
import logo from "./asset/images/logo.svg"
import nextbutton from "./asset/images/icon-arrow.svg"

const Comingsoon
  = () => {
    return (
      <div className="bg-[color:hsl(0,100%,98%)] h-screen">
        <div className='flex h-full w-full'>
          <div className='flex-1 border'>
            <div className='px-52 py-20'>
              <div>
                <img src={logo} alt="" />
              </div>
              <div className='mt-28 flex flex-col items-start justify-start w-2/3'>
                <span className='tracking-[.25em] text-[50px] font-[10] text-[color:hsl(0,36%,70%)]'>
                  WE'RE
                </span>
                <span className='tracking-[.35em] text-[50px] font-[500]'>
                  <p>COMING</p>
                  <p>SOON</p>
                </span>
                <span className='font-[400] text-[color:hsl(0,36%,70%)]'>
                  Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.
                </span>

                <form className='w-full mt-10 focus:border-[hsl(0,36%,70%)] focus:outline'>
                <div className='relative w-full focus:border-[hsl(0,36%,70%)] focus:outline'>
                  <input
                    type="text"
                    placeholder="Email Address"
                    className={`w-full px-6 py-4 rounded-full border border-[hsl(0,36%,70%)] focus:border-[hsl(0,36%,70%)] focus:outline`}
                  />
                  <button
                    className="absolute right-0 top-0 h-full px-12 rounded-full bg-gradient-to-r from-[hsl(0,80%,86%)] to-[hsl(0,74%,74%)] hover:from-[hsl(0,100%,98%)] "
                  >
                    <img src={nextbutton} alt="Submit" className="w-3" />
                  </button>
                </div>
              </form>
              </div>
            </div>
          </div>
          <div className='w-1/3'>
            <img src={coverimg} className='object-cover h-full ' alt="" />
          </div>
        </div>
        {/* <div className='flex items-center justify-center'>
        <div className='bg-white w-1/2 flex items-center justify-center p-3 rounded-xl'>
          <span className=" py-4 text-center text-sm text-gray-600">
            <div className="container mx-auto px-4">
              <p>
                Challenge by{' '}
                <a
                  href="https://www.frontendmentor.io?ref=challenge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[color:hsl(158,36%,37%)] hover:underline"
                >
                  Frontend Mentor
                </a>
                . Coded by{' '}
                <a
                  href="https://github.com/tuitenthai123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[color:hsl(158,36%,37%)] hover:underline"
                >
                  TuiTenThai
                </a>
                .
              </p>
            </div>
          </span>
        </div>
      </div> */}
      </div>
    )
  }

export default Comingsoon
