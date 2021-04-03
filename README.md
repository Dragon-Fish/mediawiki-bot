# mediawiki-bot

个人的 MediaWiki 自动程序。

## 密钥结构

```js
interface Secrets {
  userAgent?: string
  sites: SecretsSite[]
}

interface SecretsSite {
  name?: string // 站点名称
  protocol: 'http' | 'https'
  server: string // 等同于 location.host
  path: string // 等同于 wgScriptPath
  // 由 MediaWiki 生成的机器人账号
  username: string
  password: string
}
```

## 自动作业列表

- `thankYouVeryMuch` 《我 TM 谢谢宁 ™》
  - 给用户批量发送感谢
