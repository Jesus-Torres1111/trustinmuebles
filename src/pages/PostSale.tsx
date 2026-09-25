import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Map, FileText, CheckCircle2, ShieldAlert, TrendingUp, Home, Plus, Calendar, Settings } from "lucide-react";

export default function PostSale() {
  return (
    <div className="flex-1 bg-gray-50/50 min-h-[calc(100vh-5rem)] pb-24">
      
      {/* Header Profile Area */}
      <div className="bg-white border-b border-border pt-12 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-primary text-white rounded-2xl flex items-center justify-center text-3xl font-bold shadow-lg shadow-primary/20">
                JP
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground tracking-tight mb-1">¡Hola, Juan Pérez!</h1>
                <p className="text-muted-foreground text-lg">Panel de Propietario & Patrimonio</p>
              </div>
            </div>
            <Button variant="outline" className="rounded-xl bg-white shadow-sm h-12"><Settings className="w-4 h-4 mr-2"/> Configuración de cuenta</Button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        
        {/* Top Asset Value Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="rounded-3xl border-border/50 shadow-md bg-white">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-secondary rounded-xl"><Home className="w-6 h-6 text-primary" /></div>
                <Badge variant="outline" className="bg-gray-50 border-border">Activo</Badge>
              </div>
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">Propiedad Principal</p>
              <h3 className="font-bold text-xl text-foreground">Casa en San Isidro</h3>
              <p className="text-sm text-muted-foreground mt-1">Adquirida en Nov 2024</p>
            </CardContent>
          </Card>
          
          <Card className="rounded-3xl border-border/50 shadow-md bg-primary text-white md:col-span-2 relative overflow-hidden">
            <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-4 translate-y-4">
              <TrendingUp className="w-48 h-48" />
            </div>
            <CardContent className="p-8 relative z-10 flex flex-col justify-center h-full">
              <p className="text-sm font-bold text-white/80 uppercase tracking-wider mb-2">Valor Estimado Actual</p>
              <div className="flex items-end gap-4 mb-2">
                <h3 className="font-black text-4xl sm:text-5xl">$455,000 <span className="text-xl font-normal opacity-80">USD</span></h3>
                <div className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-1.5 mb-2">
                  <TrendingUp className="w-4 h-4 text-green-300"/>
                  <span className="font-bold text-green-50 text-sm">+8.3% vs Compra</span>
                </div>
              </div>
              <p className="text-sm text-white/70">Mantén tu historial de mantenimiento al día para maximizar tu plusvalía.</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-8">
            {/* Maintenance History */}
            <Card className="rounded-3xl border-border/50 shadow-sm bg-white overflow-hidden">
              <div className="p-6 md:p-8 flex items-center justify-between border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-secondary rounded-xl"><Wrench className="w-5 h-5 text-primary" /></div>
                  <h2 className="text-xl font-bold text-foreground">Historial de Mantenimiento</h2>
                </div>
                <Button variant="outline" className="rounded-xl text-sm h-10"><Plus className="w-4 h-4 mr-1"/> Registrar Servicio</Button>
              </div>
              <div className="p-0">
                <table className="w-full text-sm text-left">
                  <thead className="bg-gray-50/80 text-xs font-bold text-muted-foreground uppercase tracking-wider border-b border-border">
                    <tr>
                      <th className="px-8 py-4">Fecha</th>
                      <th className="px-8 py-4">Servicio Realizado</th>
                      <th className="px-8 py-4">Inversión</th>
                      <th className="px-8 py-4 text-right">Comprobante</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-8 py-5 font-semibold flex items-center gap-2"><Calendar className="w-4 h-4 text-muted-foreground"/> Oct 2025</td>
                      <td className="px-8 py-5 font-medium text-foreground">Impermeabilización de techos</td>
                      <td className="px-8 py-5 font-bold">$1,200</td>
                      <td className="px-8 py-5 text-right">
                        <Button variant="ghost" size="sm" className="text-primary hover:bg-secondary"><FileText className="w-4 h-4 mr-2" /> PDF</Button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-8 py-5 font-semibold flex items-center gap-2"><Calendar className="w-4 h-4 text-muted-foreground"/> Sep 2025</td>
                      <td className="px-8 py-5 font-medium text-foreground">Pintura general interior</td>
                      <td className="px-8 py-5 font-bold">$450</td>
                      <td className="px-8 py-5 text-right">
                        <Button variant="ghost" size="sm" className="text-primary hover:bg-secondary"><FileText className="w-4 h-4 mr-2" /> PDF</Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>

            {/* Active Tickets / Warranties */}
            <Card className="rounded-3xl border-border/50 shadow-sm bg-white">
              <div className="p-6 md:p-8 flex items-center justify-between border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-warning/10 rounded-xl"><ShieldAlert className="w-5 h-5 text-warning" /></div>
                  <h2 className="text-xl font-bold text-foreground">Garantías Activas</h2>
                </div>
              </div>
              <CardContent className="p-6 md:p-8 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-2xl border border-border hover:border-warning/30 hover:shadow-md transition-all bg-white">
                  <div>
                    <h4 className="font-bold text-base mb-1">Revisión de tubería principal</h4>
                    <p className="text-sm text-muted-foreground">Reportado: 02 Nov 2025 • Proveedor: Constructora ABC</p>
                  </div>
                  <div className="mt-4 sm:mt-0 flex items-center gap-4">
                    <Badge variant="warning" className="bg-warning/10 text-warning border-warning/20 px-3 py-1">Inspección Programada</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar (Tools & CTA) */}
          <div className="space-y-6">
            
            <Card className="rounded-3xl border-primary/20 shadow-lg bg-gradient-to-br from-white to-secondary/30">
              <div className="p-6 md:p-8 border-b border-border/50">
                <h2 className="text-xl font-bold text-foreground mb-1">Kit de Reventa</h2>
                <p className="text-sm text-muted-foreground">Prepara tu propiedad para el mercado.</p>
              </div>
              <CardContent className="p-6 md:p-8 space-y-4">
                <Button variant="outline" className="w-full justify-start h-14 rounded-xl font-semibold bg-white border-border shadow-sm hover:border-primary hover:text-primary transition-all">
                  <Map className="w-5 h-5 mr-3 text-muted-foreground" /> Acceder al Tour 3D Original
                </Button>
                <Button variant="outline" className="w-full justify-start h-14 rounded-xl font-semibold bg-white border-border shadow-sm hover:border-primary hover:text-primary transition-all">
                  <FileText className="w-5 h-5 mr-3 text-muted-foreground" /> Generar Dossier Inmobiliario
                </Button>

                <div className="mt-8 p-6 bg-white rounded-2xl border border-primary/10 shadow-sm text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">Vende con nosotros</h4>
                  <p className="text-sm text-muted-foreground mb-6">El 80% de los compradores prefieren propiedades con historial verificado en Trustinmuebles.</p>
                  <Button className="w-full h-12 rounded-xl shadow-md">Cotizar Venta</Button>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>

      </div>
    </div>
  );
}