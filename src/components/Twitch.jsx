import React, { useEffect } from 'react';

const Twitch = ({ targetID = 'twitch-embed', width = '940', height = '480', channel = '', theme = '' }) => {
  useEffect(() => {
    let embed;
    const script = document.createElement('script');
    script.setAttribute(
      'src',
      'https://embed.twitch.tv/embed/v1.js',
    );
    script.addEventListener('load', () => {
      embed = new window.Twitch.Embed(targetID, { targetID, width, height, channel, theme });
    });
    document.body.appendChild(script);
  }, []);

  return (
    <div id={targetID} className='max-w-6xl w-full' />
  );
};

export default Twitch;
