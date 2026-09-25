import { Link, useLocation } from "react-router";
import { Shield, User, Menu, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const location = useLocation();
  const isPostSale = location.pathname.startsWith("/post-sale");
  const isTransaction = location.pathname.startsWith("/transaction");
  
  // Simulación de estado de usuario autenticado
  const isAuthenticated = isPostSale || isTransaction;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/70 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-6 md:gap-10">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="bg-primary/10 p-1.5 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                Trustinmuebles
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              <Link 
                to="/" 
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${location.pathname === '/' ? 'bg-gray-100 text-foreground' : 'text-muted-foreground hover:bg-gray-50 hover:text-foreground'}`}
              >
                Inicio
              </Link>
              <Link 
                to="/search" 
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${location.pathname === '/search' ? 'bg-gray-100 text-foreground' : 'text-muted-foreground hover:bg-gray-50 hover:text-foreground'}`}
              >
                Buscar Propiedades
              </Link>
              <Link 
                to="#" 
                className="px-4 py-2 rounded-full text-sm font-semibold text-muted-foreground transition-all hover:bg-gray-50 hover:text-foreground"
              >
                Cómo Funciona
              </Link>
            </nav>
          </div>
          
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            {!isAuthenticated ? (
              <>
                <Button variant="ghost" className="font-bold text-muted-foreground hover:text-foreground h-9 px-4">
                  Ingresar
                </Button>
                <Button className="rounded-full h-9 px-5 shadow-sm font-bold">
                  <Plus className="w-4 h-4 mr-1.5" /> Publicar Propiedad
                </Button>
              </>
            ) : (
              <div className="flex items-center gap-3">
                <Button variant="outline" className="h-9 px-4 border-gray-200 text-sm font-bold rounded-full">
                  Mis Trámites
                </Button>
                <Link to="/post-sale">
                  <div className="flex items-center gap-2.5 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors">
                    <div className="bg-primary text-white rounded-full p-1">
                      <User className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm font-bold text-foreground">Juan Pérez</span>
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Menu className="h-5 w-5 text-foreground" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}