import React,{useState} from 'react'
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'
import {useNavigate} from 'react-router-dom'


function Faq() {
  const navigation = useNavigate();
    const [openItem, setOpenItem] = useState(0)
    const faqs = [
      {
        question: 'What do I need to rent a car?',
        answer:
          "To rent a car, you need a valid driver's license, a credit card in your name, and proof of insurance. Some rentals may require additional documentation for international drivers.",
      },
      {
        question: 'Can I add an additional driver to my rental?',
        answer:
          "Yes, you can add additional drivers to your rental. Each additional driver will need to present their valid driver's license and may be subject to an additional fee.",
      },
      {
        question: 'What is your cancellation policy?',
        answer:
          'Reservations can be cancelled up to 48 hours before the scheduled pickup time for a full refund. Cancellations made within 48 hours may be subject to a cancellation fee.',
      },
      {
        question: 'Is there a mileage limit on rentals?',
        answer:
          'Most of our rentals come with unlimited mileage within the country of rental. Some specialty vehicles or long-term rentals may have mileage restrictions.',
      },
      {
        question: 'Do you offer one-way rentals?',
        answer:
          'Yes, we offer one-way rentals between many of our locations. Additional fees may apply depending on the pickup and drop-off locations.',
      },
      {
        question: 'What happens if I return the car late?',
        answer:
          "Late returns may be subject to additional hourly or daily charges. If you know you'll be returning the vehicle later than scheduled, please contact customer service to extend your rental.",
      },
    ]
  return (
    <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <p className="mt-2 text-3xl    leading-8 font-extrabold tracking-tight sm:text-4xl">
          Frequently Asked Questions
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Find answers to the most common questions about our car rental
          services.
        </p>
      </div>
      <div className="mt-12 max-w-3xl mx-auto">
        <dl>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border-b border-gray-200 ${index === 0 ? 'border-t' : ''}`}
            >
              <dt>
                <button
                  className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
                  onClick={() => setOpenItem(openItem === index ? -1 : index)}
                >
                  <span className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </span>
                  <span className="ml-6 flex-shrink-0">
                    {openItem === index ? (
                      <ChevronUpIcon className="h-5 w-5 text-blue-500" />
                    ) : (
                      <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                    )}
                  </span>
                </button>
              </dt>
              {openItem === index && (
                <dd className="pb-6 pr-12">
                  <p className="text-base text-gray-500">{faq.answer}</p>
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
      <div className="mt-12 text-center">
        <p className="text-gray-500">
          Still have questions? Contact our customer support team.
        </p>
        
        <button
          className="mt-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"

          onClick={() => navigation('/contact')}
        >
          Contact Support
        </button>
        
      </div>
    </div>
  </section>
  )
}

export default Faq