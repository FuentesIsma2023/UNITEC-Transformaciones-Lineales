interface MatrixDisplayProps {
  transformation: string;
  matrix: number[][];
  description: string;
  steps: string[];
}

const MatrixDisplay = ({ transformation, matrix, description, steps }: MatrixDisplayProps) => {
  return (
    <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg border border-primary/30 shadow-xl">
      <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
        <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
        {transformation}
      </h3>
      
      <div className="space-y-4">
        <div>
          <p className="text-sm text-muted-foreground mb-3">{description}</p>
          
          <div className="bg-background/50 p-4 rounded-lg border border-secondary/20">
            <p className="text-xs font-semibold text-secondary mb-2">Matriz de Transformación:</p>
            <div className="flex items-center justify-center gap-2">
              <div className="text-4xl text-primary/50">[</div>
              <div className="grid gap-1">
                {matrix.map((row, i) => (
                  <div key={i} className="flex gap-4">
                    {row.map((val, j) => (
                      <span
                        key={j}
                        className="text-lg font-mono font-bold text-foreground w-12 text-center bg-primary/10 rounded px-2 py-1"
                      >
                        {val}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
              <div className="text-4xl text-primary/50">]</div>
            </div>
          </div>
        </div>

        <div className="bg-accent/10 p-4 rounded-lg border border-accent/30">
          <p className="text-xs font-semibold text-accent mb-2">Pasos de la Transformación:</p>
          <ol className="list-decimal list-inside space-y-1 text-sm text-foreground/90">
            {steps.map((step, i) => (
              <li key={i} className="ml-2">{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default MatrixDisplay;