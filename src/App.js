import './App.css';

function App() {
  const url = "https://www.frontendmentor.io/";

  const handleClick = async () => {
    await navigator.clipboard.writeText(url);
  }
  return (
    <>
      <main className='bg-primary-light h-screen relative'>
        <article className="w-[320px] h-[497px] bg-white flex flex-col rounded-[20px] p-4 gap-3 shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img src="./image-qr-code.png" alt="qr-code" className="h-[288px] flex bg-primary rounded-[10px] cursor-pointer" onClick={handleClick} />
          <h3 className="text-center font-bold text-[22px]">Improve your front-end skills by building projects</h3>
          <p className="text-center font-normal text-gray-500 tracking-[0.19px]">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </article>
      </main>
    </>
  );
}

export default App;
