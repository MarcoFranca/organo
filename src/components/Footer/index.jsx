import './Footer.css'

export default function Footer () {
    return (
        <div className='footer'>
            <div className='footer__media'>
                {/*<a href="https://www.facebook.com/" target="_blank"><img src="./image/fb.png" alt="face"/></a>*/}
                {/*<a href="#" target="_blank"><img src="./image/tw.png" alt="tweeter"/></a>*/}
                {<a href="https://twitter.com/MarcotullioDev" target="_blank" rel="noreferrer">
                    <img src="./image/ig.png" alt="instagram"/>
                </a>}
            </div>
            <div>
                <img src="./image/logo.png" alt="organo"/>
            </div>
            <div>
                <p>Desenvolvido por Alura & Marco Tullio</p>
            </div>
        </div>
    )
}