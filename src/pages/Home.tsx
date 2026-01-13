import { Link } from "react-router-dom"
import { motion } from 'framer-motion'

import homeImg from '../assets/home-img.jpg'
import homeImg2 from '../assets/home-img-2.jpg'
import bali from '../assets/bali.jpg'
import bromo from '../assets/bromo.jpg'
import ijen from '../assets/ijen.jpg'
import surfing from '../assets/surfing.jpg'

const destinations = [
    { name: 'Bali', image: bali },
    { name: 'Bromo', image: bromo },
    { name: 'Ijen', image: ijen },
    { name: 'Mentawai', image: surfing },
]

const sectionVariants = {
	offscreen: {
		y: 50,
		opacity: 0,
	},
	onscreen: {
		y:  0,
		opacity: 1,
		transition: {
			type: 'spring' as const,
			bounce: 0.4,
			duration: 1.5,
		},
	},
}

const cardVariants = {
	offscren: {
		y: 50,
		opacity: 0
	},
	onscreen: (i: number) => ({
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

export default function Home() {
	return (
		<>
			<section className='relative h-screen bg-cover bg-center' style={{ backgroundImage: `url(${homeImg})` }}>
				<div className='absolute inset-0 bg-black opacity-50'></div>
				<div className='relative z-10 flex flex-col items-center justify-center h-full text-white px-4'>
					<motion.h1 
						className ='text-4xl md:text-6xl font-extrabold leading-tight mb-4'
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: 'easeInOut'}}
					>
						Your Adventure Awaits
					</motion.h1>
					<motion.p 
						className='text-lg md:text-xl max-w-2xl mb-8 text-center'
						initial={{ opacity: 0, y: -30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2, ease: 'easeInOut'}}
					>
						Discover breathtaking destinations and create unforgettable memories. Let's plan your next journey.</motion.p>
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut'}}
						whileHover={{ scale: 1.05, transition: { type: 'spring' as const, stiffness: 400, damping: 17 } }}
					>
						<Link 
								to="/details"
								className='bg-yellow-500 px-8 py-3 font-semibold rounded-lg shadow-lg hover:bg-green-600 focus:outline-none focus:ring-yellow-400 focus:ring-opcity-75 transition-transform transform hover:scale-105'
						>
								Explore Tours
						</Link>
					</motion.div>
				</div>
			</section>

			<motion.section 
				className='bg-gray-50 py-16 sm:py-20'
				initial="offscreen"
				whileInView="onscreen"
				viewport={{ once: true, amount: 0.2 }}
				variants={sectionVariants}
			>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<h2 className='text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12'>Popular Destinations</h2>
					<div className='grid grid-cols-1 sm:gris-cols-2 lg:grid-cols-4 gap-8'>
						{destinations.map((dest, i) => (
								<motion.div 
									key={dest.name} 
									className='group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300'
									custom={i}
									initial="offscreen"
									whileInView="onscreen"
									viewport={{ once: true, amount: 0.5 }}
									variants={cardVariants}
									whileHover={{ y: -8, scale: 1.02, transition: { type: "spring" as const, stiffness: 300 }}}
								>
									<div className='relative'>
										<img src={dest.image} alt={dest.name} className='w-full h-64 object-cover'/>
										<div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70'></div>
										<h3 className='absolute bottom-4 left-4 text-2xl font-bold text-white'>
												{dest
												.name}
										</h3>
									</div>
								</motion.div>
							)
						)}
					</div>
				</div>
			</motion.section>

			<section className="py-16 sm:py-20 bg-white overflow-hidden">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
					<motion.div 
						className="w-full md:w-1/2"
						initial={{ opacity: 0, x: -100 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.8, ease: 'easeInOut'}}
					>
						<img src={homeImg2} className='w-full h-auto rounded-xl shadow-lg' alt='couple under waterfall'/>
					</motion.div>
					<motion.div 
						className='w-full md:w-1/2'
						initial={{ opacity: 0, x: 100 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.8, ease: 'easeInOut'}}
					>
						<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Create Unforgettable Memories</h2>
						<p className="text-gray-600 mb-4 leading-relaxed">
							Our mission is to provide you with the most amazing travel experiences. From stunning volcanic craters to serene beaches and vibrant cultural hubs, we have a destination for every adventurer.
						</p>
						<p className="text-gray-600 leadinng-relaxed">
							We handle the details so you can focus on what truly matters: soaking in the moments, discovering new perspectives, and creating memories that will last a lifetime.
						</p>
					</motion.div>
				</div>
			</section>
		</>
	)
}