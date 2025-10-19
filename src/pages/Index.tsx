import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import CartesianPlane from '@/components/CartesianPlane';
import Logo from '@/components/Logo';
import MatrixDisplay from '@/components/MatrixDisplay';

type TransformationType = 'rotation' | 'reflection' | 'scaling' | 'translation';

interface Transformation {
  type: TransformationType;
  name: string;
  matrix: number[][];
  description: string;
  steps: string[];
  transform: string;
  scale?: number;
}

const Index = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const transformations: Transformation[] = [
    {
      type: 'rotation',
      name: 'Rotación (45° en sentido antihorario)',
      matrix: [
        [0.71, -0.71],
        [0.71, 0.71]
      ],
      description: 'Rotación de 45 grados alrededor del origen en el plano XY.',
      steps: [
        'Matriz de rotación: R(θ) donde θ = 45°',
        'cos(45°) ≈ 0.71 y sen(45°) ≈ 0.71',
        'Cada punto (x,y) se multiplica por la matriz R',
        'Resultado: (x\', y\') = (0.71x - 0.71y, 0.71x + 0.71y)'
      ],
      transform: 'rotate(45deg)',
    },
    {
      type: 'reflection',
      name: 'Reflexión (sobre el eje Y)',
      matrix: [
        [-1, 0],
        [0, 1]
      ],
      description: 'Reflexión especular del logo sobre el eje vertical Y.',
      steps: [
        'Matriz de reflexión sobre eje Y: [-1, 0; 0, 1]',
        'La coordenada X cambia de signo',
        'La coordenada Y permanece igual',
        'Resultado: (x\', y\') = (-x, y)'
      ],
      transform: 'scaleX(-1)',
    },
    {
      type: 'scaling',
      name: 'Escalado (2x en ambos ejes)',
      matrix: [
        [2, 0],
        [0, 2]
      ],
      description: 'Ampliación del logo al doble de su tamaño original.',
      steps: [
        'Matriz de escalado: S(k) donde k = 2',
        'Ambas componentes se multiplican por 2',
        'El logo se amplía uniformemente',
        'Resultado: (x\', y\') = (2x, 2y)'
      ],
      transform: 'scale(1)',
      scale: 2,
    },
    {
      type: 'translation',
      name: 'Desplazamiento (+3 en X, +2 en Y)',
      matrix: [
        [1, 0],
        [0, 1]
      ],
      description: 'Traslación del logo 3 unidades a la derecha y 2 unidades arriba.',
      steps: [
        'Vector de traslación: t = (3, 2)',
        'Se suma el vector a cada punto',
        'Matriz identidad + vector de desplazamiento',
        'Resultado: (x\', y\') = (x + 3, y + 2)'
      ],
      transform: 'translate(120px, -80px)',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % transformations.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const current = transformations[currentIndex];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <div className="bg-secondary/10 backdrop-blur-sm p-4 rounded-lg border border-secondary/30">
              <h2 className="text-xl font-bold text-secondary mb-2">Visualización en Plano Cartesiano</h2>
              <p className="text-sm text-muted-foreground">
                El logo se transforma automáticamente cada 4 segundos mostrando las diferentes transformaciones lineales.
              </p>
            </div>
            
            <CartesianPlane>
              <Logo transform={current.transform} scale={current.scale} />
            </CartesianPlane>

            <div className="flex justify-center gap-2 pt-2">
              {transformations.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === currentIndex
                      ? 'bg-primary w-8'
                      : 'bg-primary/30 hover:bg-primary/50'
                  }`}
                  aria-label={`Ver ${t.name}`}
                />
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <MatrixDisplay
              transformation={current.name}
              matrix={current.matrix}
              description={current.description}
              steps={current.steps}
            />

            <div className="bg-card/60 backdrop-blur-sm p-5 rounded-lg border border-primary/20">
              <h3 className="text-lg font-semibold text-foreground mb-3">Sobre las Transformaciones Lineales</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  <span className="text-primary font-medium">• Rotación:</span> Gira el objeto alrededor de un punto (origen) usando funciones trigonométricas.
                </p>
                <p>
                  <span className="text-secondary font-medium">• Reflexión:</span> Crea una imagen especular del objeto sobre un eje específico.
                </p>
                <p>
                  <span className="text-accent font-medium">• Escalado:</span> Cambia el tamaño del objeto multiplicando las coordenadas por un factor.
                </p>
                <p>
                  <span className="text-foreground font-medium">• Desplazamiento:</span> Mueve el objeto sumando valores constantes a las coordenadas.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 p-5 rounded-lg border border-primary/30">
              <h3 className="text-lg font-semibold text-foreground mb-2">TechNet Solutions</h3>
              <p className="text-sm text-muted-foreground">
                Logo de empresa ficticia especializada en desarrollo de software y arquitecturas de red. 
                El diseño representa nodos interconectados simbolizando la conectividad y las soluciones tecnológicas integradas.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;