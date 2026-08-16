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
          
          <h1>এই Miss Jannat শুনো না একটা কথা বলি 🥺❤️</h1>
          
          <p>
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

        <div className="success-card">

          <div className="success-heart">
            💖
          </div>

          <h1>
            ভালোবাসো! 🥹❤️
          </h1>

          <p>
            তোমার মুখে ভালবাসি কথাটা শোনার জন্য-ই তো এতো অপেক্ষা💕
            <br />
            দেখি এই অপেক্ষার প্রহর আর কত লম্বা হয়!🥺
          </p>

          <p className="success-message">
            জানো তোমার কণ্ঠের এই একটা ভালবাসি শব্দ
            <br />
            আমার মুখে সারাজীবন হাসি
            <br />
            রাখার জন্য যথেষ্ট। ❤️
          </p>

          <div className="emoji-row">
            🌹 💕 🥰 💍 ❤️
          </div>

          <div className="signature">
            ইতি,
            <br />
            তোমার বটপার ছেলে
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

          <div className="first-story">

            <h1>
              Hey Miss Jannat ❤️
            </h1>

            <p>
              তোমার কি মনে আছে,
              <br />
              আমাদের পরিচয় কীভাবে হয়েছিল?
            </p>

            <p>
              আমার কিন্তু মনে আছে। 😌
            </p>

            <p>
              আমি তখন Facebook-এ টুকটাক
              লিখালিখি করতাম,
              আর তুমি ছিলে আমার লেখার
              <br />
              <strong>
                স্পেশাল পাঠিকা। ❤️
              </strong>
            </p>

            <p>
              সেখান থেকেই একদিন
              <br />
              Inbox-এ টুকটাক কথা বলা শুরু...
            </p>

            <p>
              তারপর একদিন
              <br />
              voice call এ কথা হলো...
            </p>

            <p className="special-line">
              আর আমি তোমার সেই মায়াবী কণ্ঠের মায়ায়ই পড়লাম। 🥺❤️
            </p>

            <p>
              সেই থেকে আজ পর্যন্ত
              <br />
              তোমার সেই মায়ার জাল থেকে
              <br />
              বের হইতে পারি নাই। ❤️
            </p>

          </div>

          <button
            onClick={nextPage}
            className="main-btn"
          >
            তারপর কী হলো? ❤️
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

          <h2>
            তারপর... ❤️
          </h2>

          <div className="story-card">

            <p>
              সেই টুকটাক কথাগুলো যে কখন
              এতটা গুরুত্বপূর্ণ হয়ে গেল,
              সেটা হয়তো আমরা দুজনের কেউই
              বুঝতে পারিনি।
            </p>

            <p>
              একটা ছোট্ট পরিচয় থেকে শুরু করে,
              <br />
              ধীরে ধীরে তুমি আমার জীবনের
              <br />
              অনেকটা জায়গা জুড়ে নিলে।
            </p>

            <p>
              কখন যে তোমার সাথে কথা বলা
              আমার দিনের একটা গুরুত্বপূর্ণ
              অংশ হয়ে গেল...
              <br />
              সেটা নিজেও বুঝতে পারিনি। ❤️
            </p>

            <p>তোমার সাথে আমার দেখা হয়নি এইটা সত্যি,
              <br/>
              কিন্তু আমি তোমাকে সব সময় অনুভব করি!!
            </p>

            <p className="highlight">
              আর সত্যি বলতে...
              <br />
              তুমি আমার কাছে
              <br />
              অনেক বেশি স্পেশাল। ❤️
            </p>

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

          <h2>
            সত্যি বলতে... ❤️
          </h2>

          <div className="letter-card">

            <p>
              সত্যি বলতে জানি না আমাদের
              সম্পর্কটা আসলে কি?
            </p>

            <p>
              নাম কি এই সম্পর্কের?
            </p>

            <p>
              এই প্রশ্নের কোন উত্তর নেই
              আমার কাছে!
            </p>

            <p>
              কিন্তু আমি এইটুকু জানি যে -
              <br />
              <strong>
               তুমি আমার কাছে অনেক স্পেশাল! ❤️
              </strong>
            </p>

            <p>
              আমি এটাও জানি না আমাদের
              সম্পর্কের ভবিষ্যৎ কি?
            </p>

            <p>
              এইটা নিয়ে তুমি বা কি ভাবো,
              তুমি আমার ভাগ্যে আছো কি না
              এটাও অজানা!
            </p>

            <p className="highlight">
              কিন্ত আমি এটাও জানি,
              <br />
              তুমি সব সময় আমার কাছে
              <br />
              <strong>
                স্পেশালই থাকবে! ❤️
              </strong>
            </p>

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

          <div className="letter-card final-letter">

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
                খারাপ বটপার ছেলে 😌
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
        <div className="page proposal-page">

          <div className="big-floating-heart">
            ❤️
          </div>

          <p className="proposal-small">
            এত কিছু বলার পর...
          </p>

          <h1 className="proposal-title">

            Miss Jannat...

            <br />

            <span>
              Will you be mine? 🥺❤️
            </span>

          </h1>

          <p className="proposal-text">

            সম্পর্কটার নাম জানি না...

            <br />

            ভবিষ্যৎও জানি না...

            <br />

            শুধু জানি,

            <br />

            <strong>
              তোমাকে আমি আমার জীবনে চাই। ❤️
            </strong>

          </p>

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