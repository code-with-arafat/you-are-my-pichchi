import { useState } from "react";
import "./App.css";

function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [page, setPage] = useState(0);
  const [accepted, setAccepted] = useState(false);
  const [noPosition, setNoPosition] = useState({});

  const nextPage = () => {
    setPage((prev) => prev + 1);
  };

  const moveNoButton = () => {
    const x = Math.floor(Math.random() * 180) - 90;
    const y = Math.floor(Math.random() * 140) - 70;

    setNoPosition({
      transform: `translate(${x}px, ${y}px)`,
    });
  };

  /* =========================
      ENTRANCE SCREEN
  ========================= */
  if (!hasEntered) {
    return (
      <div className="app">
        <div className="page entrance-page">
          <div className="top-heart">💌</div>
          
          <h1 className="special-bangla-font"><span className="special-name-font">Jannat </span> শুনো না --</h1>
          
          <p className="special-bangla-font">
            তোমার সাথে কিছু কথা ছিল যেগুলা হইতো কখনো বলা হয়নি...
            <br />
            একটু সময় নিয়ে শেষ পর্যন্ত দেখো কিন্তু! 😊
          </p>

          <button
            onClick={() => setHasEntered(true)}
            className="main-btn"
          >
            কী কথা? শুনবো! ✨
          </button>
        </div>
      </div>
    );
  }

  /* =========================
      YES SCREEN
  ========================= */

  if (accepted) {
    return (
      <div className="success-page">

        <div className="floating-hearts">
          ❤️ 💕 ❤️ 💕 ❤️
        </div>

        <div className="success-card special-bangla-font">

          <div className="success-heart">
            💖
          </div>

          <h1>
            ভালোবাসো! 🥹❤️
          </h1>

          <p>
            এইসব ফালতু কাজের জন্য টাইম নাই আমার কাছে
            <br />
            আর তোমার মতো কারো জন্য? Ohh! come on baby- একটু বড় হও!
          </p>

          <p className="success-message">
            হ্যাঁ তোমার কণ্ঠ সুন্দর আছে 
            <br />
            তাই মাঝে মাঝে যখন সময় কাটে না, কাজ থাকে না  

            <br />
            তখন একটু সময় কাটাই!
          </p>

          <p>
            হ্যাঁ মিথ্যা বলবো না ২০২২-২৩ এই সময় তোমাকে ভালো লাগতো!
            <br/> 
            তবে শুধুই ভালো লাগতো Not more🥱 তবে --
          </p>

          <p>
            প্রেম করে চু*তিয়াদের খাতাই নাম লিখাবো এতো খারাপ দিন আসেনি Arafat এর!
          </p>
          <p>আর এতো খারাপ দিন তো আসেই-নি যে কোন টিকটকার এর সাথে প্রেম করতে হবে!
            <br/>
            ধন্যবাদ ভালো থাকবেন আর যদি মনে থাকে তাহলে আরাফাত এর সাথে ভাব নিতে আসবেন না আসা করি! 
          </p>



          <div className="emoji-row">
            🙂 🙂 🙂  🙂   
          </div>

          <div className="signature">
            ইতি,
            <br />

            তোমার অতি প্রিয়
            
            <br />
            <strong>আরাফাত ❤️</strong>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="app">

      {/* =================================
          PAGE 0 — INTRO + FIRST STORY
      ================================= */}

      {page === 0 && (
        <div className="page first-page">

          <div className="floating-heart">
            ❤️
          </div>

          <div className="first-story special-bangla-font ">
            <p>পরের পেজ এ যাও --</p>
            
          </div>

          <button
            onClick={nextPage}
            className="main-btn"
          >
             Next❤️
          </button>

        </div>
      )}

      {/* =================================
          PAGE 1 — STORY
      ================================= */}

      {page === 1 && (
        <div className="page">

          <div className="top-heart">
            💌
          </div>

          <div className="story-card special-bangla-font">
            <p>পরের পেজ এ যাও --</p>
          </div>

          <button
            onClick={nextPage}
            className="main-btn"
          >
            একটা কথা বলি? 🥺
          </button>

        </div>
      )}

      {/* =================================
          PAGE 2 — EMOTIONAL PART
      ================================= */}

      {page === 2 && (
        <div className="page">

          <div className="top-heart">
            🥺
          </div>

          <div className="letter-card special-bangla-font">

            <p>পরের পেজ এ যাও সারপ্রাইজ আছে --</p>

          </div>

          <button
            onClick={nextPage}
            className="main-btn"
          >
            আর একটা কথা... 🌸
          </button>

        </div>
      )}

      {/* =================================
          PAGE 3 — LETTER
      ================================= */}

      {page === 3 && (
        <div className="page">

          <div className="top-heart">
            🌹
          </div>

          <div className="letter-card final-letter special-bangla-font">

            <p>
              সব সময় ভালো থাকো,
              <br />
              হাসি খুশি থাকো—
              <br />
              এটাই দোয়া করি। ❤️
            </p>

            <div className="divider"></div>

            <p className="iti">
              ইতি,
              <br />
              তোমার দেখা সব থেকে
              <br />
              <strong>
                খারাপ বাটপার ছেলে 😌
              </strong>
            </p>

            <h3>
              — আরাফাত ❤️
            </h3>

          </div>

          <button
            onClick={nextPage}
            className="main-btn"
          >
            শেষ একটা প্রশ্ন... 🥺
          </button>

        </div>
      )}

      {/* =================================
          PAGE 4 — FINAL PROPOSAL
      ================================= */}

      {page === 4 && (
        <div className="page proposal-page special-bangla-font">

          <div className="big-floating-heart">
            ❤️
          </div>

          <h1 className="proposal-title special-english-font">
            Miss Jannat...
            <br />

            <span>
              Do you love me? 🥺❤️
            </span>
          </h1>

          <div className="buttons">

            <button
              onClick={() => setAccepted(true)}
              className="yes-btn"
            >
              Yes ❤️
            </button>

            <button
              onMouseEnter={moveNoButton}
              onClick={moveNoButton}
              style={noPosition}
              className="no-btn"
            >
              No 🙈
            </button>

          </div>

          <p className="think-text">
            ভালো করে ভেবে উত্তর দিও... 😌❤️
          </p>

        </div>
      )}

    </div>
  );
}

export default App;