const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT
// https://api.github.com/users/DesignerJoydip
const gitData = {
    "login": "DesignerJoydip",
    "id": 43267077,
    "node_id": "MDQ6VXNlcjQzMjY3MDc3",
    "avatar_url": "https://avatars.githubusercontent.com/u/43267077?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/DesignerJoydip",
    "html_url": "https://github.com/DesignerJoydip",
    "followers_url": "https://api.github.com/users/DesignerJoydip/followers",
    "following_url": "https://api.github.com/users/DesignerJoydip/following{/other_user}",
    "gists_url": "https://api.github.com/users/DesignerJoydip/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/DesignerJoydip/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/DesignerJoydip/subscriptions",
    "organizations_url": "https://api.github.com/users/DesignerJoydip/orgs",
    "repos_url": "https://api.github.com/users/DesignerJoydip/repos",
    "events_url": "https://api.github.com/users/DesignerJoydip/events{/privacy}",
    "received_events_url": "https://api.github.com/users/DesignerJoydip/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 2,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2018-09-14T09:24:08Z",
    "updated_at": "2025-04-24T18:34:22Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/html', (req, res) => {
    res.send('<h2>HTML response</h2>')
  })
app.get('/git', (req, res) => {
    res.json(gitData);
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})