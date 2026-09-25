import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  LayoutDashboard, User, Home, FileText, Settings, CheckCircle2, 
  Download, PenTool, ChevronRight, Lock, X, Fingerprint, Loader2, 
  ArrowLeft, LifeBuoy, Mail, Phone, Shield, Bell, MessageSquare, Send
} from "lucide-react";

export default function Transaction() {
  const navigate = useNavigate();
  
  // Estados del trámite
  const [isSigned, setIsSigned] = useState(false);
  const [isSigning, setIsSigning] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Estados de Paneles Modales (La magia de la funcionalidad)
  const [activeModal, setActiveModal] = useState<"sign" | "profile" | "legal" | "settings" | null>(null);
  
  // Estados para simular interacciones dentro de los ajustes
  const [emailNotif, setEmailNotif] = useState(true);
  const [smsNotif, setSmsNotif] = useState(true);

  // Funciones de interacción
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleSignDocument = () => {
    setIsSigning(true);
    setTimeout(() => {
      setIsSigning(false);
      setIsSigned(true);
      setActiveModal(null);
      showToast("Documento firmado biométricamente. Blockchain actualizado.");
    }, 2500);
  };

  const handleDownload = (docName: string) => {
    showToast(`Descargando documento encriptado: ${docName}`);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveModal(null);
    showToast("Mensaje enviado a tu asesora legal. Te responderá a la brevedad.");
  };

  return (
    <div className="flex-1 flex bg-gray-50/50 min-h-[calc(100vh-4rem)] relative">
      
      {/* Toast Notifications */}
      {toastMessage && (
        <div className="fixed top-24 right-8 z-[200] bg-gray-900 text-white px-6 py-4 rounded-2xl shadow-2xl animate-in slide-in-from-top-4 fade-in flex items-center gap-3 border border-gray-700">
          <CheckCircle2 className="w-5 h-5 text-success" />
          <span className="font-bold text-sm">{toastMessage}</span>
        </div>
      )}

      {/* MODAL 1: Firma Digital */}
      {activeModal === "sign" && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white w-full max-w-md rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 animate-in zoom-in-95">
            <div className="p-5 flex justify-between items-center border-b border-gray-100 bg-gray-50/50">
              <h3 className="font-bold text-lg text-foreground flex items-center gap-2">
                <Lock className="w-4 h-4 text-primary" /> Firma Digital Segura
              </h3>
              <button onClick={() => setActiveModal(null)} className="text-gray-400 hover:text-foreground transition-colors bg-white border border-gray-200 p-2 rounded-full shadow-sm hover:bg-gray-50">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-8 flex flex-col items-center text-center bg-white">
              <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 transition-all duration-500 shadow-inner border-4 ${isSigning ? 'bg-primary/10 border-primary/20 text-primary' : 'bg-gray-50 border-gray-100 text-muted-foreground'}`}>
                {isSigning ? <Loader2 className="w-10 h-10 animate-spin" /> : <Fingerprint className="w-12 h-12" />}
              </div>
              <h4 className="font-black text-2xl mb-2 text-foreground">Minuta de Compraventa</h4>
              <p className="text-sm text-muted-foreground mb-8 font-medium px-4">Al confirmar, firmas legalmente este documento usando tu certificado digital encriptado.</p>
              <Button onClick={handleSignDocument} disabled={isSigning} size="lg" className="w-full h-14 rounded-2xl text-base font-bold shadow-lg shadow-primary/20">
                {isSigning ? 'Procesando firma encriptada...' : 'Confirmar e Ingresar Huella'}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: Mi Perfil */}
      {activeModal === "profile" && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white w-full max-w-lg rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 animate-in slide-in-from-bottom-10">
            <div className="p-5 flex justify-between items-center border-b border-gray-100 bg-gray-50/50">
              <h3 className="font-bold text-lg text-foreground flex items-center gap-2">
                <User className="w-5 h-5 text-primary" /> Mi Perfil
              </h3>
              <button onClick={() => setActiveModal(null)} className="text-gray-400 hover:text-foreground transition-colors bg-white border border-gray-200 p-2 rounded-full shadow-sm">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-8 bg-white">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 bg-primary text-white rounded-2xl flex items-center justify-center text-3xl font-black shadow-lg shadow-primary/20">JP</div>
                <div>
                  <h2 className="text-2xl font-black text-foreground">Juan Pérez</h2>
                  <div className="inline-flex items-center mt-2 px-3 py-1 rounded-full bg-success/10 text-success text-[11px] font-bold uppercase tracking-wider">
                    <Shield className="w-3.5 h-3.5 mr-1.5" /> Identidad Verificada (KYC)
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-xl border border-gray-100 bg-gray-50 flex items-center gap-4">
                  <Mail className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase">Correo Electrónico</p>
                    <p className="font-semibold text-foreground">juan.perez@email.com</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl border border-gray-100 bg-gray-50 flex items-center gap-4">
                  <Phone className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase">Teléfono Móvil</p>
                    <p className="font-semibold text-foreground">+51 987 654 321</p>
                  </div>
                </div>
              </div>
              <Button onClick={() => showToast("Solicitud de actualización enviada.")} className="w-full mt-8 h-12 rounded-xl font-bold">
                Actualizar Datos
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 3: Ayuda Legal */}
      {activeModal === "legal" && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white w-full max-w-lg rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 animate-in slide-in-from-bottom-10">
            <div className="p-5 flex justify-between items-center border-b border-gray-100 bg-gray-50/50">
              <h3 className="font-bold text-lg text-foreground flex items-center gap-2">
                <LifeBuoy className="w-5 h-5 text-primary" /> Soporte Legal Directo
              </h3>
              <button onClick={() => setActiveModal(null)} className="text-gray-400 hover:text-foreground transition-colors bg-white border border-gray-200 p-2 rounded-full shadow-sm">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-8 bg-white">
              <div className="flex items-center gap-4 mb-8 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <div className="w-14 h-14 bg-gray-200 rounded-full overflow-hidden shadow-sm border-2 border-white shrink-0">
                  <img src="https://i.pravatar.cc/150?img=47" alt="María Fernandez" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-black text-foreground">María Fernandez</p>
                  <p className="text-xs font-bold text-primary">Abogada Notarial Asignada</p>
                  <p className="text-xs text-muted-foreground mt-1">Tiempo de respuesta est: 15 min</p>
                </div>
              </div>
              <form onSubmit={handleSendMessage} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Tu mensaje o consulta legal</label>
                  <textarea 
                    required
                    placeholder="Escribe aquí tu duda sobre la minuta o el trámite..."
                    className="w-full h-32 p-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none text-sm font-medium"
                  ></textarea>
                </div>
                <Button type="submit" className="w-full h-12 rounded-xl font-bold shadow-md">
                  <Send className="w-4 h-4 mr-2" /> Enviar Consulta Segura
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 4: Ajustes */}
      {activeModal === "settings" && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white w-full max-w-md rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 animate-in slide-in-from-bottom-10">
            <div className="p-5 flex justify-between items-center border-b border-gray-100 bg-gray-50/50">
              <h3 className="font-bold text-lg text-foreground flex items-center gap-2">
                <Settings className="w-5 h-5 text-primary" /> Ajustes de Cuenta
              </h3>
              <button onClick={() => setActiveModal(null)} className="text-gray-400 hover:text-foreground transition-colors bg-white border border-gray-200 p-2 rounded-full shadow-sm">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-8 bg-white space-y-6">
              <div>
                <h4 className="font-bold text-sm text-foreground uppercase tracking-wider mb-4 flex items-center gap-2"><Bell className="w-4 h-4 text-muted-foreground"/> Preferencias de Notificación</h4>
                <div className="space-y-4">
                  <label className="flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-gray-50 cursor-pointer hover:border-primary/30 transition-colors">
                    <div className="flex flex-col">
                      <span className="font-bold text-sm text-foreground">Avisos por Correo</span>
                      <span className="text-xs font-medium text-muted-foreground">Avances del trámite al email</span>
                    </div>
                    <div onClick={() => setEmailNotif(!emailNotif)} className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ease-in-out ${emailNotif ? 'bg-success' : 'bg-gray-300'}`}>
                      <div className={`w-4 h-4 rounded-full bg-white transition-transform duration-300 ${emailNotif ? 'translate-x-6' : 'translate-x-0'}`}></div>
                    </div>
                  </label>
                  <label className="flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-gray-50 cursor-pointer hover:border-primary/30 transition-colors">
                    <div className="flex flex-col">
                      <span className="font-bold text-sm text-foreground">Alertas SMS</span>
                      <span className="text-xs font-medium text-muted-foreground">Solo firmas urgentes</span>
                    </div>
                    <div onClick={() => setSmsNotif(!smsNotif)} className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ease-in-out ${smsNotif ? 'bg-success' : 'bg-gray-300'}`}>
                      <div className={`w-4 h-4 rounded-full bg-white transition-transform duration-300 ${smsNotif ? 'translate-x-6' : 'translate-x-0'}`}></div>
                    </div>
                  </label>
                </div>
              </div>
              <Button onClick={() => setActiveModal(null)} variant="outline" className="w-full h-12 rounded-xl font-bold">
                Cerrar Sesión
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Sidebar Moderno */}
      <aside className="w-72 border-r border-gray-200 bg-white hidden md:flex flex-col shadow-[4px_0_24px_rgba(0,0,0,0.02)] z-10 relative">
        <div className="p-6 border-b border-gray-100 bg-gray-50/50">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center text-lg font-black shadow-md shadow-primary/20">JP</div>
            <div className="flex flex-col">
              <span className="text-sm font-black text-foreground">Juan Pérez</span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Propietario Verificado</span>
            </div>
          </div>
        </div>

        <div className="flex-1 py-8 px-4 overflow-y-auto space-y-8">
          <div>
            <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3 px-4">Menú Personal</h3>
            <nav className="space-y-2">
              <button onClick={() => setActiveModal("profile")} className="w-full flex items-center gap-3 px-4 py-3.5 text-sm font-bold rounded-2xl text-muted-foreground hover:bg-gray-50 hover:text-foreground transition-all">
                <User className="w-5 h-5" /> Mi Perfil
              </button>
              
              <Link to="/transaction" className="w-full flex items-center gap-3 px-4 py-3.5 text-sm font-bold rounded-2xl bg-success/10 text-success transition-all shadow-sm border border-success/20">
                <LayoutDashboard className="w-5 h-5" /> Trámites Activos
              </Link>
              
              <Link to="/post-sale" className="w-full flex items-center gap-3 px-4 py-3.5 text-sm font-bold rounded-2xl text-muted-foreground hover:bg-gray-50 hover:text-foreground transition-all">
                <Home className="w-5 h-5" /> Mi Patrimonio
              </Link>
            </nav>
          </div>
          
          <div>
            <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3 px-4">Soporte Integral</h3>
            <nav className="space-y-2">
              <button onClick={() => setActiveModal("legal")} className="w-full flex items-center gap-3 px-4 py-3.5 text-sm font-bold rounded-2xl text-muted-foreground hover:bg-gray-50 hover:text-foreground transition-all">
                <LifeBuoy className="w-5 h-5" /> Ayuda Legal
              </button>
              <button onClick={() => setActiveModal("settings")} className="w-full flex items-center gap-3 px-4 py-3.5 text-sm font-bold rounded-2xl text-muted-foreground hover:bg-gray-50 hover:text-foreground transition-all">
                <Settings className="w-5 h-5" /> Ajustes
              </button>
            </nav>
          </div>
        </div>
      </aside>

      {/* Main Content Dashboard */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          
          {/* Breadcrumb Funcional (Botón de Retroceso Real) */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <button onClick={() => navigate(-1)} className="flex items-center gap-1.5 hover:text-primary transition-colors font-bold bg-white px-3 py-1.5 rounded-lg border border-gray-200 shadow-sm">
              <ArrowLeft className="w-4 h-4" /> Trámites
            </button> 
            <ChevronRight className="w-4 h-4"/> 
            <span className="font-bold text-foreground">Compra de Inmueble</span>
          </div>

          {/* Header Dashboard */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6 bg-white p-8 rounded-[2rem] border border-gray-200 shadow-sm relative overflow-hidden">
            <div className="absolute right-0 top-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
            <div className="z-10">
              <h1 className="text-3xl md:text-4xl font-black text-foreground mb-3 tracking-tight">Casa en San Isidro</h1>
              <div className="flex items-center gap-3">
                <p className="text-base text-muted-foreground font-semibold">Proceso de compra en curso</p>
                {!isSigned ? (
                  <Badge variant="warning" className="bg-warning/10 text-warning border-warning/20 px-3 py-1 uppercase tracking-widest text-[10px] shadow-sm">Requiere Acción</Badge>
                ) : (
                  <Badge variant="success" className="bg-success/10 text-success border-success/20 px-3 py-1 uppercase tracking-widest text-[10px] shadow-sm">En Revisión Notarial</Badge>
                )}
              </div>
            </div>
            <div className="md:text-right border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0 md:pl-8 z-10 bg-white/50 backdrop-blur-sm rounded-xl">
              <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider mb-3">Ejecutivo Legal Asignado</p>
              <div className="flex items-center gap-4 md:justify-end bg-gray-50 p-3 rounded-2xl border border-gray-100 cursor-pointer hover:border-primary/30 transition-colors" onClick={() => setActiveModal("legal")}>
                <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden shadow-sm border-2 border-white">
                  <img src="https://i.pravatar.cc/150?img=47" alt="María Fernandez" className="w-full h-full object-cover" />
                </div>
                <div className="text-left md:text-right">
                  <p className="font-bold text-sm text-foreground">María Fernandez</p>
                  <p className="text-xs text-primary font-semibold">Contactar Abogada</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            
            {/* Timeline Process */}
            <div className="lg:col-span-7">
              <Card className="rounded-[2rem] border-gray-200 shadow-sm bg-white overflow-hidden h-full">
                <div className="p-8 md:p-10">
                  <h2 className="text-2xl font-black mb-10 text-foreground">Ruta de Transacción</h2>
                  
                  {/* Línea vertical conectora */}
                  <div className="relative space-y-12 before:absolute before:inset-0 before:ml-[1.4rem] before:-mt-2 before:h-full before:w-[2px] before:bg-gray-100 z-0">
                    
                    {/* Step 1: Done */}
                    <div className="relative flex items-start gap-6 z-10">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-success text-white shrink-0 shadow-lg shadow-success/20 ring-4 ring-white">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <div className="pt-2">
                        <h3 className="font-bold text-xl text-foreground">Oferta Aceptada</h3>
                        <p className="text-sm text-muted-foreground mt-1 font-medium leading-relaxed">Acuerdo de precio y condiciones firmado por ambas partes.</p>
                        <p className="text-[11px] font-black uppercase tracking-wider text-success mt-3">Completado • 12 Oct 2024</p>
                      </div>
                    </div>

                    {/* Step 2: Done */}
                    <div className="relative flex items-start gap-6 z-10">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-success text-white shrink-0 shadow-lg shadow-success/20 ring-4 ring-white">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <div className="pt-2">
                        <h3 className="font-bold text-xl text-foreground">Auditoría Aprobada</h3>
                        <p className="text-sm text-muted-foreground mt-1 font-medium leading-relaxed">Verificación legal y estructural completada sin observaciones de riesgo.</p>
                        <p className="text-[11px] font-black uppercase tracking-wider text-success mt-3">Completado • 15 Oct 2024</p>
                      </div>
                    </div>

                    {/* Step 3: Dinámico (Botón de Firma) */}
                    <div className="relative flex items-start gap-6 z-10">
                      <div className={`flex items-center justify-center w-12 h-12 rounded-full shrink-0 shadow-lg ring-4 ring-white transition-all duration-500 ${isSigned ? 'bg-success text-white shadow-success/20' : 'bg-warning text-white shadow-warning/30'}`}>
                        {isSigned ? <CheckCircle2 className="w-6 h-6" /> : <PenTool className="w-6 h-6" />}
                      </div>
                      <div className="w-full">
                        {!isSigned ? (
                          <div className="p-6 rounded-2xl border-2 border-warning/30 bg-warning/5 shadow-sm animate-in fade-in">
                            <h3 className="font-bold text-xl text-foreground mb-2">Firma de Minuta</h3>
                            <p className="text-sm text-muted-foreground mb-5 font-medium leading-relaxed">El documento legal validado está listo para tu firma digital biométrica.</p>
                            <Button onClick={() => setActiveModal("sign")} className="rounded-xl bg-warning hover:bg-warning/90 text-white shadow-lg shadow-warning/20 font-bold h-12 px-6">
                              Firmar Documento Ahora
                            </Button>
                          </div>
                        ) : (
                          <div className="pt-2 animate-in fade-in slide-in-from-left-2">
                            <h3 className="font-bold text-xl text-foreground">Firma de Minuta</h3>
                            <p className="text-sm text-muted-foreground mt-1 font-medium leading-relaxed">Documento firmado digitalmente y guardado en blockchain con éxito.</p>
                            <p className="text-[11px] font-black uppercase tracking-wider text-success mt-3">Completado • Hoy</p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Step 4: Bloqueado/Pendiente */}
                    <div className={`relative flex items-start gap-6 z-10 transition-opacity duration-500 ${!isSigned ? 'opacity-50 grayscale' : 'opacity-100'}`}>
                      <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 shrink-0 ring-4 ring-white ${isSigned ? 'bg-white border-warning text-warning shadow-lg' : 'bg-gray-50 border-gray-300 text-gray-400'}`}>
                        {isSigned ? <Settings className="w-5 h-5 animate-spin-slow" /> : <Lock className="w-5 h-5" />}
                      </div>
                      <div className="pt-2 w-full">
                        <h3 className="font-bold text-xl text-foreground">Escritura Pública</h3>
                        {isSigned ? (
                          <div className="mt-3 p-5 rounded-2xl bg-warning/5 border border-warning/20 shadow-sm animate-in fade-in">
                            <p className="text-sm text-warning-foreground font-bold leading-relaxed">La notaría está procesando tu expediente físico. Recibirás una notificación para el cierre final.</p>
                          </div>
                        ) : (
                          <p className="text-sm text-muted-foreground mt-1 font-medium">Trámite notarial final. Se activará automáticamente tras la firma de minuta.</p>
                        )}
                      </div>
                    </div>

                  </div>
                </div>
              </Card>
            </div>

            {/* Document Vault */}
            <div className="lg:col-span-5 space-y-6">
              <Card className="rounded-[2rem] border-gray-200 shadow-sm bg-white h-full">
                <div className="p-8 border-b border-gray-100 bg-gray-50/50">
                  <h2 className="text-xl font-black text-foreground flex items-center gap-2">
                    <Lock className="w-5 h-5 text-primary" /> Caja Fuerte Digital
                  </h2>
                  <p className="text-sm text-muted-foreground mt-2 font-medium">Documentos inmutables respaldados en blockchain</p>
                </div>
                <CardContent className="p-8 space-y-5">
                  
                  {/* Archivos Descargables */}
                  <div className="group flex items-center justify-between p-5 rounded-2xl border border-gray-200 bg-white hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-primary/5 transition-colors border border-gray-100"><FileText className="w-6 h-6 text-success" /></div>
                      <div>
                        <p className="text-sm font-bold text-foreground">Oferta de Compra.pdf</p>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mt-1">Firmado • 12 Oct</p>
                      </div>
                    </div>
                    <Button onClick={() => handleDownload("Oferta_de_Compra.pdf")} variant="ghost" size="icon" className="text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-full h-10 w-10 bg-gray-50"><Download className="w-4 h-4" /></Button>
                  </div>

                  <div className="group flex items-center justify-between p-5 rounded-2xl border border-gray-200 bg-white hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-primary/5 transition-colors border border-gray-100"><FileText className="w-6 h-6 text-success" /></div>
                      <div>
                        <p className="text-sm font-bold text-foreground">Certificado_Estructural.pdf</p>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mt-1">Ing. Civil Aprobado</p>
                      </div>
                    </div>
                    <Button onClick={() => handleDownload("Certificado_Estructural.pdf")} variant="ghost" size="icon" className="text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-full h-10 w-10 bg-gray-50"><Download className="w-4 h-4" /></Button>
                  </div>

                  {/* Documento Dinámico */}
                  <div className={`group flex items-center justify-between p-5 rounded-2xl border-2 transition-all ${isSigned ? 'border-success/20 bg-success/5 hover:shadow-md' : 'border-warning/30 bg-warning/5 hover:shadow-md'}`}>
                    <div className="flex items-center gap-4">
                      <div className={`p-3 bg-white rounded-xl shadow-sm border ${isSigned ? 'border-success/20' : 'border-warning/20'}`}>
                        <FileText className={`w-6 h-6 ${isSigned ? 'text-success' : 'text-warning'}`} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-foreground">Minuta_Compraventa.pdf</p>
                        <p className={`text-[11px] font-black uppercase tracking-wider mt-1 ${isSigned ? 'text-success' : 'text-warning'}`}>
                          {isSigned ? 'Firmado Biométricamente' : 'Requiere tu firma'}
                        </p>
                      </div>
                    </div>
                    {isSigned ? (
                      <Button onClick={() => handleDownload("Minuta_Firmada.pdf")} variant="ghost" size="icon" className="text-success hover:bg-success/10 rounded-full h-10 w-10 bg-white shadow-sm border border-success/20"><Download className="w-4 h-4" /></Button>
                    ) : (
                      <Button onClick={() => setActiveModal("sign")} variant="ghost" size="icon" className="text-warning hover:bg-warning/10 rounded-full h-10 w-10 bg-white shadow-sm border border-warning/20"><PenTool className="w-4 h-4" /></Button>
                    )}
                  </div>

                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}