import React, {Component} from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import WebsiteAssesmentwords from '../Images/Website-Assesment-words.JPG'




class Header extends Component {
  constructor() {
        super();
        this.state = {
             menuStatus: 'dropdown-menu-close'    
        }
  }

  handleClick = () => {
        if(this.state.menuStatus === 'dropdown-menu-open'){
            this.setState({menuStatus: 'dropdown-menu-close'})
        }
        else {this.setState({menuStatus: 'dropdown-menu-open'})}
        }



render(){          
  return (
   <div>    



  <div className="navHeader-over700">

   <img id = 'asses-over700' alt = 'webAssess' src={WebsiteAssesmentwords}/> 

    <div className = 'button-container-over700'> 
      <Link to="/">
              <button className='navButton'>Home</button>
      </Link>
      <Link to="/Work">
              <button className='navButton'>Work</button>
      </Link>
      <Link to="/About">
          <button className='navButton'> About</button>
      </Link>
      <Link to="/Contact">
          <button className='navButton'> Contact</button>
      </Link>
    </div>   
  </div>  





  <div className="navHeader-under700">


    <button 
       onClick = {this.handleClick}
       className = 'menu-button'>
        <img id='hamburger-menu'
             alt='menu'
             src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png">
        </img>
    </button>




  <div className={this.state.menuStatus} >
    <Link to="/">
            <button className='navButton' id= 'under700-text'>Home</button>
    </Link>

    <Link to="/services">
            <button className='navButton' id= 'under700-text'>Work</button>
    </Link>

    <Link to="/shop">
            <button className='navButton' id= 'under700-text'>About</button>
    </Link>

    <Link to="/about">
            <button className='navButton' id= 'under700-text'>Contact</button>
    </Link>
  </div>

</div>
  <img id = 'asses-under700' alt = 'webAssess' src={WebsiteAssesmentwords}/> 

</div>   
  )
}
}

    
    export default (Header);