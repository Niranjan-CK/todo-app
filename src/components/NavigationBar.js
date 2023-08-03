import Logo from '..//assets/images/headphone-2.jpg'
import '../'

export const NavigationBar = ()=>{
    return(
        <header>
            <div className="nav-header">
                <span className="logo">
                    <img src={Logo} alt="" className='logo-img'/>
                    <span className='logo-text'>Todo</span>
                </span>
                <span className="theme">
                    <span className='light theme-button  '></span>
                    <span className='medium theme-button  '></span>
                    <span className='dark theme-button  '></span>
                    <span className='gOne theme-button activeTheme '></span>
                    <span className='gTwo theme-button  '></span>
                </span>
            </div>
        </header>
    )
}