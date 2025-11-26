import fetch from "node-fetch";

const API_KEY = "5b42f72a2bf94e7690f9e1f5fc41fb87";

export const getNews = async (req, res) => {
  try {
    const category = req.query.category?.toLowerCase() || "general";

    const url = https;//newsapi.org/v2/top-headlines?category=${category}&language=en&pageSize=5&apiKey=${API_KEY};

    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== "ok") {
      return res.status(400).json({ message: "Failed to fetch news" });
    }

    const formattedNews = data.articles.map((article) => ({
      title: article.title,
      description: article.description,
      url: article.url,
      image: article.urlToImage,
      source: article.source.name,
      publishedAt: article.publishedAt,
    }));

    res.json(formattedNews);
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).json({ message: "Server error fetching news" });
  }
};