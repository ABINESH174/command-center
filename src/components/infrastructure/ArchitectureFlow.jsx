function ArchitectureFlow({ nodes }) {
  return (
    <div className="card overflow-x-auto">
      <div className="flex min-w-max items-center gap-4 py-6">
        {nodes.map((node, index) => (
          <div key={index} className="flex items-center gap-4">
            <div
              className="
                rounded-xl
                border
                border-blue-500/30
                bg-gray-800
                px-6
                py-4
                text-center
                font-medium
                transition
                hover:-translate-y-1
                hover:border-green-500
              "
            >
              {node}
            </div>

            {index < nodes.length - 1 && (
              <div className="text-green-500">→</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArchitectureFlow;
