import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters long."),
})

type ContactFormInputs = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const [serverMessage, setServerMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema)
  })

  const onSubmit = async (data: ContactFormInputs) => {
    setServerMessage('');
    setIsSuccess(false);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSuccess(true);
      setServerMessage('Success! Your message has been sent.')
      reset();
    } catch (error: any) {
      setIsSuccess(false);
      setServerMessage(`Error: ${error.message || 'Failed to send message.'}`)
    }
  }

  return (
    <div className='bg-white p-8 rounded-xl shadow-lg w-full'>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
        <div>
          <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
            Name
          </label>
          <input 
            id="name"
            type="text"
            {...register('name')}
            className={`mt-1 block w-full px-3 py-2 bg-white border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm`}
          />
          {errors.name && <p className='mt-2 text-sm text-red-600'>{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
            Email
          </label>
          <input 
            id="email"
            type="email"
            {...register('email')}
            className={`mt-1 block w-full px-3 py-2 bg-white border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm`}
          />
          {errors.email && <p className='mt-2 text-sm text-red-600'>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor='message' className='block text-sm font-medium text-gray-700'>
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            {...register('message')}
            className={`mt-1 block w-full px-3 py-2 bg-white border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded shadow-sm placeholder-gray-400 focus:outline-none focue:ring-yellow-500 focus:border-yellow-500 sm:text-sm resize-none`}
          ></textarea>
          {errors.message && <p className='mt-2 text-sm text-red-600'>{errors.message.message}</p>}
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-500 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:bg-gray-400 disabled:cursor-not-allowed'
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
      {serverMessage && (
        <p className={`mt-4 text-center text-sm ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>
          {serverMessage}
        </p>
      )}
    </div>
  )
}

export default ContactForm;