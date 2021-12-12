import React from 'react';
import {MobileNav} from './mobileNav';
const MobileNavQuery=()=> {
  const [dimensions, setDimensions] = React.useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  })
  React.useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: 600
      })
    
}

    window.addEventListener('resize', handleResize)
  })
  return <MobileNav>Rendered at {dimensions.width} x {dimensions.height}</MobileNav>
}
export{MobileNavQuery};