import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';


const About = () => {
  const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };
  return (
    <StyledApp>
      <div>
      <section>
        <div>
          <div className="text-center drop-shadow-lg">
          <h3>Welcome to </h3>
          <h1 className="bg-gradient-to-b from-[#8DFBFF] to-[#308EC7] bg-clip-text text-8xl font-extrabold">BudgetFlow </h1>
          </div>
          <p className="text-center">
            BudgetFlow is a free App that helps you track your finances.
            Here you understand your income and spending. 
          </p >
          <a href="/#home">Home</a>
           <a href="/main" >Explore</a> 
        </div>
      </section> 
    </div>
    </StyledApp>
    
  )
}
const StyledApp = styled.div`
padding-top: 100px;
padding-bottom: 100px;
position: relative;
background-color: blue;
background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(0,152,155,1) 0.1%, rgba(0,94,120,1) 94.2% );
`

export default About