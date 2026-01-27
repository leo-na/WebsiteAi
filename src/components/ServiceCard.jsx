import React, { useState } from 'react'



const ServiceCard = ({ service, index }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  return (
    <div className="relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white/10">
      
      
      <div
        className="pointer-events-none absolute z-0 w-[300px] h-[300px] rounded-full blur-2xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 mix-blend-lighten opacity-70 transition-opacity duration-500"
        style={{
          top: position.y - 150,
          left: position.x - 150,
        }}
      />

    
      <div className="relative z-10 flex items-center gap-10 p-8 rounded-[10px] bg-white dark:bg-gray-900 transition-all hover:p-7.5 hover:m-0.5">
        
      
        <div className="rounded-full bg-gray-100 dark:bg-gray-700">
          <img
            src={service.icon}
            alt=""
            className="m-2 max-w-24 rounded-full bg-white dark:bg-gray-900"
          />
        </div>

    
        <div className="flex-1">
          <h3 className="font-bold">{service.title}</h3>
          <p className="mt-2 text-sm">{service.description}</p>
        </div>

      </div>
    </div>
  )
}

export default ServiceCard
