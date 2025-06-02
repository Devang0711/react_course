import "./App.css";
import Card from "./components/Card"

function App() {
  const img1 =
    "https://fotocentreindia.com/wp-content/uploads/Canon-DSLR-Camera-EOS-1500D-with-18-55mm-IS-II-Lens-Online-Buy-India-_1.jpg";

  const img2 =
    "https://sharpi.in/wp-content/uploads/2022/05/1624972877_1649280.jpg";

  const img3 =
    "https://cdn.mos.cms.futurecdn.net/GXHa4PWwDPx7tGQG9MDQvK-1200-80.jpg";

  const img4 =
    "https://www.adorama.com/alc/wp-content/uploads/2021/04/photography-camera-types-feature.jpg";

  return (
    <>
      <section className="card">
        <div className="container">
          <div className="flex">
            <Card image={img1} />
            <Card image={img2} />
            <Card image={img3} />
            <Card image={img4} />
          </div>
        </div>
      </section>
    </>
  );
}
export default App;
