
import vamp from './home-images/homeSlider/vamp-home.jpg';
import originals from './home-images/homeSlider/originals-home.jpeg';
import legacies from './home-images/homeSlider/legacies-home.jpg';
import teenwolf from './home-images/homeSlider/teenwolf-home.jpg';
import twilight from './home-images/homeSlider/twilight-home.jpg';
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick";

function HomeSlider() {
     var settings = {   
          infinite: true,  
          speed: 300,  
          slidesToShow: 1,  
          slidesToScroll: 1, 
          autoplay:true,
          autoplaySpeed:1500,
          };
    return (
       
    <section  className='slider' >
                <Slider {...settings} > 
                <div>
                    <img src= {vamp} alt='vampire diaries' className='inspired-by'/>
                </div>
                <div>
                    <img src= {originals} alt='originals' className='inspired-by'/>
                </div>
                 <div>
                    <img src= {legacies} alt='legacies' className='inspired-by'/>
                </div>
                 <div>
                    <img src= {teenwolf} alt='teenwolf' className='inspired-by'/>
                </div>
                 <div>
                    <img src= {twilight} alt='twilight' className='inspired-by'/>
                </div>
               
                </Slider>
            </section>
    );
}

export default HomeSlider;