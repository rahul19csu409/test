// const { chunk } = require("@blue/lodash");
// const array = [1, 2, 3, 4, 5];
// const chunkedArray = chunk(array, 2);
// console.log(chunkedArray);


// filename: index.js
// package name: dataform-custom-package

const GENERIC_DOMAINS = "('samplemail.com','samplemail.co.uk','examplemailbox.com')";

function getDomain(email) {
  let cleanEmail = `trim(${email})`;
  const domain = `substr(${cleanEmail}, strpos(${cleanEmail}, '@') + 1)`;
  return `case
            when ${domain} in ${GENERIC_DOMAINS} then ${cleanEmail}
            when ${domain} = "othermailbox.com" then "other.com"
            when ${domain} = "mailbox.com" then "mailbox.global"
            when ${domain} = "support.postman.com" then "postman.com"
            else ${domain}
          end`;
}

module.exports = { GENERIC_DOMAINS, getDomain };
