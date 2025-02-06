import Logo from "../assets/png-transparent-swiggy-hd-logo-thumbnail-removebg-preview.png"

const Header = () =>
    (
        <div className="flex justify-between items-center px-8 py-4 shadow-lg">
            <a className="flex items-center gap-2 cursor-pointer" href="#">
                <img src={Logo} className="w-8"/>
                <span className="text-2xl font-bold">SwIgGy (LTS)</span>
            </a>
            <div className="flex gap-6">
                <a className="cursor-pointer" href="#">🏠Home</a>
                <a className="cursor-pointer" href="#">About Us</a>
                <a className="cursor-pointer" href="#">📞Contact Us</a>
                <a className="cursor-pointer" href="#">🛒Cart</a>
            </div>
        </div>
    )


export default Header