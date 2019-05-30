const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = 3000

// JSON
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// CORS
app.use(cors())

// DATABASE
const wonjuReviews = [
  {
    id: '1',
    title: '박경리 문학 공원',
    address: '강원도 원주시 토지길 1',
    link: 'https://map.naver.com/local/siteview.nhn?code=11622447',
    rating: 4.6,
  },
  {
    id: '2',
    title: '소금산 출렁 다리',
    address: '강원도 원주시 지정면 소금산길 14',
    link: 'https://map.naver.com/local/siteview.nhn?code=1744499433',
    rating: 4.2,
  },
  {
    id: '3',
    title: '뮤지엄 산',
    address: '강원도 원주시 지정면 오크밸리2길 260',
    link: 'https://map.naver.com/local/siteview.nhn?code=34744833',
    rating: 3.9,
  },
  {
    id: '4',
    title: '허브 팜',
    address: '강원도 원주시 마장2길 37',
    link: 'https://map.naver.com/local/siteview.nhn?code=12858562',
    rating: 4.1,
  },
  {
    id: '5',
    title: '행구수변공원',
    address: '강원도 원주시 행구동 1026',
    link: 'https://map.naver.com/local/siteview.nhn?code=36016701',
    rating: 3,
  },
  {
    id: '6',
    title: '구룡사',
    address: '강원도 원주시 소초면 구룡사로 500',
    link: 'https://map.naver.com/local/siteview.nhn?code=11663910',
    rating: 4.2,
  },
  {
    id: '7',
    title: '원주향교',
    address: '강원도 원주시 향교길 37-1',
    link: 'https://map.naver.com/local/siteview.nhn?code=11663858',
    rating: 3.4,
  },
  {
    id: '8',
    title: '원주한지테마파크',
    address: '강원도 원주시 한지공원길 151',
    link: 'https://map.naver.com/local/siteview.nhn?code=11555986',
    rating: 4.2,
  },
]

// GET
app.get('/wonju-reviews', (req, res) => {
  res.json(wonjuReviews)
})

app.get('/wonju-reviews/:id', (req, res) => {
  const { id } = req.params
  const review = wonjuReviews.find(review => review.id === req.params.id)
  res.json(review)
})

app.get('/assets/:image', (req, res) => {
  const { image } = req.params
  res.sendFile(`${__dirname}/assets/${image}`)
})

// POST
app.post('/wonju-reviews', (req, res) => {
  setTimeout(() => {
    res.json({ success: 'OK', data: req.body })
  }, 2000)
})

// LISTEN
app.listen(PORT, () => {
  console.log(`Wonju Reviews App 서버 구동 ⇒ http://localhost:${PORT}`)
  console.log(`GET Wonju Reviews ⇒ http://localhost:${PORT}/wonju-reviews`)
  console.log(`GET Wonju Reviews ⇒ http://localhost:${PORT}/assets/review-01.jpg`)
})
