const { useState } = React;

function App() {
  const [imageSrc, setImageSrc] = useState(null);

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (!file) {
      setImageSrc(null);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => setImageSrc(reader.result);
    reader.readAsDataURL(file);
  }

  return (
    <div className="page">
      <header className="topbar">
        <div className="title">AI Shooter</div>
      </header>
      <main className="content">
        <section className="text">
          <h1>AI Photo Shooter</h1>
          <p>Upload an image of your product and get 8 enhanced photos</p>
          <p2>Make sure you are logged in first</p2>
        </section>
        <section className="upload">
          <label className="upload-label" htmlFor="image-input">Upload an image</label>
          <input id="image-input" type="file" accept="image/*" onChange={handleFileChange} />
          {imageSrc && (
            <div className="preview">
              <img src={imageSrc} alt="Selected image" />
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);