import { useEffect, useState } from "react";
import axios from "axios";
import { apiKey } from "./vars";

function App() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("Tehran");
  console.log;

  async function getWeather(city) {
    const result = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=a9df35bcbfab39a87f45e93475d58e07&units=metric&cnt=7`
    );
    console.log(result);
    return result;
  }

  useEffect(() => {
    getWeather(city);
    setData();
  }, [city]);

  return (
    <div className="bg flex justify-center items-center">
      <div className="flex gap-3 w-6/12 justify-center py-5 bg-[#ffffff30]">
        <input type="search" className="rounded-sm w-2/3 px-2 py-1" />
        <button
          type="submit"
          className="rounded bg-blue-700 text-white px-6 py-1"
        >
          See
        </button>
      </div>
    </div>
  );
}

export default App;
