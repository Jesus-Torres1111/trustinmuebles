import React, { useState } from "react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ShieldCheck, 
  MapPin, 
  CheckCircle2, 
  Building, 
  Bed, 
  Bath, 
  Square, 
  ChevronRight, 
  FileText, 
  Share, 
  Heart,
  Car,
  Calendar,
  X,
  Lock
} from "lucide-react";

export default function PropertyDetail() {
  // Estados para hacer la UI interactiva
  const [isSaved, setIsSaved] = useState(false);
  const [showShareToast, setShowShareToast] = useState(false);
  const [show3DModal, setShow3DModal] = useState(false);

  const handleShare = () => {
    setShowShareToast(true);
    setTimeout(() => setShowShareToast(false), 3000);
  };

  return (
    <div className="flex-1 bg-gray-50/50 pb-24 relative">
      
      {/* Toast Notification (Simulación de Compartir) */}
      {showShareToast && (
        <div className="fixed top-24 right-8 z-50 bg-gray-900 text-white px-6 py-3 rounded-xl shadow-2xl animate-in slide-in-from-top-4 fade-in flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 text-success" />
          <span className="font-medium text-sm">Enlace copiado al portapapeles</span>
        </div>
      )}

      {/* Modal del Tour 3D */}
      {show3DModal && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 lg:p-8 animate-in fade-in">
          <div className="bg-gray-900 w-full max-w-6xl h-[80vh] rounded-3xl overflow-hidden flex flex-col relative border border-gray-800 shadow-2xl">
            <div className="p-4 flex justify-between items-center border-b border-gray-800 bg-black/50">
              <h3 className="text-white font-bold flex items-center gap-2">
                <Building className="w-5 h-5 text-primary" /> Tour Virtual 3D y Planos
              </h3>
              <button onClick={() => setShow3DModal(false)} className="text-gray-400 hover:text-white transition-colors bg-gray-800 p-2 rounded-full">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center bg-gray-900 relative">
              {/* Simulación del iframe de Matterport o similar */}
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-400 font-medium">Cargando modelo interactivo 3D...</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Immersive Gallery Header */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              {/* Sello de Garantía más profesional */}
              <div className="inline-flex items-center rounded-md bg-gray-900 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
                <ShieldCheck className="w-4 h-4 mr-1.5 text-success" /> Certificación Trustinmuebles
              </div>
              <span className="text-sm font-medium text-muted-foreground">ID: #TR-4092 • Publicado hace 2 días</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">Moderna Residencia en San Isidro</h1>
            <p className="text-muted-foreground flex items-center gap-1.5 mt-2 text-lg font-medium">
              <MapPin className="w-5 h-5 text-primary" /> Calle Los Pinos 404, San Isidro, Lima
            </p>
          </div>
          
          {/* Botones Interactivos */}
          <div className="flex gap-3 w-full md:w-auto">
            <Button onClick={handleShare} variant="outline" className="rounded-xl font-bold bg-white flex-1 md:flex-none">
              <Share className="w-4 h-4 mr-2" /> Compartir
            </Button>
            <Button 
              onClick={() => setIsSaved(!isSaved)} 
              variant="outline" 
              className={`rounded-xl font-bold transition-all flex-1 md:flex-none ${isSaved ? 'bg-red-50 border-red-200 text-red-600 hover:bg-red-100 hover:text-red-700' : 'bg-white'}`}
            >
              <Heart className={`w-4 h-4 mr-2 transition-colors ${isSaved ? 'fill-current text-red-600' : ''}`} /> 
              {isSaved ? 'Guardado' : 'Guardar'}
            </Button>
          </div>
        </div>

        {/* Galería (con onError preventivo) */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-3 h-[40vh] md:h-[50vh] min-h-[400px] rounded-3xl overflow-hidden mt-6">
          <div className="md:col-span-2 md:row-span-2 relative group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80" alt="Fachada principal" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onError={(e) => e.currentTarget.src = "https://placehold.co/1200x800/f1f5f9/94a3b8?text=Imagen+Principal"} />
          </div>
          <div className="hidden md:block col-span-1 row-span-1 relative group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=600&q=80" alt="Interior 1" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
          <div className="hidden md:block col-span-1 row-span-1 relative group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80" alt="Interior 2" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
          <div className="hidden md:block col-span-1 row-span-1 relative group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80" alt="Interior 3" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
          <div className="hidden md:block col-span-1 row-span-1 relative group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" alt="Interior 4" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center hover:bg-black/50 transition-colors backdrop-blur-sm">
              <span className="text-white font-bold text-lg border-2 border-white px-6 py-2 rounded-full">+12 Fotos</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Quick Stats Extendidos */}
            <div className="flex flex-wrap items-center gap-6 md:gap-10 py-6 border-y border-gray-200">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white border border-gray-100 shadow-sm rounded-xl"><Bed className="w-6 h-6 text-primary" /></div>
                <div><p className="text-xl font-bold text-foreground">4</p><p className="text-[11px] text-muted-foreground uppercase tracking-wider font-bold">Habitaciones</p></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white border border-gray-100 shadow-sm rounded-xl"><Bath className="w-6 h-6 text-primary" /></div>
                <div><p className="text-xl font-bold text-foreground">3.5</p><p className="text-[11px] text-muted-foreground uppercase tracking-wider font-bold">Baños</p></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white border border-gray-100 shadow-sm rounded-xl"><Square className="w-6 h-6 text-primary" /></div>
                <div><p className="text-xl font-bold text-foreground">280 m²</p><p className="text-[11px] text-muted-foreground uppercase tracking-wider font-bold">Área Techada</p></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white border border-gray-100 shadow-sm rounded-xl"><Car className="w-6 h-6 text-primary" /></div>
                <div><p className="text-xl font-bold text-foreground">2</p><p className="text-[11px] text-muted-foreground uppercase tracking-wider font-bold">Estacionamientos</p></div>
              </div>
            </div>

            {/* Nueva Sección: Información Real de la Propiedad */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Descripción del Inmueble</h2>
              <div className="prose prose-gray max-w-none text-muted-foreground">
                <p className="text-base leading-relaxed mb-4">
                  Espectacular residencia de diseño contemporáneo ubicada en una de las zonas más exclusivas y seguras de San Isidro. A tan solo dos cuadras del Lima Golf Club y rodeada de parques, esta propiedad ofrece el balance perfecto entre tranquilidad residencial y conectividad urbana.
                </p>
                <p className="text-base leading-relaxed mb-6">
                  El primer nivel cuenta con una amplia sala-comedor con techos de doble altura que se integra perfectamente al jardín y piscina a través de mamparas de vidrio templado. Cocina cerrada con isla central, tableros de cuarzo y equipamiento de alta gama. El segundo nivel alberga un family room y 4 dormitorios, cada uno con baño incorporado; el dormitorio principal incluye walk-in closet y terraza privada.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-6 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="font-medium text-foreground">Año de construcción: <span className="font-bold">2021</span></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-medium text-foreground">Acabados: <span className="font-bold">Premium (Mármol y Madera)</span></span>
                  </div>
                </div>
              </div>
            </section>

            {/* Legal Status */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
                <ShieldCheck className="w-7 h-7 text-primary" /> Auditoría Legal Oficial
              </h2>
              <Card className="rounded-3xl border-gray-200 shadow-sm overflow-hidden bg-white">
                <div className="bg-success/5 p-6 border-b border-success/10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-success flex items-center justify-center shadow-lg shadow-success/20">
                      <CheckCircle2 className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-success">Aprobación Legal al 100%</h3>
                      <p className="text-sm text-success/80 font-bold mt-0.5">Dictamen emitido por Capster Perú S.A.C.</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100">
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Título de Dominio</p>
                      <p className="font-bold text-foreground flex items-center gap-2 text-lg"><CheckCircle2 className="w-5 h-5 text-success" /> Saneado</p>
                    </div>
                    <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100">
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Gravámenes / Hipotecas</p>
                      <p className="font-bold text-foreground flex items-center gap-2 text-lg"><CheckCircle2 className="w-5 h-5 text-success" /> Libres</p>
                    </div>
                    <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100">
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Procesos Judiciales</p>
                      <p className="font-bold text-foreground flex items-center gap-2 text-lg"><CheckCircle2 className="w-5 h-5 text-success" /> Ninguno</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="outline" className="rounded-xl h-12 flex-1 font-bold border-gray-200"><FileText className="w-4 h-4 mr-2"/> Ver Partida Registral</Button>
                    <Button variant="outline" className="rounded-xl h-12 flex-1 font-bold text-primary border-primary/30 hover:bg-primary/5">Descargar Dictamen Legal Completo</Button>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Structural Status Realista y Digital */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
                <Building className="w-7 h-7 text-primary" /> Inspección Estructural
              </h2>
              <Card className="rounded-3xl border-gray-200 shadow-sm bg-white overflow-hidden">
                
                {/* Visor de Plano Digital (Estilo CAD/Scanner) */}
                <div className="aspect-[21/9] relative flex items-center justify-center bg-slate-900 border-b border-gray-200 overflow-hidden">
                  
                  {/* Imagen de plano arquitectónico con filtros para look digital */}
                  <img 
                    src="https://images.unsplash.com/photo-1626289830584-3cd71146740b?auto=format&fit=crop&w=1200&q=80" 
                    alt="Visor de Plano Estructural 2D" 
                    className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
                  />
                  
                  {/* Grid overlay para darle un toque más técnico */}
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
                  
                  {/* Pines interactivos */}
                  <div className="absolute top-[35%] left-[35%] flex flex-col items-center group cursor-pointer z-10">
                    <div className="w-4 h-4 rounded-full bg-success border-2 border-white shadow-[0_0_15px_rgba(34,197,94,1)] animate-pulse"></div>
                    <div className="absolute top-6 bg-white text-slate-900 text-xs font-bold px-3 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all transform scale-95 group-hover:scale-100 whitespace-nowrap">
                      Cimentación verificada (Sin fisuras)
                    </div>
                  </div>
                  
                  <div className="absolute bottom-[35%] right-[25%] flex flex-col items-center group cursor-pointer z-10">
                    <div className="w-4 h-4 rounded-full bg-success border-2 border-white shadow-[0_0_15px_rgba(34,197,94,1)] animate-pulse"></div>
                    <div className="absolute top-6 bg-white text-slate-900 text-xs font-bold px-3 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all transform scale-95 group-hover:scale-100 whitespace-nowrap">
                      Red sanitaria renovada (2022)
                    </div>
                  </div>
                </div>

                <CardContent className="p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div>
                    <h3 className="font-bold text-lg text-foreground">Reporte de Ingeniería Civil Aprobado</h3>
                    <p className="text-sm font-medium text-muted-foreground mt-1">Inspección física y escaneo realizado el 12 Octubre 2024</p>
                  </div>
                  <Button onClick={() => setShow3DModal(true)} className="rounded-xl h-12 px-6 w-full sm:w-auto shadow-md">
                    Ver Tour 3D Interactivo <ChevronRight className="w-4 h-4 ml-1"/>
                  </Button>
                </CardContent>
              </Card>
            </section>
          </div>

          {/* Sticky Sidebar CTA Mejorado */}
          <div className="relative">
            <div className="sticky top-24">
              <Card className="rounded-3xl border-gray-200 shadow-xl bg-white overflow-hidden">
                <CardContent className="p-8">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Precio Total de Venta</p>
                  <div className="text-4xl font-black text-foreground mb-8">$420,000 <span className="text-xl font-bold text-muted-foreground">USD</span></div>
                  
                  <div className="space-y-4 mb-8 bg-gray-50 p-5 rounded-2xl border border-gray-100">
                    <div className="flex items-center justify-between text-sm pb-3 border-b border-gray-200">
                      <span className="text-muted-foreground font-medium">Inicial sugerida (20%)</span>
                      <span className="font-bold text-foreground">$84,000</span>
                    </div>
                    <div className="flex items-center justify-between text-sm pt-1">
                      <span className="text-muted-foreground font-medium">Cuota estimada (20 años)</span>
                      <span className="font-bold text-primary">$2,850 / mes</span>
                    </div>
                  </div>

                  <Button size="lg" className="w-full h-14 text-base rounded-2xl shadow-lg shadow-primary/20 mb-4 transition-transform hover:-translate-y-0.5" asChild>
                    <Link to="/transaction">Separar Propiedad Ahora</Link>
                  </Button>
                  <Button variant="outline" size="lg" className="w-full h-14 text-base rounded-2xl border-2 font-bold hover:bg-gray-50">
                    Agendar Visita Física
                  </Button>
                  
                  {/* Texto de Fideicomiso Profesionalizado */}
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <div className="flex items-start gap-3">
                      <div className="bg-green-50 p-2 rounded-lg shrink-0">
                        <Lock className="w-5 h-5 text-success" />
                      </div>
                      <p className="text-xs font-medium text-muted-foreground leading-relaxed">
                        <span className="font-bold text-foreground block mb-0.5">Operación 100% Segura</span>
                        Gestión notarial y resguardo de fondos mediante Fideicomiso Bancario Regulado.
                      </p>
                    </div>
                  </div>

                </CardContent>
              </Card>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}