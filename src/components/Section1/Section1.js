import "../main.css";
import "./Section1.css";

function Section1() {
  return (
    <section className="main-section">
      <header className="page-header">
        <nav>SNET education guild</nav>
        <ul>
          <li>Home</li>
          <li>Project</li>
          <li>Ecosystem</li>
          <li>Product</li>
        </ul>
      </header>
      <div className="container">
        <h1>SingularityNET</h1>
        <h2>Education Project</h2>
      </div>
      <div className="items">
        <div className="item-top-right item-width">Red</div>
        <div className="item-right item-width">Red</div>
        <div className="item-left item-width">Red</div>
        <div className="item-top-left item-width">Red</div>
      </div>
      {/* <img src="assets/img/width_1402.jpg" alt="" /> */}
    </section>
  );
}

export default Section1;
