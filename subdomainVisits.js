// Subdomain Visit Count:

// A website domain "discuss.leetcode.com" consists of various subdomains. At the top level, we have "com",
// at the next level, we have "leetcode.com" and at the lowest level, "discuss.leetcode.com". When we visit
// a domain like "discuss.leetcode.com", we will also visit the parent domains "leetcode.com" and "com" implicitly.

// A count-paired domain is a domain that has one of the two formats "rep d1.d2.d3" or "rep d1.d2" where rep is the
// number of visits to the domain and d1.d2.d3 is the domain itself.

// * For example, "9001 discuss.leetcode.com" is a count-paired domain that indicates that discuss.leetcode.com
//   was visited 9001 times.

// Given an array of count-paired domains cpdomains, return an array of the count-paired domains of each subdomain
// in the input. You may return the answer in any order.

// Example 1:

// Input: cpdomains = ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]

// Output: ["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]

// Explanation: We will visit "google.mail.com" 900 times, "yahoo.com" 50 times, "intel.mail.com" once and "wiki.org" 5 times.
// For the subdomains, we will visit "mail.com" 900 + 1 = 901 times, "com" 900 + 50 + 1 = 951 times, and "org" 5 times.

// Leetcode link: https://leetcode.com/problems/subdomain-visit-count/description/

// Solution:

var subdomainVisits = function (cpdomains) {
  let result = [];
  let obj = {};

  for (let i = 0; i < cpdomains.length; i++) {
    let str = cpdomains[i];
    let num = parseFloat(str);
    let id = str.split(" ")[1];
    let subDomains = id.split(".");
    while (subDomains.length) {
      let subDom = "";
      for (let j = subDomains.length - 1; j >= 0; j--) {
        if (j > 0) {
          subDom = "." + subDomains[j] + subDom;
        } else {
          subDom = subDomains[j] + subDom;
        }
      }

      if (obj[subDom]) {
        obj[subDom] += num;
      } else {
        obj[subDom] = num;
      }

      subDomains.shift();
    }
  }

  for (let key in obj) {
    let str = `${obj[key]} ${key}`;
    result.push(str);
  }

  return result;
};

// TC => O(n^3)
// SC => O(n)

console.log(
  subdomainVisits(
    (cpdomains = [
      "900 google.mail.com",
      "50 yahoo.com",
      "1 intel.mail.com",
      "5 wiki.org",
    ])
  )
);
