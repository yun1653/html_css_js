//문자주소를 가진 tistory는 제목이 같이 출력됨

import jsdom from 'jsdom';
import fetch from 'node-fetch';

const url = 'https://notice.tistory.com//sitemap.xml';

(async () => {
  let response = await fetch(url);
  let data = await response.text();

  const dom = new jsdom.JSDOM(data);
  const value = dom.window.document.getElementsByTagName('loc');
  let result = new Array();

  for (let i of value) {
    let postUrl = decodeURIComponent(i.textContent);
    let tisIdx = postUrl.indexOf('tistory.com');
    let tisEntryIdx = postUrl.indexOf('/entry/');

    if (tisIdx && tisEntryIdx != -1) {
      //tistory.com 있고 entry 있으면 : 문자주소면
      result.push(postUrl);
    } else if (tisIdx && parseInt(postUrl[tisIdx + 12])) {
      // tistory.com/ 다음이 바로 숫자이면 : 숫자주고
      result.push(postUrl);
    } else if (tisIdx == -1) {
      // tistory.com 아니면 : 워드프레스 같은...
      result.push(postUrl);
    } else {
    }
  }
  console.log(result);
})();
