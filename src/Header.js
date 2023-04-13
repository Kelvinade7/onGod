import one from'./images/Ellipse.png'
import two from'./images/Home screen 1.png'
function Header(){
    return(
        <nav className="nav">
          <div className="top">
          <p className="cred">Credaplay</p>
          <p className="home">Home</p>
          <p className="services">Services</p>
          <p className="get">Get Help</p>
          <button className="top-b"><p  className="topc">Get Creda</p></button>
          </div>
          <div className="navt">
          Pay you bills EASIER and FASTER with Credapay
          </div>
          <img src={one} className='topi' alt='ellipse'/>
          <img src={two} className='topi2' alt='home'/>
          
        </nav>
    )
}
export default Header