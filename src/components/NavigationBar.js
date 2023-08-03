import Logo from '..//assets/images/headphone-2.jpg'

export const NavigationBar = ({theme,setTheme})=>{
    
    return(
        <header>
            <div className="nav-header">
                <span className="logo">
                    <img src={Logo} alt="" className='logo-img'/>
                    <span className='logo-text'>Todo</span>
                </span>
                <span className="theme">
                    <span className={`theme-button ${theme === "light" ? "activeTheme":""}`} onClick={()=>setTheme("light")}></span>
                    <span className={`medium theme-button ${ theme === "medium" ? " activeTheme":""}`} onClick={()=>setTheme("medium")}></span>
                    <span className={`dark theme-button ${ theme === "dark" ? " activeTheme":""}`} onClick={()=>setTheme("dark")}></span>
                    <span className={`gOne theme-button ${ theme === "gradientOne" ? " activeTheme":""}`} onClick={()=>setTheme("gradientOne")}></span>
                    <span className={`gTwo theme-button ${ theme === "gradientTwo" ? " activeTheme":""}`} onClick={()=>setTheme("gradientTwo")}></span>
                    <span className={`gThree theme-button ${ theme === "gradientThree" ? " activeTheme":""}`} onClick={()=>setTheme("gradientThree")}></span>

                </span>
            </div>
        </header>
    )
}