function RadarWidget() {
  return (
    <div className="card">
      <h3 className="mb-6 text-xl font-bold">Robotics Radar</h3>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span>ROS 2</span>

          <span className="text-green-500">SCANNING...</span>
        </div>

        <div className="flex justify-between">
          <span>Gazebo</span>

          <span className="text-yellow-500">TARGET ACQUIRED</span>
        </div>

        <div className="flex justify-between">
          <span>Distributed Robotics</span>

          <span className="text-blue-500">IN PROGRESS</span>
        </div>

        <div className="flex justify-between">
          <span>Infrastructure</span>

          <span className="text-green-500">ACTIVE</span>
        </div>
      </div>
    </div>
  );
}

export default RadarWidget;
