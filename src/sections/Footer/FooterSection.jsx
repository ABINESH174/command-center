function FooterSection() {
  return (
    <footer className="section-container">
      <div className="card terminal-font">
        <p className="mb-4 text-green-500">$ exit</p>

        <p className="text-gray-400">Session terminated.</p>

        <p className="mt-4 text-gray-500">Engineer still learning...</p>

        {/* <div className="mt-8 text-4xl">🐧</div> */}
        <div
          title="Linux uptime: ∞"
          className="
    mt-8
    cursor-pointer
    text-4xl
    transition
    hover:scale-125
  "
        >
          🐧
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
