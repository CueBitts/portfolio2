import './Header.css'

function Header() {
    return (
        <div className='header'>
            <div className='headerContainer'>  
                <div className='headerColumn' id='1'></div>
                <div className='headerColumn' id='2'>
                    header
                </div>
                <div className='headerColumn' id='3'></div>
            </div>
        </div>
    )
}

export default Header;