import homeImage from "../img/67331140ed060e2752aeb7a3.avif";

function Home() {
  return (
    <div className="home-container">
      <img 
        className="home-background"
        src={homeImage}
        alt="תמונת רקע"
      />
      <div className="home-overlay"></div>
      <div className="home-content">
        <h1>אתר המתכונים שלי</h1>
        <p>גלו מתכונים טעימים ומיוחדים למטבח שלכם</p>
      </div>
    </div>
  );
}

export default Home;
