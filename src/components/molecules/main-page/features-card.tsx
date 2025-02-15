const FeatureCard = () => {
  return (
    <div className="justify-self-center text-center mt-40">
      <h3 className="subtext-header text-purple font-medium">Features</h3>
      <h1 className="text-header">What Baby Yards Offers</h1>
      <h2 className="subtext-header">
        Dashboard platform has lorem ipsum dolor sit amet consectetur
        adipisicing elit. Maxime mollitia.
      </h2>
      {/* This can be a  common component */}
      <div>
        <div className="grid grid-cols-2 gap-10 p-2">
          <div className="feature-card">Staff, Parents</div>
          <div className="feature-card">Classrooms by Age</div>
          <div className="feature-card">Staff Chat Forum </div>
          <div className="feature-card">Assign & Reassign Rooms</div>
          <div className="feature-card">Incident Reports</div>
          <div className="feature-card">Incident Reports</div>
        </div>
      </div>
    </div>
  )
}

export default FeatureCard
