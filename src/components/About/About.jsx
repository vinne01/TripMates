import React from 'react'
import { Outlet } from 'react-router-dom';

export default function About() {
  return (
   
      <div className="py-16 bg-white">
         <Outlet/>
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://images.pexels.com/photos/4050289/pexels-photo-4050289.jpeg?auto=compress&cs=tinysrgb&w=600"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                      
       
                          TripMate application 
                      </h2>
                      <p className="mt-6 text-gray-600">
                      TripMate is the all-in-one app designed to make your travel experience smooth and unforgettable. Whether you're planning a weekend getaway or a long vacation, TripMate allows you to log and manage your contacts, ensuring you stay connected with everyone important on your journey.
                      </p>
                      <p className="mt-4 text-gray-600">
                     1.Contact
                     2.Trip Rental Information
                     3.Trip Planning Made Easy
                     4.Personalized Recommendations

                      </p>
                  </div>
              </div>
          </div>
          <Outlet/>
      </div>
  );
}