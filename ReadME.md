### Data

- **Search** YouTube 搜尋的結果是 YouTube 網頁 api 抓的，他太貴了
- **CSV** Google Trends 的 折線圖也是網頁載的
- **Video Info** 的函式在 video_scrape 的 `vids`
- **Comment Info** 的函式在 video_scrape 的 `download_comments`

### Downloads

`npm i chart.js`
`npm i react-chartjs-2`
`npm install react-player`

### Files

- `video_scrape.py` 從 search 的 500 個挑出中文 title 影片，抓影片資料+影片評論資料，生成`{keyword}_vid.json`、`{keyword}_comment.json`
- `line_data.py` 抓 line chart 需要的資料，生成`line.json`，手動加入前端`line_data.js`
- `stat.py` 在`line.json`加上 statistics，存進`line.json`
