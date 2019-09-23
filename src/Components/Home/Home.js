import React, {Component} from 'react';
import homeMain from '../Images/Home-Main.jpg'
import thinkBoard from '../Images/thinkBoard.JPG'
import codeAuthority from '../Images/codeAuthority.JPG'
import './Home.css'
import BlogCard from './BlogCard'
import axios from 'axios';

class Home extends Component{
    constructor(){
        super()
        this.state = {
            blogItems: [],
            loading: true,
            error: ""
        }
    this.updateBlogs = this.updateBlogs.bind(this); 
    }

    componentDidMount() {
        axios
          .get("/")
          .then(response => {
            this.setState({ blogItems: response.data, loading: false });
          })
          .catch(error => {
            console.log(error);  
            this.setState({ loading: false, error: "An error occurred" });
          });
      }
  
      updateBlogs(passBlogItems) {
        this.setState({blogItems: passBlogItems})
      }


    render(){
      console.log(this.state.blogItems)
        const { blogItems } = this.state;
        return(
            <main className = 'homeMainPage'>
                <img id ='homeMain' alt = 'main' src={homeMain}/> 

            <div className='divider'>
              <section className='leftBox homeBox'>
                <div className='homeText'>About Us</div>
                <div className='homeAboutUs ptext'>
                    <p>Lorem ipsum dolor sit amet consectetuer adipiscing elit.  In pellentesque nulla ac elit bibendum maximus.  Etiam vestibulum ex eu neque facilsis, molestie pharetra odio ultricies.  Aliquam volupat nisi eget scelerisque mattis.  Vestibulum nec pharetra ante, et ultricies diam.  Aenean placerat nibh enim, non lobortis velit portitor vel, scelerisque sed urna.  Cras molestie, massa eu egestas fermentum, risas metus lobortis dolor, vitae rutrum risus orci id tortor.  Pellentesque ac auctor tellus.  Nunc tempus mollis massa, nec dictum erat semper at.  Fusce eu enim in velit dignissum tincidunt.  Donec suscipit, diam faucbus porta, enim nulla tincidunt dui, a suscipit dolor erat ac nisi.  Aliquam id elit ultricies, facilisis tortor vel, molestie nulla.  Cras finibus lorem ut pellentesque facillsis.</p>
                    <p>Integer at arcu in est elefend vulputate vel non tellus.  Fusce ac commodo arcu.  Nula tincidunt erat non urna malesuada maximus.  In hac habitasse paltea dicums.  Etiam ultricies faubus hendrerit.  Etiam sodales at eros a vestbulum.  In urna ex, vestibulam ac egestas sed, pulvinar ac tortor.  Nullam eu metus non dui commodo fermentumhendrerit in tellus.  Nullam egestas, tortor vitae vestibulum lacinia, risus magna dictum lectus, sit amet pulvinar enim justo vel enim.  Interdum et malesuada fames ac ante ipsum primis in faucibus.  Suspendisse lorortis varius sollcitudin.  Phaselius sed dignissim odio.  Cras feugiat due at neque gravida rhoncus.</p>
                </div>
                
                <div className='homeText'>Contact Us</div>
                <div className='homeContactUs'>
                    <p className= 'homeContactUsContent'>
                         Frisco Headquarters <br></br>
                         Software Development Office<br></br>
                         3001 Dallas Pkwy #500<br></br>
                         Frisco, TX 75034
                    </p>
                    <p className='homeContactUsContent'>
                        Toll Free: (888) 346-6334<br></br>
                        Local: (214 774-4262)
                    </p>
                </div>
              </section>

              <section className='rightBox homeBox'>
                <div className='homeText blogHeadText'>Blog</div>



            <div className='blogMain'>
              {/* {this.state.loading ? <p>Loading...</p> : null}
              {this.state.error}
            */}
             {/* {blogItems.map((blogItem, index) => (
               <BlogCard key={index} blogItem={blogItem} updateBlogs={this.updateBlogs}/>))}    */}

              <section className= 'blogSection'>
                <img src={codeAuthority} className="blogPicture" alt='blogPic'></img>
                <p className = 'blogText'> So you want to work at Code Authority? </p>
              </section>


              <section className= 'blogSection'>
                <img src={thinkBoard} className="blogPicture" alt='blogPic'></img>
                <p className = 'blogText'> Become the best developer you can be </p>
              </section>

          </div>








              </section>



            </div>
                
        



            </main>
        )
    }
}

export default Home;