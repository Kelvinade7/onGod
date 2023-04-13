import airtel from './images/airtel.png'
import t from './images/test.png'
import play from './images/play.png'
import ap from './images/apple.png'
function Bod2(){
    return(
        <div style={{width:'100%'}}>
           <div className="p">
           <p >Get deals from  100+ companies</p>
           </div>
           <div className="a">
            <p>Subscribe to our application and get deals from top notch
             companies in the world every month. Be an exclusive member of the team.</p>
           </div>
           <img src={airtel} className='airtel' alt='airtel'/>
           <img src={t} alt='pic' style={{width:'100%',height:'500px'}}/><br/>
           <p className='m'>Manage your projects from your mobile</p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
           <p className='n'>Download the app to manage your projects, keep track of the progress and complete
             tasks without procastinating. Stay on track and complete on time!</p>
             <p className='g'>Get the App</p>
             <img src={play} style={{marginLeft:'32%'}} className='install'alt='pic'/>
             <img src={ap} className='install' alt='pic' style={{marginLeft:'3%',width:'19%',height:'79px'}}/>
             


        </div>
    )
}
export default Bod2