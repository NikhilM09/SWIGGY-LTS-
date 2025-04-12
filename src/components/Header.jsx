import Logo from "../assets/png-transparent-swiggy-hd-logo-thumbnail-removebg-preview.png"
import { Link } from "react-router"
import useOnline from "../utils/useOnline"

const Header = () =>{
 const isOnline = useOnline()
  return  (
        <div className="flex justify-between items-center px-8 py-4 shadow-lg">
            <Link className="flex items-center gap-2 cursor-pointer" to="/">
                <img src={Logo} className="w-8"/>
                <span className="text-2xl font-bold">SwIgGy (LTS)</span>
                <span>{isOnline ? '🟢' : '🔴'}</span>
            </Link>
            <div className="flex gap-6">
                <Link className="cursor-pointer" to="/">🏠Home</Link>
                <Link className="cursor-pointer" to="/about">About Us</Link>
                <Link className="cursor-pointer" to="/contact">📞Contact Us</Link>
                <Link className="cursor-pointer" to="/cart">🛒Cart</Link>
            </div>
        </div>
    )}


export default Header