# Pinpoint Node 사용하기


## 로컬 프로젝트에서 접근하기

저는 로컬 개발을 위해 [nodemon]()을 사용하고 있어, `nodemon.json`에 

```javascript
{
  "env": {
    "PINPOINT_COLLECTOR_IP":"ec2 ip",
    "PINPOINT_SAMPLING_RATE":"1",
    "PINPOINT_APPLICATION_NAME":"pinpoint-node",
    "PINPOINT_TRACE_EXCLUSION_URL_PATTERN": "/stylesheets/*,/css/*,/favicon.ico",
    "PINPOINT_AGENT_ID": "local"
  }
}
```

### 불필요한 Trace 대상 제거

## 장/단점 및 개인적인 생각

장점

* 모든 APM 중에 가장 디텍팅에 최적화된 UX
* 핀포인트 특유의 장점
  * 별도의 로그를 남기지 않다고 모니터링이 가능
* Slow URL에 대한 빠른 디텍팅 가능
* Redis / MongoDB 


단점

* JVM 계열의 여러 기능들 중 일부만 지원한다.
* function 단위 Trace 지원이 안된다.
  * 즉, 여러 function들이 실행될때 어느 function 중에서 처리가 오래 걸렸는지 추적이 안된다.
* PostgreSQL , MySQL 등 RDBMS 지원이 안된다.
* Express에서 직접 statusCode를 5xx로 변경하면 failed로 판단하지 않는다

핀포인트 노드는 완전히 앞단 (흔히 말하는 [프론트 서버](https://www.youtube.com/watch?v=38cmd_fYwQk): 웹프론트가 아니라, 서비스 제일 앞단에서 트래픽을 받아주고 적절하게 다른 API들을 호출하는 역할) 서비스에 중점을 맞춘 APM이라고 판단하게 되었습니다.  
  
실제로 이 Node Agent를 만든 네이버 쇼핑 역시 자바&스프링으로 백엔드 API를 만들고, 이 API를 Node Server에서 호출하는 구조로 사용하고 있습니다.  
(Node Server가 서버렌더링 / API Aggregate 역할)

![naver1](./images/naver1.png)

![naver2](./images/naver2.png)

> 핀포인트는 같은 Collector Server로 요청을 보내면 agent들간의 처리내역을 이어서 볼 수 있습니다.