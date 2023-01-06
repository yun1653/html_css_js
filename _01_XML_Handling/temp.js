import jsdom from 'jsdom';

const text =
  '<language>' +
  '<name>HTML</name>' +
  '<category>web</category>' +
  '<priority>high</priority>' +
  "<standard version='5.1'>W3C</standard>" +
  '</language>';

const dom = new jsdom.JSDOM(text);
const value = dom.window.document.getElementsByTagName('name')[0].textContent;
console.log(value);

// 아래 코드는 브라우저에서만 실행된다.
// let xmlParser = new DOMParser();
// let xmlDoc = xmlParser.parseFromString(text, 'text/xml');
// let value = xmlDoc.getElementsByTagName('name')[0].textContent;
