import { motion } from 'framer-motion'
import ContactForm from '../components/ContactForm'
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

const infoItemVariants = {
  offscreen: {
    opacity: 0,
    x: -50,
  },
  onscreen: (i: any) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.2,
      ease: 'easeInOut',
    },
  }),
}

export default function Contact() {
  return (
    <>
      <motion.section
        className='bg-gray-100 py-16 sm:py-20'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.h1
            className='text-4xl md:text-5xl font-extrabold text-gray-800'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut'}}
          >
            Get In Touch
          </motion.h1>
          <motion.p
            className='mt-4 text-lg text-gray-600 max-w-3xl mx-auto'
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay:0.2, ease: 'easeInOut' }}
          >
          Have a question or ready to plan your next adventure? We'd love to hear from you.
          </motion.p>
        </div>
      </motion.section>

      <section className='bg-gray-50 py-16 sm:py-20 overflow-hidden'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col md:flex-row gap-12 lg:gap-16'>
            <motion.div
              className='md:w-1/3'
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once:true, amount: 0.3 }}
            >
              <h2 className='text-3xl font-bold text-gray-800 mb-6'>Contact Information</h2>
              <div className='space-y-6'>
                <motion.div
                  className='flex items-start'
                  custom={0}
                  variants={infoItemVariants}
                  whileHover={{ scale: 1.05, x: 5, transition: { type: "spring" as const, stiffness: 300 }}}
                >
                  <MapPinIcon className='h-6 w-6 text-green-700 mt-1 flex-shrink-0'/>
                  <div className='ml-4'> 
                    <h3 className='text-lg font-semibold text-gray-700'>Address</h3>
                    <p className='text-gray-600'>123 Adventure Lane<br/>Wandelust City, 12345</p>
                  </div>
                </motion.div>
                <motion.div
                  className='flex items-start'
                  custom={1}
                  variants={infoItemVariants}
                  whileHover={{ scale: 1.05, x: 5, transition: { type: "spring" as const, stiffness: 300 } }}
                >
                  <EnvelopeIcon className='h-6 w-6 text-green-700 mt-1 flex-shrink-0'/>
                  <div className='ml-4'>
                    <h3 className='text-lg font-semibold text-gray-700'>Email</h3>
                    <p className='text-gray-600 hover:text-green-600'>
                      <a>hello@tripical.com</a>
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className='flex items-start'
                  custom={2}
                  variants={infoItemVariants}
                  whileHover={{ scale: 1.05, x: 5, transition: { type: "spring" as const, stiffness: 300 } }}
                >
                  <PhoneIcon className='h-6 w-6 text-green-700 mt-1' />
                  <div className='ml-4'>
                    <h3 className='text-lg font-semibold text-gray-700'>Phone</h3>
                    <p className='text-gray-600 hover:text-green-600'>
                      <a>(123) 93243-2341</a>
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className='md:w-2/3'
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: 'easeInOut'}}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}