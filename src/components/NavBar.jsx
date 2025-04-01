import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                <div className="flex items-center gap-2">
                    <Link to="/" className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-orange-500 flex items-center justify-center">
                            <span className="font-bold text-white">R</span>
                        </div>
                        <span className="text-xl font-bold text-orange-600">Ryori</span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    <Link to="/" className="text-sm font-medium hover:text-orange-600 transition-colors">
                        Home
                    </Link>
                    <Link to="/recipe" className="text-sm font-medium hover:text-orange-600 transition-colors">
                        Search Recipes
                    </Link>
                    <Link to="/about" className="text-sm font-medium hover:text-orange-600 transition-colors">
                        About
                    </Link>
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <div className="relative">
                        <Search className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
                        <Input type="search" placeholder="Search recipes..." className="bg-muted pl-8" />
                    </div>
                    <Button variant="outline">Login</Button>
                    <Button variant="solid">Sign Up</Button>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t p-4 bg-white">
                    <nav className="flex flex-col space-y-4">
                        <Link to="/" className="text-sm font-medium hover:text-orange-600 transition-colors">
                            Home
                        </Link>
                        <Link to="/recipe" className="text-sm font-medium hover:text-orange-600 transition-colors">
                            Search Recipes
                        </Link>
                        <Link to="/about" className="text-sm font-medium hover:text-orange-600 transition-colors">
                            About
                        </Link>
                        <div className="relative mt-2">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input type="search" placeholder="Search recipes..." className="w-full bg-muted pl-8" />
                        </div>
                        <div className="flex gap-2 pt-2">
                            <Button variant="outline" className="flex-1">
                                Login
                            </Button>
                            <Button variant="solid" className="flex-1">
                                Sign Up
                            </Button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}