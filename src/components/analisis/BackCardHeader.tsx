import { getImgClassHero } from '../../utils/localFunction';

interface Props {
  color: string | undefined;
  json: any;
  upgrade: any;
}

const BackCardHeader: React.FunctionComponent<Props> = ({ color, json, upgrade }) => {
  const bgColor = `bg-${color}-800`

  return (
    <div className={`px-2 pt-6 pb-2 rounded-t-lg ${bgColor} text-xs md:text-sm lg:text-base`}>
      <div className='grid grid-cols-12 gap-1 p-1 bg-gray-900 bg-opacity-75 rounded-lg'>
        <div className='col-span-3 space-y-2 text-white'>
          <div className='flex'>
            <img className='object-contain w-5' src='./attack.png' alt='Ataque' />
            <span className='ml-1 text-bold'>{json.attack}</span>
          </div>
          <div className='flex'>
            <img className='object-contain w-5' src='./defense.png' alt='Defensa' />
            <span className='ml-1 text-bold'>{json.defense}</span>
          </div>
          <div className='flex'>
            <img className='object-contain w-5' src='./health.png' alt='Vida' />
            <span className='ml-1 text-bold'>{json.health}</span>
          </div>
        </div>
        <div className='col-span-2 space-y-2 text-white'>
          <div className='flex'>
            <span className='text-green-600 text-bold'>
              +
              {upgrade.attack}
            </span>
          </div>
          <div className='flex'>
            <span className='text-green-600 text-bold'>
              +
              {upgrade.defense}
            </span>
          </div>
          <div className='flex'>
            <span className='text-green-600 text-bold'>
              +
              {upgrade.health}
            </span>
          </div>
        </div>
        <div className='col-span-2 space-y-2 text-white'>
          <div className='flex'>
            <span className='text-bold'>
              =
              <span className='ml-2'>{upgrade.attack + json.attack}</span>
            </span>
          </div>
          <div className='flex'>
            <span className='text-bold'>
              =
              <span className='ml-2'>{upgrade.defense + json.defense}</span>
            </span>
          </div>
          <div className='flex'>
            <span className='text-bold'>
              =
              <span className='ml-2'>{upgrade.health + json.health}</span>
            </span>
          </div>
        </div>
        <div className='col-span-2 space-y-2'>
          <div className='flex'>
            <img className='object-contain w-5' src={getImgClassHero(json.classHero)} alt='Special Skill' />
            <span className='ml-1 text-bold'>+{upgrade.specialSkill}</span>
          </div>
        </div>
        <div className='col-span-3 space-y-2'>
          <div className='flex'>
            <img className='object-contain w-5' src='./critic.webp' alt='Special Skill' />
            <span className='ml-1 text-bold'>+{upgrade.critic}%</span>
          </div>
          <div className='flex'>
            <img className='object-contain w-5' src='./heart.svg' alt='Special Skill' />
            <span className='ml-1 text-bold'>+{upgrade.extraHealth}%</span>
          </div>
          <div className='flex'>
            <img className='object-contain w-5' src='./mana.webp' alt='Special Skill' />
            <span className='ml-1 text-bold'>+{upgrade.mana}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackCardHeader;
