function StatusCard({ title, status }) {
  return (
    <div className="card flex items-center justify-between">
      <h3 className="font-semibold">{title}</h3>

      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-green-500"></div>

        <span className="text-sm text-green-500">{status}</span>
      </div>
    </div>
  );
}

export default StatusCard;
