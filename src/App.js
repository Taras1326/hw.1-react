import "./App.css";

function App() {
  const name = "Taras";

  const site = {
    title: "Google",
    url: "https://www.google.com/",
  };

  const a = 7;
  const b = 3;
  const sum = a + b;

  const colors = ["Червоний", "Синій", "Зелений"];

  return (
    <div className="App">
      <h1>{name}</h1>

      <p>Сайт тільки почали робити</p>

      <img
        width="700"
        src={
          "https://pictures.tribuna.com/image/6cff39e2-97b5-441d-8441-6c8dca6f92b9?width=1920&quality=70"
        }
        alt={"Random image"}
      />

      <p>
        <a href={site.url} target="_blank" rel="noreferrer">
          {site.title}
        </a>
      </p>

      <p>Сума: {sum}</p>

      <ul>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
