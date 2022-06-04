import Image from 'next/image'
import { FaUserAlt, FaCode } from 'react-icons/fa'
import Table from '../components/Table'
import Nav from '../components/Nav'

const Resume = () => {
  return (
    <div id='resume' className='max-w-5xl mx-auto'>
      <Nav />
      <div className='flex justify-center py-12 text-3xl font-bold'>
        <h1>Resume</h1>
      </div>
      <div className='flex justify-center '>
        <Image
          src='/img-portfolio.jpg'
          alt='Picture of the author'
          width={200}
          height={200}
          objectFit='cover'
          className='rounded-full'
        />
      </div>
      <div className='flex justify-center py-8'>
        <a
          href='/CV_Sara.pdf'
          download
          className='w-38 text-xl py-2 px-3 bg-black text-white rounded-lg font-medium'
        >
          Descargar CV
        </a>
      </div>
      <div className='my-10'>
        <h2 className='flex gap-x-4 text-2xl font-semibold mb-4'>
          <FaUserAlt size={26} />
          Sobre mí
        </h2>
        <p>
          I consider myself a very curious person and a good learner. I am
          always investigating about new technologies, tools and ways to do
          things better. I am good at working in a team environment, always
          exchaning ideas about how to approach problems and solve them
          efficiently.
        </p>
      </div>
      <div className='my-10'>
        <h2 className='flex gap-x-4 text-2xl font-semibold mb-2'>
          <FaCode size={26} />
          Habilidades
        </h2>
        <Table title={'Seguimiento de Tráfico'} />
      </div>
    </div>
  )
}

export default Resume
