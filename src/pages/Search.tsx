import React, { useState, useMemo } from "react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Bed, Bath, Square, ShieldCheck, AlertTriangle, ChevronDown, Search as SearchIcon, X, Home } from "lucide-react";

// Data simulada
const MOCK_PROPERTIES = [
  { id: 1, title: "Casa moderna en esquina", location: "San Isidro, Lima", price: 420000, beds: 4, baths: 3, area: 280, legal: "success", struct: "success", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80" },
  { id: 2, title: "Dúplex con terraza", location: "Miraflores, Lima", price: 350000, beds: 3, baths: 2, area: 180, legal: "success", struct: "warning", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" },
  { id: 3, title: "Casa familiar con jardín", location: "Surco, Lima", price: 510000, beds: 5, baths: 4, area: 350, legal: "success", struct: "success", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" },
  { id: 4, title: "Departamento Flat", location: "San Borja, Lima", price: 280000, beds: 2, baths: 2, area: 120, legal: "warning", struct: "success", img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80" },
  { id: 5, title: "Penthouse con vista al mar", location: "Barranco, Lima", price: 650000, beds: 3, baths: 4, area: 220, legal: "success", struct: "success", img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80" },
  { id: 6, title: "Loft Industrial", location: "Magdalena, Lima", price: 195000, beds: 1, baths: 1, area: 90, legal: "success", struct: "success", img: "https://images.unsplash.com/photo-1600585154526-990dced4ea0d?auto=format&fit=crop&w=800&q=80" },
];

export default function Search() {
  // Estados de filtros
  const [priceMin, setPriceMin] = useState<string>("");
  const [priceMax, setPriceMax] = useState<string>("");
  const [rooms, setRooms] = useState<string>("Cualquiera");
  const [onlyGreen, setOnlyGreen] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState("Recomendados");
  
  // Estado UI
  const [isSortOpen, setIsSortOpen] = useState(false);

  // UX: Calcular precios mínimos y máximos dinámicamente para los placeholders
  const minAvailablePrice = Math.min(...MOCK_PROPERTIES.map(p => p.price));
  const maxAvailablePrice = Math.max(...MOCK_PROPERTIES.map(p => p.price));

  const handleClearFilters = () => {
    setPriceMin("");
    setPriceMax("");
    setRooms("Cualquiera");
    setOnlyGreen(false);
    setSortBy("Recomendados");
  };

  // Filtrado instantáneo
  const filteredProperties = useMemo(() => {
    let result = [...MOCK_PROPERTIES];

    if (priceMin) result = result.filter(p => p.price >= parseInt(priceMin));
    if (priceMax) result = result.filter(p => p.price <= parseInt(priceMax));
    
    if (rooms !== "Cualquiera") {
      if (rooms === "4+") result = result.filter(p => p.beds >= 4);
      else result = result.filter(p => p.beds === parseInt(rooms));
    }
    
    if (onlyGreen) {
      result = result.filter(p => p.legal === "success" && p.struct === "success");
    }

    if (sortBy === "Menor Precio") result.sort((a, b) => a.price - b.price);
    else if (sortBy === "Mayor Precio") result.sort((a, b) => b.price - a.price);

    return result;
  }, [priceMin, priceMax, rooms, onlyGreen, sortBy]);

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col">
      
      {/* Header Info */}
      <div className="bg-white border-b border-gray-100 pt-8 pb-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-2">Propiedades Auditadas</h1>
          <p className="text-muted-foreground font-medium text-lg">Encuentra tu próximo hogar con 100% de certeza legal y estructural.</p>
        </div>
      </div>

      {/* Modern Horizontal Filter Bar (Sticky) */}
      <div className="sticky top-16 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
          
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            
            {/* Price Pill Inteligente */}
            <div className="flex items-center bg-white border border-gray-200 rounded-full px-4 h-12 shadow-sm focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20 transition-all">
              <span className="text-muted-foreground font-bold mr-2">USD</span>
              <input 
                type="number" 
                value={priceMin}
                onChange={(e) => setPriceMin(e.target.value)}
                placeholder={`${minAvailablePrice.toLocaleString()}`} 
                className="w-24 bg-transparent outline-none text-sm font-bold text-foreground placeholder:font-medium placeholder:text-gray-400" 
              />
              <div className="w-px h-5 bg-gray-200 mx-2"></div>
              <input 
                type="number" 
                value={priceMax}
                onChange={(e) => setPriceMax(e.target.value)}
                placeholder={`${maxAvailablePrice.toLocaleString()}`} 
                className="w-24 bg-transparent outline-none text-sm font-bold text-foreground placeholder:font-medium placeholder:text-gray-400" 
              />
            </div>

            {/* Rooms Pill */}
            <div className="hidden md:flex items-center bg-white border border-gray-200 rounded-full p-1 h-12 shadow-sm">
              {["Cualquiera", "1", "2", "3", "4+"].map(num => (
                <button 
                  key={num} 
                  onClick={() => setRooms(num)}
                  className={`px-4 h-full rounded-full text-sm font-bold transition-colors ${
                    rooms === num 
                      ? 'bg-primary text-white shadow-sm' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-gray-50'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>

            {/* Security Toggle Pill */}
            <button 
              onClick={() => setOnlyGreen(!onlyGreen)}
              className={`flex items-center gap-2 px-5 h-12 rounded-full border transition-all shadow-sm ${
                onlyGreen 
                  ? 'bg-success/10 border-success/30 text-success' 
                  : 'bg-white border-gray-200 text-muted-foreground hover:bg-gray-50'
              }`}
            >
              <ShieldCheck className={`w-5 h-5 ${onlyGreen ? 'text-success' : 'text-muted-foreground'}`} />
              <span className="text-sm font-bold">{onlyGreen ? '100% Verdes Activo' : 'Solo 100% Verdes'}</span>
            </button>

            {/* Clear Filters */}
            {(priceMin || priceMax || rooms !== "Cualquiera" || onlyGreen) && (
              <button 
                onClick={handleClearFilters}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-muted-foreground hover:bg-gray-200 hover:text-foreground transition-colors"
                title="Limpiar filtros"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Custom Sort Dropdown */}
          <div className="relative w-full lg:w-auto flex justify-end">
            <button 
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="flex items-center justify-between w-full lg:w-56 h-12 px-5 rounded-full border border-gray-200 bg-white text-sm font-bold text-foreground shadow-sm hover:border-primary/50 transition-colors focus:outline-none"
            >
              <span><span className="text-muted-foreground font-medium mr-1">Orden:</span> {sortBy}</span>
              <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${isSortOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isSortOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setIsSortOpen(false)}></div>
                <div className="absolute right-0 top-14 w-full lg:w-56 bg-white rounded-2xl border border-gray-100 shadow-xl z-20 py-2 overflow-hidden animate-in fade-in slide-in-from-top-2">
                  {["Recomendados", "Menor Precio", "Mayor Precio"].map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setSortBy(option);
                        setIsSortOpen(false);
                      }}
                      className={`w-full text-left px-5 py-3 text-sm font-bold transition-colors ${
                        sortBy === option ? 'bg-primary/5 text-primary' : 'text-foreground hover:bg-gray-50'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

        </div>
      </div>

      {/* Main Grid Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        
        <div className="mb-6 flex items-center justify-between">
          <p className="text-muted-foreground font-semibold">Mostrando {filteredProperties.length} resultados</p>
        </div>

        {filteredProperties.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-3xl border border-gray-100 shadow-sm mt-8">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <SearchIcon className="w-10 h-10 text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">No se encontraron propiedades</h3>
            <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">Intenta eliminar algunos filtros o ampliar tu rango de búsqueda para ver más resultados.</p>
            <Button size="lg" onClick={handleClearFilters} className="rounded-xl shadow-md">Limpiar todos los filtros</Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
            {filteredProperties.map(prop => (
              <Card 
                key={prop.id} 
                className="overflow-hidden border-border/40 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 flex flex-col bg-white rounded-3xl group"
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
                  {/* UX FIX: Prevención de imagen rota */}
                  <img 
                    src={prop.img} 
                    alt={prop.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "https://placehold.co/800x600/f1f5f9/94a3b8?text=Propiedad+sin+foto";
                    }}
                  />
                  
                  {/* Badges Ultra Legibles */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2.5 z-10">
                    {prop.legal === 'success' ? (
                      <div className="inline-flex items-center rounded-full bg-white/95 backdrop-blur-md px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-foreground shadow-lg">
                        <ShieldCheck className="w-4 h-4 mr-1.5 text-success" /> Legal OK
                      </div>
                    ) : (
                      <div className="inline-flex items-center rounded-full bg-white/95 backdrop-blur-md px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-foreground shadow-lg">
                        <AlertTriangle className="w-4 h-4 mr-1.5 text-warning" /> Legal Ámbar
                      </div>
                    )}
                  </div>

                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl font-black text-xl text-foreground shadow-lg z-10">
                    ${prop.price.toLocaleString()}
                  </div>
                </div>
                
                <CardContent className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-foreground line-clamp-1">{prop.title}</h3>
                    <p className="text-sm text-muted-foreground font-medium flex items-center gap-1.5 mb-6">
                      <MapPin className="w-4 h-4 text-primary" /> {prop.location}
                    </p>
                    
                    <div className="flex items-center gap-5 text-sm text-foreground font-semibold mb-6">
                      <div className="flex items-center gap-2"><Bed className="w-4 h-4 text-muted-foreground" /> {prop.beds} habs</div>
                      <div className="flex items-center gap-2"><Bath className="w-4 h-4 text-muted-foreground" /> {prop.baths} baños</div>
                      <div className="flex items-center gap-2"><Square className="w-4 h-4 text-muted-foreground" /> {prop.area} m²</div>
                    </div>
                  </div>
                  
                  <div className="pt-5 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm font-bold">
                      <span className="text-muted-foreground">Estructura:</span>
                      <span className={prop.struct === 'success' ? 'text-success' : 'text-warning'}>
                        {prop.struct === 'success' ? 'Aprobada' : 'Observaciones'}
                      </span>
                    </div>
                    <Button variant="outline" className="rounded-xl border-2 hover:bg-primary hover:border-primary hover:text-white transition-all font-bold" asChild>
                      <Link to={`/property/${prop.id}`}>Ver Detalle</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}