import thr from './images/Screen.png'
import fou from './images/icon1.png'
import fiv from './images/icon2.png'
import six from './images/icon4.png'
import sev from './images/icon3.png'
function Bod(){
    return(
        <div className="bod">
            <div style={{width:'100%'}}>
            <p className="h-1">App Features</p>
            <img src={fou} alt='icon' className='icon' style={{marginTop:'78px'}}/>
            <p className='h' style={{marginTop:'-60px'}}>Headline</p>
            <div className='lo'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum porta magna at blandit a.</p>  
            </div> <br/>
            <img src={fiv} alt='icon' className='icon'/>
            <p className='h' style={{marginTop:'-69px'}}>Headline</p>
            <div className='lo'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum porta magna at blandit a.</p>  
            </div> <br/>
            <img src={six} className='icon' alt='icon'/>
            <p className='h' style={{marginTop:'-69px'}}>Headline</p>
            <div className='lo'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum porta magna at blandit a.</p>  
            </div> <br/>
            <img src={sev} className='icon' alt='icon'/>
            <p className='h' style={{marginTop:'-69px'}}>Headline</p>
            <div className='lo'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum porta magna at blandit a.</p>  
            </div> 
            <img src={thr} className='hi' alt='phone'/>
            
            </div>
        </div>
    )
}
export default Bod