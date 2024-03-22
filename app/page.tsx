export default function Home() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="/images/welder-in-action.jpg"
          className="max-w-xl rounded-lg shadow-2xl"
        />
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Teamwork Means Success</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn text-white bg-red-700">Get Started</button>
        </div>
      </div>
    </div>
  );
}
