# 🎬 Movie Finder App

This is a simple web-based application that allows users to search for movies using the [OMDb API](http://www.omdbapi.com/). Enter the name of a movie, and get details like the poster, genre, rating, and plot — instantly!

---

## 🚀 Features

✅ Fetch movie information by title  
✅ Displays:
- 🎞️ Movie Poster  
- 📆 Release Year  
- ⭐ IMDb Rating  
- 🎭 Genre  
- 📝 Plot Summary  

✅ Error handling for invalid or missing inputs

---

## 🛠️ Technologies Used

- HTML5  
- CSS3  
- JavaScript (Vanilla)  
- [OMDb API](https://www.omdbapi.com/)

---

## 🧪 How to Use

1. Clone or download this repository.
2. Open `index.html` in your browser.
3. Type the movie name into the input box.
4. Click on the **Search** button.
5. View results instantly!

---

## 🔑 API Key

This app uses a **free OMDb API key**.

If you'd like to use your own key:
1. Visit [OMDb API](http://www.omdbapi.com/apikey.aspx)
2. Get a free API key
3. Replace this part in `index.js`:
   ```javascript
   fetch(`http://www.omdbapi.com/?t=${movieName}&apikey=YOUR_API_KEY`)
