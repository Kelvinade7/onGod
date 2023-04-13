import mes from './images/Path.png'
import mess from './images/Message.png'
import mess1 from './images/Mobile.png'
import mess2 from './images/Location.png'
import mes1 from './images/Path1.png'
import mes2 from './images/Path2.png'
import mes3 from './images/Path3.png'
function Footer(){
    return(
        <div id='footer'>
              <p style={{marginLeft:'11.5%',fontSize:'36px',}} id='cre1'>Credapay</p>
              <p id='cre2' style={{marginLeft:'31%',marginTop:'-61px'}}>Quick Links</p>
              <p id="cre2" style={{marginLeft:'51%',marginTop:'-51px'}}>Services</p>
              <p id="cre2" style={{marginLeft:'70%',marginTop:'-49px'}}>Reach us</p>
              <p style={{fontSize:'14px',width:'17%',marginLeft:'11.5%',height:'96px'}}>Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc
                 quam ac sed turpis volutpat. Cursus sed massa non nisi, placerat.</p>
                 <ul id="list">
                    <li>Portfolio</li>
                    <li>Blogs</li>
                    <li>About</li>
                    <li>Press</li>
                    <li>Careers <span style={{color:'#2EC5CE'}}>we're hiring</span></li>
                 </ul>
                 <ul className="list2">
                    <li>UX/UI Design</li>
                    <li>App Development</li>
                    <li>Web Development</li>
                    <li>Quality Assurance</li>
                    <li>Machine Learning</li>
                 </ul>
                 <div style={{marginLeft:'11%',marginTop:'-70px'}}>
                    <span><img src={mes} id='imic'alt='icon'/></span>
                    <span><img src={mes1} id='imic'alt='icon'/></span>
                    <span><img src={mes2} id='imic'alt='icon'/></span>
                    <span><img src={mes3} id='imic'alt='icon'/></span>

                 </div>
                 <div>
                    <ul id='last'>
                        <li><span><img src={mess} alt='icon' id='fin'/></span>hello@landify.co</li>
                        <li><span><img src={mess1} alt='icon' id='fin'/></span> +91 98765 43210 </li>
                        <li><span><img src={mess2} alt='icon' id='fin'/></span>772 Lyonwood Ave
Walnut, CA 91789</li>

                    </ul>
                 </div>
                 <p style={{marginLeft:'11.6%',marginTop:'122px'}}>© 2020 Landify UI Kit. All rights reserved</p>
                 <p style={{marginLeft:'60%',marginTop:'-35px'}}>Terms & Conditions  </p>
                 <p style={{marginLeft:'71%',marginTop:'-35px'}}>| Privacy Policy </p>
                 <p style={{marginLeft:'79.6%',marginTop:'-33px'}}>| Sitemap</p> 
                 <p style={{marginLeft:'84.9%',marginTop:'-32.7px'}}>| Disclaimer</p>

             </div>
    )
}
export default Footer