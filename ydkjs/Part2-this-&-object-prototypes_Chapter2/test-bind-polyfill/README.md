# 关于 test-bind-polyfill

> 因为《YDKJS》上提到的 MDN 上的 ES5 的 Function.prototype.bind() 方法的 polyfill 我没能完全看懂啊 Orz 。。

## 从一开始的测试环境

> 先全局安装

```bash
npm init
npm i --save-dev should
npm i --save-dev mocha
npm i --save-dev istanbul
```

## 测试

**测试命令：**

package.json 文件中的命令如下：

```json
{
  ...
  "scripts": {
    "test": "./node_modules/.bin/mocha",
    "cov": "./node_modules/.bin/istanbul cover _mocha",
    "opencovres": "open coverage/lcov-report/index.html"
  },
  ...
}
```

调用方法如下：

- 执行 `npm test` 进行测试
- 执行 `npm run cov` 进行覆盖率测试
- 执行 `npm run opencovres` 在浏览器中打开覆盖率测试结果

**测试用例：**

```javascript
// file: test/bind-polyfill.test.js
var bindPolyfill = require('../bind-polyfill');
var should = require('should');

describe('test/bind-polyfill.test.js', function () {
  it('should equal p1p2', function () {
    function foo(p1, p2){
        this.val = p1 + p2;
    }

    var bar = foo.bind_polyfill(null, "p1");

    var baz = new bar("p2");

    baz.val.should.equal('p1p2');
  });
});
```

## 结果

![terminal](http://ohz4k75du.bkt.clouddn.com/markdown/1503533078572.png)
![browser](http://ohz4k75du.bkt.clouddn.com/markdown/1503533491991.png)


