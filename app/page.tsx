export default function Home() {
  return (
    <div>
      <div className="hero min-h-screen bg-gray-100">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="/images/welder-in-action.jpg"
            className="md:max-w-xl sm:max-w-lg rounded-lg shadow-xl shadow-gray-400"
          />
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-black">
              Teamwork Means Success
            </h1>
            <p className="py-6 text-black">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn  btn-primary text-white shadow-xl shadow-gray-400">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="stats h-60 flex-grow flex bg-blue-950 text-primary-content rounded-none">
        <div className="stat gap-8">
          <div className="stat-title text-slate-300">Account balance</div>
          <div className="stat-value text-slate-300">$89,400</div>
        </div>
        <div className="stat gap-8">
          <div className="stat-title text-slate-300">Account balance</div>
          <div className="stat-value text-slate-300">$89,400</div>
        </div>
        <div className="stat gap-8">
          <div className="stat-title text-slate-300">Account balance</div>
          <div className="stat-value text-slate-300">$89,400</div>
        </div>

        <div className="stat">
          <div className="stat-title text-slate-300">Current balance</div>
          <div className="stat-value text-slate-300">$89,400</div>
        </div>
      </div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="/images/welder-in-action.jpg"
            className="md:max-w-xl sm:max-w-lg rounded-lg shadow-2xl"
          />
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Teamwork Means Success</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn  btn-primary text-white">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
