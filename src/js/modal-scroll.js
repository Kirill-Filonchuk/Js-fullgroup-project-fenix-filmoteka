
const disableScroll = () => {
  const widthScroll = window.innerWidth - document.body.offsetWidth;
  document.body.dbScrollY = window.scrollY;

// console.log('window.innerWidth', window.innerWidth)
//   console.log('document.body.offsetWidth', document.body.offsetWidth)
//   console.log('widthScroll', widthScroll)

  document.body.style.cssText = `
    position: fixed;
    top: ${-window.scrollY}px;
    
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding-right: ${widthScroll}px;
    `;
  };
      
const enableScroll = () => {
  document.body.style.cssText = '';
  
    window.scroll({
    top: document.body.dbScrollY,
});
};

module.exports = {
  disableScroll,
  enableScroll,
};

