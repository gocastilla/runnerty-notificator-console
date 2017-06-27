A simple console notificator for [Runnerty]


# Instalation

```bash
$ npm install runnerty-notificator-console
```


# Configuration

Add the notificator definition in your conf.json

```json
{
  "id": "console_default",
  "type": "runnerty-notificator-console"
}
```


# Usage

Define in your process' events the type of console message that you need (or prefeer)


## info mode
![info notification on console](http://i.imgur.com/IKHy3vC.png)

```json
{
  "id":"console_default",
  "message":"Things done right.",
  "mode":"info"
}
```


## warn mode
![warning notification on console](http://i.imgur.com/TdMmGQz.png)

```json
{
  "id":"console_default",
  "message":"We are out of candy!",
  "mode":"warn"
}
```


## error mode
![error notification on console](http://i.imgur.com/s2D0DxD.png)

```json
{
  "id":"console_default",
  "message":"Oh no.",
  "mode":"error"
}
```

[Runnerty]: https://www.npmjs.com/package/runnerty