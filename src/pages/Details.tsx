import ijen from '../assets/ijen.jpg'
import { motion } from 'framer-motion'

const cardVariants = {
	offscreen: {
		y: 50,
		opacity: 0
	},
	onscreen: (i: any) => ({
		y: 0,
		opacity: 1,
		transition: {
			type: "spring" as const,
			bounce: 0.4,
			duration: 0.8,
			delay: i * 0.2
		}
	})
}

export default function Details() {
    return (
        <>
					<section 
						className='relative bg-cover bg-center h-80 flex justify-center items-center text-white'
						style={{ backgroundImage: `url(${ijen})` }}
					>
						<div className='absolute inset-0 bg-black opacity-50'></div>
						<motion.div
							className='relative z-10 text-center px-4'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: "easeInOut" }}
						>
							<h1 className='text-5xl md:text-6xl font-extrabold tracking-tight'>Our Services</h1>
							<p className='mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto'>
							We offer a range of	 personalized travel experiences to make your dream vacation a reality.
							</p>
						</motion.div>
					</section>

					<section className='container mx-auto py-6 py-20'>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
						<motion.div
								className='bg-white rounded-xl shadow-lg p-8'
								custom={1}
								initial="offscreen"
								whileInView="onscreen"
								viewport={{ once: true, amount: 0.5 }}
								variants={cardVariants}
								whileHover={{ y: -10, scale: 1.03, transition: { type: "spring" as const, stiffness: 300 }}}
							>
								<h2 className='text-2xl font-bold text-gray-800 mb-4'>Travel Consulting</h2>
								<p className='text-gray-600 leading-relaxed'>
									TRIPICAL helps customers design the best trip according to their needs, from destination selection and activities to accommodation and itinerary management.
								</p>
							</motion.div>

							<motion.div
								className='bg-white rounded-xl shadow-lg p-8'
								custom={1}
								initial="offscreen"
								whileInView="onscreen"
								viewport={{ once: true, amount: 0.5 }}
								variants={cardVariants}
								whileHover={{ y: -10, scale: 1.03, transition: { type: "spring" as const, stiffness: 300 }}}
							>
								<h2 className='text-2xl font-bold text-gray-800 mb-4'>Small Group Trip</h2>
								<p className='text-gray-600 leading-relaxed'>
									Designed for 4–12 people, these trips are perfect for friends, small communities, or private gatherings that prioritize comfort and interaction.
								</p>
							</motion.div>

							<motion.div
								className='bg-white rounded-xl shadow-lg p-8'
								custom={1}
								initial="offscreen"
								whileInView="onscreen"
								viewport={{ once: true, amount: 0.5 }}
								variants={cardVariants}
								whileHover={{ y: -10, scale: 1.03, transition: { type: "spring" as const, stiffness: 300 }}}
							>
								<h2 className='text-2xl font-bold text-gray-800 mb-4'>Family Trip</h2>
								<p className='text-gray-600 leading-relaxed'>
									Focusing on safety, comfort, and activities suitable for all ages to ensure that every family member has a pleasant and memorable experience.
								</p>
							</motion.div>

						</div>
					</section>
				</>
    )
}
