import { useState } from "react";

enum Side {
  Left = 'left',
  Right = 'right'
}

enum Title {
  Attack = 'bonificacion de ataque',
  Defense = 'bonificacion de defensa',
  Health = 'bonificacion de vida',
  AttackPlus = 'bonificacion de ataque plus',
  DefensePlus = 'bonificacion de defensa plus',
  HealthPlus = 'bonificacion de vida plus',
  Critic = 'critico',
  HealthExtra = 'curacion extra',
  Mana = 'bonificacion de mana'
}

interface props {
  data: {
    title: string,
    srcClassHero: string,
    classHero: string,
    index: number,
    row: number,
    skill: boolean,
    alone: boolean,
    skillData: string,
    side: Side
  },
  powerUp: {
    upgrade: {
      attack: number,
      defense: number,
      health: number,
      specialSkill: number,
      critic: number,
      extraHealth: number,
      mana: number,
    },
    setUpgrade: React.Dispatch<React.SetStateAction<{
      attack: number;
      defense: number;
      health: number;
      specialSkill: number;
      critic: number;
      extraHealth: number;
      mana: number;
    }>>
  },
  uniqueId: string
}


const ButtonTalent: React.FunctionComponent<props> = ({ data, powerUp, uniqueId }) => {
  const [buttonIsActive, setButtonIsActive] = useState(false);
  const titleLower = data.title.toLowerCase();

  const handleClick = (element: React.FormEvent<HTMLButtonElement>): void => {
    const { alone, row, side } = data;
    const parent = `div.card-${uniqueId}`;
    const beforeButtonsTalentRow = [...document.querySelectorAll(`${parent} .buttonTalent-${row-1}`)];
    const buttonsTalentRow = [...document.querySelectorAll(`${parent} .buttonTalent-${row}`)];
    const nextButtonsTalentRow = [...document.querySelectorAll(`${parent} .buttonTalent-${row+1}`)];
    const beforeButtonIsAlone = document.querySelector(`${parent} .buttonTalent-${row-1}`)?.classList.contains('buttonTalent-alone');
    let result;

    const verifyButtonsAreActive = (buttons: Element[], side?: Side, element?: React.FormEvent<HTMLButtonElement>): boolean => {
      return buttons.some((button) => {
        let buttonIsActive = button.classList.contains('bg-talent-active');
        if (side) {
          if (buttonIsActive && button.classList.contains(`buttonTalent-${side}`) ) {
            buttonIsActive = true;
          } else {
            buttonIsActive = false;
          }
        }
        if (element) {
          if (button === element.currentTarget && buttonIsActive) {
            buttonIsActive = false;
          }
        }
        return buttonIsActive;
      })
    }

    const isActiveBeforeButton = verifyButtonsAreActive(beforeButtonsTalentRow);
    const isActiveNextButton = verifyButtonsAreActive(nextButtonsTalentRow);
    const isActiveButtonOtherSide = verifyButtonsAreActive(buttonsTalentRow, undefined, element);
    const isActiveBeforeButtonSameSide = verifyButtonsAreActive(beforeButtonsTalentRow, side)

    const math = (operator: '+' | '-', x: number, y: number) => {
      return operator === '+' ? (x + y) : (x - y);
    }

    const newSkill = (operator: '+' | '-', title: string, skill?: boolean) => {
      const intSkillData = parseInt(data.skillData, 10);
      let titleLower;
      if (title) {
        titleLower = title.toLowerCase();
      }
      const result = (titleLower === Title.Attack  || titleLower === Title.AttackPlus ) ? { attack: math(operator, powerUp.upgrade.attack, intSkillData)} :
        (titleLower === Title.Defense  || titleLower === Title.DefensePlus ) ? { defense: math(operator, powerUp.upgrade.defense, intSkillData)} :
        (titleLower === Title.Health || titleLower === Title.HealthPlus) ? { health: math(operator, powerUp.upgrade.health, intSkillData)} :
        titleLower === Title.Critic ? { critic: math(operator, powerUp.upgrade.critic, intSkillData) } :
        titleLower === Title.HealthExtra ? { extraHealth: math(operator, powerUp.upgrade.extraHealth, intSkillData) } :
        titleLower === Title.Mana ? { mana: math(operator, powerUp.upgrade.mana, intSkillData) } :
        skill ? { specialSkill: math(operator, powerUp.upgrade.specialSkill,  intSkillData) }: {};
      return result;
    }

    if (alone) {
      if (row === 0) {
        if (!buttonIsActive) {
          result = newSkill('+', data.title, true)
          setButtonIsActive(true)
        } else if (!isActiveNextButton){
          result = newSkill('-', data.title, true)
          setButtonIsActive(false)
        }
      } else if (!isActiveNextButton && isActiveBeforeButton) {
        if (!buttonIsActive) {
          result = newSkill('+', data.title, true)
          setButtonIsActive(true)
        } else {
          result = newSkill('-', data.title, true)
          setButtonIsActive(false)
        }
      }
    } else if (isActiveBeforeButton && !isActiveNextButton && !isActiveButtonOtherSide && ( beforeButtonIsAlone || isActiveBeforeButtonSameSide )) {
      if (!buttonIsActive) {
        result = newSkill('+', data.title)
        setButtonIsActive(true)
      } else {
        result = newSkill('-', data.title)
        setButtonIsActive(false)
      }
    }
    powerUp.setUpgrade({ ...powerUp.upgrade, ...result });
  };

  return (
    <button
      id={`buttonTalentData-${data.title}-${data.skillData}`}
      className={`${!data.alone ? `buttonTalent-${data.side}` : 'buttonTalent-alone'} buttonTalent-${data.row} ${buttonIsActive ? 'bg-talent-active' : 'bg-talent'} transform rotate-45 w-16 h-16 p-2 flex justify-center items-center`}
      type='button'
      onClick={handleClick}
    >
      <img
        className='object-contain rotate-n-45'
        src={
          titleLower === 'bonificacion de ataque' ? './attack.png' :
          titleLower === 'bonificacion de defensa' ? './defense.png' :
          titleLower === 'bonificacion de vida' ? './health.png' :
          titleLower === 'bonificacion de ataque plus' ? './attackPlus.webp' :
          titleLower === 'bonificacion de defensa plus' ? './defensePlus.webp' :
          titleLower === 'bonificacion de vida plus' ? './vidaPlus.webp' :
          titleLower === 'bonificacion de mana' ? './mana.webp' :
          titleLower === 'curacion extra' ? './heart.svg' :
          titleLower === 'critico' ? './critic.webp' :
          data.srcClassHero
        }
        alt={data.classHero}
      />
      <style jsx>
        {`
          .bg-talent-active {
            background: rgb(161, 212, 220);
            background: radial-gradient(circle, rgba(161, 212, 220, 1) 50%, rgba(29, 127, 180, 1) 70%, rgba(15, 76, 110, 1) 100%);
            border-width: 4px;
            border-radius: 0.5rem;
            border-color: #d69e2e;
          }

          .bg-talent {
            background: rgb(215, 215, 215);
            background: radial-gradient(circle, rgba(215, 215, 215, 1) 0%, rgba(75, 75, 75, 1) 100%);
            border-width: 4px;
            border-radius: 0.5rem;
            border-color: #a0aec0;
          }

          {/*.bg-talent:hover {
            background: rgb(161, 212, 220);
            background: radial-gradient(circle, rgba(161, 212, 220, 1) 50%, rgba(29, 127, 180, 1) 70%, rgba(15, 76, 110, 1) 100%);
            border-width: 4px;
            border-radius: 0.5rem;
            border-color: #d69e2e;
          }*/}

          .rotate-n-45 {
            transform: rotate(-45deg);
          }
        `}
      </style>
    </button>
  );
};

export default ButtonTalent;
