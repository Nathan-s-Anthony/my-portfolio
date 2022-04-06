import React from 'react';


const FadeInSection =(props) =>{
    const [isVisible, setVisible] = React.useState(true);
    const domRef = React.useRef();
    React.useEffect(() => {
      let observerRefValue = null;
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
      return () => observer.unobserve(observerRefValue);
    }, []);
    return (
      <div className={`fade-in-section ${isVisible ? 'is-visible flex justify-center items-center align-center' : ''}`}
        ref={domRef}
      >
        {props.children}
      </div>
    );
  }
  export{FadeInSection};