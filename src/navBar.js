import React from 'react';
import './navBar.css';
import { StickyContainer, Sticky } from 'react-sticky';


// ...

class Navbar extends React.Component {
  render() {
    return (


        <Sticky>

          {({
            style,


            // the following are also available but unused in this example
            isSticky,
            wasSticky,
            distanceFromTop,
            distanceFromBottom,
            calculatedHeight
          }) => (
            <header style={style}>
              {<h1>Public Square Project</h1>}
            </header>
          )}
        </Sticky>


    );
  }
};

export default Navbar
