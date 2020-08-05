import Link from 'next/link';
import { animated } from 'react-spring';
import Layout from '../components/Layout';
import { useFade } from '../animations';

export default () => {
  const { fade } = useFade();
  return (
    <Layout title='404: Not found'>
      <animated.main className='flex flex-col items-center justify-center py-12 space-y-4' style={fade}>
        <div>
          <h1 className='text-xl font-bold text-center'>Pagina No Encontrada</h1>
          <h2 className='text-lg font-bold text-center'>Error 404</h2>
        </div>
        <img className='object-contain rounded' src='./static/muggy.png' alt='muggy not found' />
        <Link href='/'><a className='text-lg font-bold underline duration-300 transform hover:scale-105'>Volver al Home</a></Link>
      </animated.main>
    </Layout>
  );
};
