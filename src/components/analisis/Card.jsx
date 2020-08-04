import TopCard from './TopCard';
import { useDataPj } from '../../hooks';
import ButtonTutorial from './ButtonTutorial';

const Card = ({ img, json }) => {
  const { dataPj } = useDataPj({ stars: json.stars, element: json.element, classHero: json.classHero });
  return (
    <div className={`Card max-w-sm rounded-lg shadow-lg text-white pt-5 pb-6 px-4 bg-${dataPj.color}-700 border-2 border-${dataPj.color}-500`}>
      <TopCard data={{ src: dataPj.srcElement, alt: json.element, name: json.name }} />
      <div className='flex justify-center'>
        <div className='flex items-center justify-center w-2/5 p-1 bg-gray-900 border-l-4 border-r-4 border-gray-800'>
          {
            dataPj.starsNode.map((id) => {
              return (
                <div key={`star-${id}`}>
                  <img className='object-contain w-6 h-full' src='./static/star.png' alt='star' />
                </div>
              );
            })
          }
        </div>
      </div>
      <div className='relative'>
        <div className='absolute flex items-start justify-center div-power'>
          <div className='relative'>
            <p className='px-4 text-lg font-bold text-center bg-red-900 border-4 border-red-500 rounded-full text-border-black'>
              {`${json.power}`}
            </p>
            <div className='absolute w-full font-bold text-center text-red-400 div_power'>
              <p className='text-xs italic text-border-black'>PODER</p>
            </div>
          </div>
        </div>
        <img className='object-contain w-full rounded-lg' src={img} alt={json.name} />
      </div>
      <div className='my-2 rounded-lg shadow-inner'>
        <div className={`px-4 py-2 grid grid-cols-3 gap-4 rounded-t-lg bg-${dataPj.color}-800`}>
          <div className='flex items-center justify-center'>
            <img className='object-contain w-6 h-full mr-1' src='./static/attack.png' alt='Attack' />
            <p className='text-lg font-bold text-center lg:text-3xl text-border-black'>{json.attack}</p>
          </div>
          <div className='flex items-center justify-center'>
            <img className='object-contain w-6 h-full mr-1' src='./static/defense.png' alt='Defense' />
            <p className='text-lg font-bold text-center lg:text-3xl text-border-black'>{json.defense}</p>
          </div>
          <div className='flex items-center justify-center'>
            <img className='object-contain w-6 h-full mr-1' src='./static/health.png' alt='Health' />
            <p className='text-lg font-bold text-center lg:text-3xl text-border-black'>{json.health}</p>
          </div>
        </div>
        <div className={`px-4 py-2 bg-${dataPj.color}-900 border-t border-b border-${dataPj.color}-600 text-lg`}>
          <h3 className='mb-2 text-xl font-bold text-center'>Informacion Extra</h3>
          <div>
            <p>
              Velocidad de Mana:
              {` ${json.manaSpeed}`}
            </p>
          </div>
          <div className='flex items-center'>
            <p>Clase:</p>
            <img className='object-contain w-4 h-full ml-2 mr-1' src={dataPj.srcClassHero} alt={json.classHero} />
            <p className='capitalize'>{json.classHero}</p>
          </div>
          <div>
            <p>
              Familia:
              <span className='capitalize'>{` ${json.family}`}</span>
            </p>
          </div>
          <div>
            <p>
              Evento:
              <span className='capitalize'>{` ${json.event}`}</span>
            </p>
          </div>
        </div>
        <div className={`px-4 py-2 bg-${dataPj.color}-900 rounded-b-lg`}>
          <div>
            <h3 className='mb-2 text-xl font-bold text-center'>Efectos</h3>
            <ul className='list-disc list-inside'>
              {
                json.effect.map((effect) => {
                  const { id, data } = effect;
                  if (!data) {
                    return null;
                  }
                  return (
                    <li key={id} className='capitalize'>{data}</li>
                  );
                })
              }
            </ul>
          </div>
        </div>
      </div>
      <ButtonTutorial video={json.video} />
      <style jsx>
        {`
          .div_power {
            bottom: -0.6rem;
          }

          .div-power {
            right: -0.75rem;
            top: -0.75rem;
          }

          .button-tutorial {
            bottom: -1.5rem;
          }

          .div-name {
            top: -1rem;
          }

          .img-element {
            left: -1rem;
            top: -0.4rem;
          }
        `}
      </style>
    </div>
  );
};

export default Card;
