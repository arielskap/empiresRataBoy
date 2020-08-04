const ButtonTalent = ({ data, powerUp }) => {

  const handleClick = (element) => {
    const { skill, index, row } = data;
    let valueUpgrade;
    let otherButton;
    let dataOtherButton;
    let valueDowngrade;
    if (skill) {
      if (element.currentTarget.classList.contains('bg-talent')) {
        valueUpgrade = { specialSkill: parseInt(data.skillData, 10) + powerUp.upgrade.specialSkill };
        element.currentTarget.classList.replace('bg-talent', 'bg-talent-active');
      } else {
        valueDowngrade = { specialSkill: powerUp.upgrade.specialSkill > 0 && powerUp.upgrade.specialSkill - parseInt(data.skillData, 10) };
        element.currentTarget.classList.replace('bg-talent-active', 'bg-talent');
      }
    } else {
      [...document.querySelectorAll(`.buttonTalent-${row}`)].some((button) => {
        otherButton = button !== element.currentTarget && button;
        return button !== element.currentTarget;
      });
      if (element.currentTarget.classList.contains('bg-talent')) {
        element.currentTarget.classList.replace('bg-talent', 'bg-talent-active');
        otherButton.classList.replace('bg-talent-active', 'bg-talent');
        dataOtherButton = otherButton.id.split('-');
        if (data.title === 'Bonificacion de ataque' || data.title === 'Bonificacion de defensa' || data.title === 'Bonificacion de vida') {
          valueUpgrade = data.title === 'Bonificacion de ataque' ? { attack: parseInt(data.skillData, 10) + powerUp.upgrade.attack } :
            data.title === 'Bonificacion de defensa' ? { defense: parseInt(data.skillData, 10) + powerUp.upgrade.defense } :
              data.title === 'Bonificacion de vida' && { health: parseInt(data.skillData, 10) + powerUp.upgrade.health };
          valueDowngrade = dataOtherButton[1] === 'Bonificacion de ataque' ? { attack: powerUp.upgrade.attack > 0 ? powerUp.upgrade.attack - parseInt(dataOtherButton[2], 10) : 0 } :
            dataOtherButton[1] === 'Bonificacion de defensa' ? { defense: powerUp.upgrade.defense > 0 ? powerUp.upgrade.defense - parseInt(dataOtherButton[2], 10) : 0 } :
              dataOtherButton[1] === 'Bonificacion de vida' && { health: powerUp.upgrade.health > 0 ? powerUp.upgrade.health - parseInt(dataOtherButton[2], 10) : 0 };
        }
      } else {
        element.currentTarget.classList.replace('bg-talent-active', 'bg-talent');
        if (data.title === 'Bonificacion de ataque' || data.title === 'Bonificacion de defensa' || data.title === 'Bonificacion de vida') {
          valueDowngrade = data.title === 'Bonificacion de ataque' ? { attack: powerUp.upgrade.attack > 0 ? powerUp.upgrade.attack - parseInt(data.skillData, 10) : 0 } :
            data.title === 'Bonificacion de defensa' ? { defense: powerUp.upgrade.defense > 0 ? powerUp.upgrade.defense - parseInt(data.skillData, 10) : 0 } :
              data.title === 'Bonificacion de vida' && { health: powerUp.upgrade.health > 0 ? powerUp.upgrade.health - parseInt(data.skillData, 10) : 0 };
        }
      }
    };
    powerUp.setUpgrade({ ...powerUp.upgrade, ...valueUpgrade, ...valueDowngrade });
  };

  return (
    <button
      id={`buttonTalentData-${data.title}-${data.skillData}`}
      className={`${!data.skill && `buttonTalent-${data.row}`} bg-talent transform rotate-45 w-16 h-16 p-2 flex justify-center items-center`}
      type='button'
      onClick={(e) => handleClick(e)}
    >
      <img
        className='object-contain rotate-n-45'
        src={
          data.title === 'Bonificacion de ataque' ? './static/attack.png' :
            data.title === 'Bonificacion de defensa' ? './static/defense.png' :
              data.title === 'Bonificacion de vida' ? './static/health.png' : data.srcClassHero
        }
        alt={data.classHero}
      />
    </button>
  );
};

export default ButtonTalent;
