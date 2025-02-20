import { useState, useEffect } from "react";
import axios from "axios";
import "./Generator.css";

function Generator() {
  const [verse, setVerse] = useState("Loading verse...");
  const [copied, setCopied] = useState(false);

  const fetchVerse = async () => {
    try {
      const response = await axios.get("https://bible-api.com/?random=1");
      setVerse(`${response.data.text} - ${response.data.reference}`);
      setCopied(false);
    } catch (error) {
      console.error("Error fetching verse:", error);
      setVerse("Failed to load verse. Please try again.");
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(verse).then(() => {
        setCopied(true);
      setTimeout(() => setCopied(false), 2000)

    });
  }

  const shareOnSocial = (platform) => {
    const encodedVerse = encodeURIComponent(verse);
    let url = "";

    if (platform === "whatsapp") {
      url = `https://api.whatsapp.com/send?text=${encodedVerse}`;
    } else if (platform === "twitter") {
      url = `https://twitter.com/intent/tweet?text=${encodedVerse}`;
    } else if (platform === "facebook") {
      url = `https://www.facebook.com/sharer/sharer.php?u=https://yourwebsite.com&quote=${encodedVerse}`;
    } else if (platform === "instagram") {
      url = `https://www.instagram.com/sharer/sharer.php?u=https://yourwebsite.com&quote=${encodedVerse}`;
    }

    window.open(url, "_blank");
  };

  useEffect(() => {
    fetchVerse();
  }, []);

  return (
    <div className="container hero">
      <div className="row justify-content-center min-vh-100 align-items-center">
        <div className="col-lg-8 col-md-10 col-sm-12">
          <div className="card p-5 text-center bg-transparent card-bg">
            <h1 className="mb-3">Daily Verse</h1>
            <p id="display" className="fs-5">
              {verse}
            </p>
            <div className="text-center">
              <button
                onClick={fetchVerse}
                className="btn btn-outline-primary mt-3 w-50"
              >
                Generate Verse
              </button>
              <div className="my-3">
                <button onClick={copyToClipboard} className="btn btn-primary mx-2">Copy</button>

              </div>
            </div>
          {copied && <p className="text-success mt-2">✔️ Verse copied!</p>}
          {/* {copied && <p className="text-success mt-2">✔️ Verse copied!</p>} */}
            <hr/>
            <div className="social-net d-flex justify-content-center">
                <a href="/" onClick={() => shareOnSocial("whatsapp")} className="mx-2"><i className="bi bi-whatsapp"></i></a>
                <a href="/" onClick={() => shareOnSocial("facebook")} className="mx-2"><i className="bi bi-facebook"></i></a>
                <a href="/" onClick={() => shareOnSocial("twitter")} className="mx-2"><i className="bi bi-twitter-x"></i></a>
                <a href="/" onClick={() => shareOnSocial("instagram")} className="mx-2"><i className="bi bi-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Generator;
