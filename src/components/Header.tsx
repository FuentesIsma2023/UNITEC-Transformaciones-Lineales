const Header = () => {
  return (
    <header className="w-full py-8 px-6 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-b border-primary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4">
          <div className="inline-block px-6 py-3 bg-card/80 backdrop-blur-sm rounded-lg border border-primary/30 shadow-lg">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Transformaciones Lineales Aplicadas a Logos
            </h1>
          </div>
          
            {/* 
            <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-card/60 backdrop-blur-sm p-4 rounded-lg border border-primary/20">
              <h2 className="text-lg font-semibold text-primary mb-2">Información del Estudiante</h2>
              <div className="space-y-1 text-sm text-muted-foreground">
              <p><span className="text-foreground font-medium">Alumno:</span> Ismael Najera</p>
              <p><span className="text-foreground font-medium">Carrera:</span> Software y Redes</p>
              </div>
            </div>
            
            <div className="bg-card/60 backdrop-blur-sm p-4 rounded-lg border border-secondary/20">
              <h2 className="text-lg font-semibold text-secondary mb-2">Información Académica</h2>
              <div className="space-y-1 text-sm text-muted-foreground">
              <p><span className="text-foreground font-medium">Materia:</span> Álgebra Lineal</p>
              <p><span className="text-foreground font-medium">Profesora:</span> Adriana Campos Ramírez</p>
              <p><span className="text-foreground font-medium">Institución:</span> UNITEC</p>
              </div>
            </div>
            </div>
            */}
          
          <div className="bg-accent/10 backdrop-blur-sm p-4 rounded-lg border border-accent/30 mt-4">
            <p className="text-sm text-foreground">
              <span className="font-semibold text-accent">Logo:</span> TechNet Solutions - Empresa ficticia de desarrollo de software y soluciones de redes
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;