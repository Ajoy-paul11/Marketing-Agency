import React from 'react'

function ClientService({ imageSrc, imageAlt, title, description, buttonText, onButtonClick }) {
  return (
    <div>
    <div className="flex flex-col h-full overflow-hidden rounded-lg shadow-lg text-primary bg-primary hover:scale-105 duration-300 hover:shadow-xl hover:shadow-gray-400">
      <div className="relative h-36">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full bg-center"
          />
      </div>
      <div className="flex flex-col flex-grow p-4 text-sm">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 flex-grow mb-4">{description}</p>
        {/* <button 
          onClick={onButtonClick} 
          className="self-start px-4 py-2 bg-[#f4f5ff] rounded hover:scale-105 duration-200 transition-colors"
          >
          {buttonText}
        </button> */}
      </div>
    </div>
    </div>
  )
}

export default ClientService