import './App.css';

function App() {
  return (
    <div className='App'>
      <iframe
      className='iframe'
        src='https://player.castr.com/live_5568f9708c5011ef8852b56569d35f7a?tracks=Arabic,French,English'
        width='100%'
        frameborder='0'
        scrolling='no'
        allow='autoplay'
        allowfullscreen
        webkitallowfullscreen
        mozallowfullscreen
        oallowfullscreen
        msallowfullscreen
      ></iframe>
    </div>
  );
}

export default App;
