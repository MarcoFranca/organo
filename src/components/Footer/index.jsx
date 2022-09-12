import './Footer.css'

export default function Footer () {
    return (
        <div className='footer'>
            <div className='footer__media'>
                <a href="#"><img src="./image/footer/fb.png" alt="face"/></a>
                <a href="#"><img src="./image/footer/tw.png" alt="tweeter"/></a>
                <a href="#"><img src="./image/footer/ig.png" alt="instagram"/></a>
            </div>
            <div>
                <img src="./image/footer/logo.png" alt="organo"/>
            </div>
            <div>
                <p>Desenvolvido por Alura & Marco Tullio</p>
            </div>
        </div>
    )
}