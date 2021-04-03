# mediawiki-bot

个人的 MediaWiki 自动程序。

## 密钥结构

```js
interface Secrets {
  userAgent: string
  sites: {
    ...SecretsSite
  }
}

interface SecretsSite {
  protocol: 'http' | 'https'
  server: string
  path: string
  username: string
  password: string
}
```

## 自动作业列表

- `thankYouVeryMuch` 《我 TM 谢谢宁 ™》
  - 给用户批量发送感谢
