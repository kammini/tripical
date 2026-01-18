import { motion } from 'framer-motion'
import bromo from '../assets/bromo.jpg'
import bali from '../assets/bali.jpg'

const sectionVariants = {
	offscreen: {
		x: 50,
		opacity: 0,
	},
	onscreen: {
		x:  0,
		opacity: 1,
		transition: {
			duration: 0.8,
      ease: 'easeInOut'
		},
	},
}

const imageVariants = (fromLeft: boolean) => ({
	offscreen: {
		opacity: 0,
		x: fromLeft ? -100 : 100
	},
	onscreen: {
		opacity: 1,
		x: 0,
		Transition: {
			duration: 0.8,
			ease: 'easeInOut'
		}
	}
})

const textVariants = (fromLeft: boolean) => ({
	offscreen: {
		opacity: 0,
		x: fromLeft ? -100 : 100
	},
	onscreen: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.8,
			delay: 0.2,
			ease: 'easeInOut'
		}
	}
})

export default function About() {
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
						transition={{ duration: 0.8, ease: "easeInOut" }}
					>
						About Tripical
					</motion.h1>
					<motion.p
						className='mt-4 text-lg text-gray-600 max-w-3xl mx-auto'
						initial={{ opacity: 0, y: -30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut"}}
					>
					Your trusted partner in crafting warm, meaningful, and unforgettable travel experiences.
					</motion.p>
				</div>
			</motion.section>

			<section className="py-16 sm:py-20 bg-whote overflow-hidden">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col md:flex-row-reverse items-center gap-12">
						<motion.div
							className="w-full md:w-1/2"
							initial="offscreen"
							whileInView="onscreen"
							viewport={{ once: true, amount: 0.5 }}
							variants={imageVariants(false)}
							whileHover={{ scale: 1.05, transition: { type: "spring" as const, stiffness: 300 }}}
						>
							<img 
									src={bali}
									alt="Balinese temple"
									className="w-full h-auto rounded-xl shadow-lg"
							/>
						</motion.div>
						<motion.div
								className="w-full md:w-1/2"
								intial="offscreen"
								whileInView="onscreen"
								viewport={{ once: true, amount: 0.5 }}
								variants={textVariants(true)}
							>
							<h2 className='text-3xl font-bold text-gray-800 mb-4'>Our Mission</h2>
							<p className='text-gray-600 leading-relaxed mb-4'>
							Tripical is an agency that specializes in tropical tourism with a clear purpose: to create warm, meaningful, and unforgettable experiences. We are here to help you—especially small groups and families—find the best way to enjoy your trip without any worries about activities or places.
							</p>
							<p className='text-gray-600 leading-relaxed'>
							We offer expert travel consulting with curated tour packages that can be custom-made to fit your unique needs and desires. Your dream trip is our command.
							</p>
						</motion.div>
					</div>
				</div>
			</section>

			<section className='bg-yellow-500 py-16 sm:py-20'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<motion.blockquote 
						className='text-2xl sm:text-3xl font-medium text-white italic'
						initial="offscreen"
						whileInView="onscreen"
						viewport={{ once: true, amount: 0.8 }}
						variants={sectionVariants}
					>
					"Make your trip special and meaningful..."
					</motion.blockquote>
				</div>
			</section>

			<section className='py-16 sm:py-20 bg-white overflow-hidden'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex flex-col md:flex-row items-center gap-12'>
						<motion.div
							className='w-full md:w-1/2'
							initial="offscreen"
							whileInView="onscreen"
							viewport={{ once: true, amount: 0.5 }}
							variants={imageVariants(true)}
							whileHover={{ scale: 1.05, transition: { type: "spring" as const, stiffness: 300 }}}
						>
								<img 
									src={bromo}
									alt="Mount Bromo at sunrise"
									className='w-full h-auto rounded-xl shadow-lg'
								/>
						</motion.div>
						<motion.div
							className='w-full md:w-1/2'
							initial="offscreen"
							whileInView="onscreen"
							viewport={{ once: true, amount: 0.5 }}
							variants={textVariants(false)}
						>
							<h2 className='text-3xl font-bold text-gray-800 mb-4'>Why Choose Use?</h2>
							<p className='text-gray-600 leading-relaxed mb-4'>We believe that travel is more than just seeing new places. It's about connecting with new cultures, creating lasting bonds, and discovering more about yourself. Our expert guides are passionate storytellers who bring each destination to life.</p>
							<ul className='list-disc list-inside text-gray-600 space-y-2'>
								<li>Personalized itineraries for every traveler.</li>
								<li>Hassle-free planning from start to finish.</li>
								<li>Local guides with deep cultural knowledge.</li>
								<li>Commitment to sustainable and responsible tourism.</li>
							</ul>
						</motion.div>
					</div>
				</div>
			</section>
		</>
	)
}