import { StoriesIndex } from "./StoriesIndex";
// import { useEffect, useState } from "react";
// import axios from "axios";

export function StoriesPage() {
  const stories = [{ id: 1, title: "Sample", photo: "sample.jpg", content: "Sample content" }];

  // const [stories, setStories] = useState([]);

  // const handleIndex = () => {
  //   console.log("handleIndex");
  //   axios.get("http://localhost:3000/api/v1/stories").then((response) => {
  //     console.log(response.data);
  //     setStories(response.data);
  //   });
  // };

  // useEffect(handleIndex, []);

  return (
    <main>
      <StoriesIndex stories={stories} />
    </main>
  );
}
