import "./style.css";


const Header = () => {
    return (
    
    <header className="header">
    <div className="header__wrapper">
        <h1 className="header__title">
            <strong>Hi there, my name is <em>Oleksandr</em></strong><br />
            a frontend developer

        </h1>
        <div className="header__text">
            <p>
                Ultron and SkyNET chose HTML and CSS</p>
        </div>
        <a href="#!" className="btn">Download CV</a>
    </div>
</header>
);
}
 
export default Header;
 