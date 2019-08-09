# To run
```
npm i
node index.js


# Async / Await - Looses scope


visit http://localhost:3000/asyncawait

console will show the following logs. note that the parent_id of the first set of logs should be one of the ones in the second set, but is null.




``` json

[
  {
    "trace_id": "1690375320385050939",
    "span_id": "4196935812530438617",
    "parent_id": "5651988838823751640",
    "name": "dns.lookup",
    "resource": "www.mocky.io",
    "error": 0,
    "meta": {
      "span.kind": "client",
      "dns.hostname": "www.mocky.io",
      "dns.address": "52.19.144.228"
    },
    "metrics": {
      "_sample_rate": 1,
      "_sampling_priority_v1": 1
    },
    "start": 1.5651073057147e+18,
    "duration": 521830078,
    "service": "test-dd-trace-superagent-dns"
  },
  {
    "trace_id": "1690375320385050939",
    "span_id": "5651988838823751640",
    "parent_id": "1690375320385050939",
    "name": "tcp.connect",
    "resource": "www.mocky.io:80",
    "error": 0,
    "meta": {
      "span.kind": "client",
      "tcp.remote.host": "www.mocky.io",
      "tcp.remote.port": "80",
      "tcp.family": "IPv4",
      "out.host": "www.mocky.io",
      "out.port": "80",
      "tcp.local.address": "192.168.2.110",
      "tcp.local.port": "50628"
    },
    "metrics": {
      "_sample_rate": 1,
      "_sampling_priority_v1": 1
    },
    "start": 1.5651073057139e+18,
    "duration": 1284028076,
    "service": "test-dd-trace-superagent-tcp"
  },
  {
    "trace_id": "1690375320385050939",
    "span_id": "1690375320385050939",
    "parent_id": null,
    "name": "http.request",
    "resource": "GET",
    "error": 0,
    "meta": {
      "span.kind": "client",
      "http.method": "GET",
      "http.url": "http:\/\/www.mocky.io\/v2\/5d49a3383200005e00600e41",
      "http.status_code": "200"
    },
    "metrics": {
      "_sample_rate": 1,
      "_sampling_priority_v1": 1
    },
    "start": 1.56510730571e+18,
    "duration": 1607181396,
    "service": "test-dd-trace-superagent-http-client",
    "type": "http"
  }
]

```


``` json
[
  {
    "trace_id": "3443395551020563210",
    "span_id": "1354246988812260301",
    "parent_id": "3443395551020563210",
    "name": "express.middleware",
    "resource": "query",
    "error": 0,
    "meta": {
      "language": "javascript"
    },
    "metrics": {
      "_sample_rate": 1,
      "_sampling_priority_v1": 1
    },
    "start": 1.5651073057035e+18,
    "duration": 729736,
    "service": "test-dd-trace-superagent"
  },
  {
    "trace_id": "3443395551020563210",
    "span_id": "1702711360164248480",
    "parent_id": "3443395551020563210",
    "name": "express.middleware",
    "resource": "expressInit",
    "error": 0,
    "meta": {
      "language": "javascript"
    },
    "metrics": {
      "_sample_rate": 1,
      "_sampling_priority_v1": 1
    },
    "start": 1.5651073057046e+18,
    "duration": 653809,
    "service": "test-dd-trace-superagent"
  },
  {
    "trace_id": "3443395551020563210",
    "span_id": "847173193195169267",
    "parent_id": "1005475685562429312",
    "name": "express.middleware",
    "resource": "<anonymous>",
    "error": 0,
    "meta": {
      "language": "javascript"
    },
    "metrics": {
      "_sample_rate": 1,
      "_sampling_priority_v1": 1
    },
    "start": 1.565107305706e+18,
    "duration": 1633401123,
    "service": "test-dd-trace-superagent"
  },
  {
    "trace_id": "3443395551020563210",
    "span_id": "1005475685562429312",
    "parent_id": "3443395551020563210",
    "name": "express.middleware",
    "resource": "bound dispatch",
    "error": 0,
    "meta": {
      "language": "javascript"
    },
    "metrics": {
      "_sample_rate": 1,
      "_sampling_priority_v1": 1
    },
    "start": 1.5651073057058e+18,
    "duration": 1633651367,
    "service": "test-dd-trace-superagent"
  },
  {
    "trace_id": "3443395551020563210",
    "span_id": "3443395551020563210",
    "parent_id": null,
    "name": "express.request",
    "resource": "GET \/",
    "error": 0,
    "meta": {
      "http.url": "http:\/\/localhost:3000\/",
      "http.method": "GET",
      "span.kind": "server",
      "http.route": "\/",
      "http.status_code": "200",
      "language": "javascript"
    },
    "metrics": {
      "_sample_rate": 1,
      "_sampling_priority_v1": 1
    },
    "start": 1.5651073057e+18,
    "duration": 1644066650,
    "service": "test-dd-trace-superagent",
    "type": "web"
  }
]
```




# Promise / Callback
Instead, visit http://localhost:3000/promise or http://localhost:3000/callback