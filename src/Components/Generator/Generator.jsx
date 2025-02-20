import { useState, useEffect } from "react";
import axios from "axios";
import "./Generator.css";

function Generator() {
  const [verse, setVerse] = useState("Loading verse...");

  const fetchVerse = async () => {
    try {
      const response = await axios.get("https://bible-api.com/?random=1");
      setVerse(`${response.data.text} - ${response.data.reference}`);
    } catch (error) {
      console.error("Error fetching verse:", error);
      setVerse("Failed to load verse. Please try again.");
    }
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
            <p id="display" className="fs-5">{verse}</p><div className="text-center">
            <button onClick={fetchVerse} className="btn btn-outline-primary mt-3 w-50">
                
              Generate Verse
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Generator;

