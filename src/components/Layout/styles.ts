import css from 'styled-jsx/css';

export const globalStyles = css.global`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
  @import '../../styles/tailwind.css';

  /* @import './vars.css'; */

  /* @import './googleTranslate.css'; */

  body {
    background-color: #1c065d;
    color: #ac59c2;
    font-family: 'Roboto', sans-serif;
  }

  button:focus {
    outline: 0 !important;
  }

  /* Make clicks pass-through */
  #nprogress {
    pointer-events: none;
  }

  #nprogress .bar {
    background: #29d;
    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
  }

  /* Fancy blur effect */
  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px #29d, 0 0 5px #29d;
    opacity: 1;
    -webkit-transform: rotate(3deg) translate(0, -4px);
    -ms-transform: rotate(3deg) translate(0, -4px);
    transform: rotate(3deg) translate(0, -4px);
  }

  @media screen and (min-width: 1024px) {
    #nprogress .spinner {
      display: block;
    }
  }

  /* Remove these to get rid of the spinner */
  #nprogress .spinner {
    display: none;
    position: fixed;
    z-index: 1031;
    top: 15px;
    right: 15px;
  }

  #nprogress .spinner-icon {
    width: 18px;
    height: 18px;
    box-sizing: border-box;
    border: solid 2px transparent;
    border-top-color: #29d;
    border-left-color: #29d;
    border-radius: 50%;
    -webkit-animation: nprogress-spinner 400ms linear infinite;
    animation: nprogress-spinner 400ms linear infinite;
  }

  .nprogress-custom-parent {
    overflow: hidden;
    position: relative;
  }

  .nprogress-custom-parent #nprogress .spinner,
  .nprogress-custom-parent #nprogress .bar {
    position: absolute;
  }

  @-webkit-keyframes nprogress-spinner {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }

  @keyframes nprogress-spinner {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

export default css`
  .nav-bg-black {
    top: 114px;
    min-height: calc(100% - 114px);
  }
`