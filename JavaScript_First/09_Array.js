//Array

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', true, false, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'];


const Hero =["apple","mango","banana","orange","grapes"];

const myArray2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', true, false, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm');

console.log(myArray);
console.log(myArray[1]);

// Array Methods

// 1. length
console.log(myArray.length);
console.log(myArray2.length);

// 2. toString()
// console.log(myArray.toString());
// console.log(myArray2.toString());

// // 3. join()
// console.log(myArray.join(' '));
// console.log(myArray2.join(' '));

// // 4. pop()
// console.log(myArray.pop());
// console.log(myArray2.pop());

// // 5. push()
// console.log(myArray.push('n'));
// console.log(myArray2.push('n'));

// // 6. shift()
// console.log(myArray.shift());
// console.log(myArray2.shift());

// // 7. unshift()
// console.log(myArray.unshift('n'));
// console.log(myArray2.unshift('n'));

// // 8. splice()
// console.log(myArray.splice(1, 2, 'n'));
// console.log(myArray2.splice(1, 2, 'n'));

// // 9. concat()
// console.log(myArray.concat(myArray2));
// console.log(myArray2.concat(myArray));

// // 10. slice()
// console.log(myArray.slice(1, 2));
// console.log(myArray2.slice(1, 2));

// // 11. sort()
// console.log(myArray.sort());
// console.log(myArray2.sort());

// // 12. reverse()
// console.log(myArray.reverse());
// console.log(myArray2.reverse());

// // 13. indexOf()
// console.log(myArray.indexOf('n'));
// console.log(myArray2.indexOf('n'));

// // 14. lastIndexOf()
// console.log(myArray.lastIndexOf('n'));
// console.log(myArray2.lastIndexOf('n'));

// // 15. includes()
// console.log(myArray.includes('n'));
// console.log(myArray2.includes('n'));

// // 16. find()
// console.log(myArray.find('n'));
// console.log(myArray2.find('n'));

// // 17. findIndex()
// console.log(myArray.findIndex('n'));
// console.log(myArray2.findIndex('n'));

// // 18. filter()
// console.log(myArray.filter('n'));
// console.log(myArray2.filter('n'));

// // 19. map()
// console.log(myArray.map('n'));
// console.log(myArray2.map('n'));

// // 20. reduce()
// console.log(myArray.reduce('n'));
// console.log(myArray2.reduce('n'));

// // 21. reduceRight()
// console.log(myArray.reduceRight('n'));
// console.log(myArray2.reduceRight('n'));

// // 22. fill()
// console.log(myArray.fill('n'));
// console.log(myArray2.fill('n'));

// // 23. copyWithin()
// console.log(myArray.copyWithin('n'));
// console.log(myArray2.copyWithin('n'));

// // 24. entries()
// console.log(myArray.entries('n'));
// console.log(myArray2.entries('n'));

// // 25. every()
// console.log(myArray.every('n'));
// console.log(myArray2.every('n'));

// // 26. some()
// console.log(myArray.some('n'));
// console.log(myArray2.some('n'));

// // 27. flat()
// console.log(myArray.flat('n'));
// console.log(myArray2.flat('n'));

// // 28. flatMap()
// console.log(myArray.flatMap('n'));
// console.log(myArray2.flatMap('n'));

// // 29. from()
// console.log(myArray.from('n'));
// console.log(myArray2.from('n'));

// // 30. keys()
// console.log(myArray.keys('n'));
// console.log(myArray2.keys('n'));

// // 31. values()
// console.log(myArray.values('n'));
// console.log(myArray2.values('n'));

// // 32. toLocaleString()
// console.log(myArray.toLocaleString('n'));
// console.log(myArray2.toLocaleString('n'));

// // 33. Symbol.iterator()
// console.log(myArray.Symbol.iterator('n'));
// console.log(myArray2.Symbol.iterator('n'));

// // 34. Symbol.unscopables()
// console.log(myArray.Symbol.unscopables('n'));
// console.log(myArray2.Symbol.unscopables('n'));

// // 35. Symbol.species()
// console.log(myArray.Symbol.species('n'));
// console.log(myArray2.Symbol.species('n'));

// // 36. Symbol.toStringTag()
// console.log(myArray.Symbol.toStringTag('n'));
// console.log(myArray2.Symbol.toStringTag('n'));

// // 37. Symbol.hasInstance()
// console.log(myArray.Symbol.hasInstance('n'));
// console.log(myArray2.Symbol.hasInstance('n'));

// // 38. Symbol.isConcatSpreadable()
// console.log(myArray.Symbol.isConcatSpreadable('n'));
// console.log(myArray2.Symbol.isConcatSpreadable('n'));

// // 39. Symbol.match()
// console.log(myArray.Symbol.match('n'));
// console.log(myArray2.Symbol.match('n'));

// // 40. Symbol.replace()
// console.log(myArray.Symbol.replace('n'));
// console.log(myArray2.Symbol.replace('n'));

// // 41. Symbol.search()
// console.log(myArray.Symbol.search('n'));
// console.log(myArray2.Symbol.search('n'));

// // 42. Symbol.split()
// console.log(myArray.Symbol.split('n'));
// console.log(myArray2.Symbol.split('n'));

// // 43. Symbol.toPrimitive()
// console.log(myArray.Symbol.toPrimitive('n'));
// console.log(myArray2.Symbol.toPrimitive('n'));

// // 44. Symbol.isPrototypeOf()
// console.log(myArray.Symbol.isPrototypeOf('n'));
// console.log(myArray2.Symbol.isPrototypeOf('n'));

// // 45. Symbol.propertyIsEnumerable()
// console.log(myArray.Symbol.propertyIsEnumerable('n'));
// console.log(myArray2.Symbol.propertyIsEnumerable('n'));

// // 46. Symbol.valueOf()
// console.log(myArray.Symbol.valueOf('n'));
// console.log(myArray2.Symbol.valueOf('n'));

// // 47. Symbol.getPrototypeOf()
// console.log(myArray.Symbol.getPrototypeOf('n'));
// console.log(myArray2.Symbol.getPrototypeOf('n'));

// // 48. Symbol.setPrototypeOf()
// console.log(myArray.Symbol.setPrototypeOf('n'));
// console.log(myArray2.Symbol.setPrototypeOf('n'));

// // 49. Symbol.for()
// console.log(myArray.Symbol.for('n'));
// console.log(myArray2.Symbol.for('n'));

// // 50. Symbol.keyFor()
// console.log(myArray.Symbol.keyFor('n'));
// console.log(myArray2.Symbol.keyFor('n'));

// // 51. Symbol.asyncIterator()
// console.log(myArray.Symbol.asyncIterator('n'));
// console.log(myArray2.Symbol.asyncIterator('n'));

// // 52. Symbol.matchAll()

// console.log(myArray.Symbol.matchAll('n'));
// console.log(myArray2.Symbol.matchAll('n'));

// // 53. Symbol.toPrimitive()
// console.log(myArray.Symbol.toPrimitive('n'));
// console.log(myArray2.Symbol.toPrimitive('n'));

// // 54. Symbol.toStringTag()
// console.log(myArray.Symbol.toStringTag('n'));
// console.log(myArray2.Symbol.toStringTag('n'));

// // 55. Symbol.unscopables()
// console.log(myArray.Symbol.unscopables('n'));
// console.log(myArray2.Symbol.unscopables('n'));

// // 56. Symbol.hasInstance()
// console.log(myArray.Symbol.hasInstance('n'));
// console.log(myArray2.Symbol.hasInstance('n'));

// // 57. Symbol.isConcatSpreadable()
// console.log(myArray.Symbol.isConcatSpreadable('n'));
// console.log(myArray2.Symbol.isConcatSpreadable('n'));

// // 58. Symbol.match()
// console.log(myArray.Symbol.match('n'));
// console.log(myArray2.Symbol.match('n'));

// // 59. Symbol.replace()
// console.log(myArray.Symbol.replace('n'));
// console.log(myArray2.Symbol.replace('n'));

// // 60. Symbol.search()
// console.log(myArray.Symbol.search('n'));
// console.log(myArray2.Symbol.search('n'));

// // 61. Symbol.split()
// console.log(myArray.Symbol.split('n'));
// console.log(myArray2.Symbol.split('n'));

// // 62. Symbol.toPrimitive()
// console.log(myArray.Symbol.toPrimitive('n'));
// console.log(myArray2.Symbol.toPrimitive('n'));

// // 63. Symbol.isPrototypeOf()
// console.log(myArray.Symbol.isPrototypeOf('n'));
// console.log(myArray2.Symbol.isPrototypeOf('n'));

// // 64. Symbol.propertyIsEnumerable()
// console.log(myArray.Symbol.propertyIsEnumerable('n'));
// console.log(myArray2.Symbol.propertyIsEnumerable('n'));

// // 65. Symbol.valueOf()
// console.log(myArray.Symbol.valueOf('n'));
// console.log(myArray2.Symbol.valueOf('n'));

// // 66. Symbol.getPrototypeOf()
// console.log(myArray.Symbol.getPrototypeOf('n'));
// console.log(myArray2.Symbol.getPrototypeOf('n'));

// // 67. Symbol.setPrototypeOf()
// console.log(myArray.Symbol.setPrototypeOf('n'));
// console.log(myArray2.Symbol.setPrototypeOf('n'));

// // 68. Symbol.for()
// console.log(myArray.Symbol.for('n'));
// console.log(myArray2.Symbol.for('n'));

// // 69. Symbol.keyFor()
// console.log(myArray.Symbol.keyFor('n'));
// console.log(myArray2.Symbol.keyFor('n'));

// // 70. Symbol.asyncIterator()
// console.log(myArray.Symbol.asyncIterator('n'));
// console.log(myArray2.Symbol.asyncIterator('n'));

// // 71. Symbol.matchAll()
// console.log(myArray.Symbol.matchAll('n'));
// console.log(myArray2.Symbol.matchAll('n'));

// // 72. Symbol.toPrimitive()
// console.log(myArray.Symbol.toPrimitive('n'));
// console.log(myArray2.Symbol.toPrimitive('n'));

// // 73. Symbol.toStringTag()
// console.log(myArray.Symbol.toStringTag('n'));
// console.log(myArray2.Symbol.toStringTag('n'));

// // 74. Symbol.unscopables()
// console.log(myArray.Symbol.unscopables('n'));
// console.log(myArray2.Symbol.unscopables('n'));

// // 75. Symbol.hasInstance()
// console.log(myArray.Symbol.hasInstance('n'));
// console.log(myArray2.Symbol.hasInstance('n'));

// // 76. Symbol.isConcatSpreadable()
// console.log(myArray.Symbol.isConcatSpreadable('n'));
// console.log(myArray2.Symbol.isConcatSpreadable('n'));

// // 77. Symbol.match()
// console.log(myArray.Symbol.match('n'));
// console.log(myArray2.Symbol.match('n'));

// // 78. Symbol.replace()
// console.log(myArray.Symbol.replace('n'));
// console.log(myArray2.Symbol.replace('n'));

// // 79. Symbol.search()
// console.log(myArray.Symbol.search('n'));
// console.log(myArray2.Symbol.search('n'));

// // 80. Symbol.split()
// console.log(myArray.Symbol.split('n'));
// console.log(myArray2.Symbol.split('n'));

// // 81. Symbol.toPrimitive()
// console.log(myArray.Symbol.toPrimitive('n'));
// console.log(myArray2.Symbol.toPrimitive('n'));

// // 82. Symbol.isPrototypeOf()
// console.log(myArray.Symbol.isPrototypeOf('n'));
// console.log(myArray2.Symbol.isPrototypeOf('n'));

// // 83. Symbol.propertyIsEnumerable()
// console.log(myArray.Symbol.propertyIsEnumerable('n'));
// console.log(myArray2.Symbol.propertyIsEnumerable('n'));

// // 84. Symbol.valueOf()
// console.log(myArray.Symbol.valueOf('n'));
// console.log(myArray2.Symbol.valueOf('n'));

// // 85. Symbol.getPrototypeOf()
// console.log(myArray.Symbol.getPrototypeOf('n'));
// console.log(myArray2.Symbol.getPrototypeOf('n'));

// // 86. Symbol.setPrototypeOf()
// console.log(myArray.Symbol.setPrototypeOf('n'));
// console.log(myArray2.Symbol.setPrototypeOf('n'));

// // 87. Symbol.for()
// console.log(myArray.Symbol.for('n'));
// console.log(myArray2.Symbol.for('n'));

// // 88. Symbol.keyFor()
// console.log(myArray.Symbol.keyFor('n'));
// console.log(myArray2.Symbol.keyFor('n'));

// // 89. Symbol.asyncIterator()
// console.log(myArray.Symbol.asyncIterator('n'));
// console.log(myArray2.Symbol.asyncIterator('n'));

// // 90. Symbol.matchAll()
// console.log(myArray.Symbol.matchAll('n'));
// console.log(myArray2.Symbol.matchAll('n'));

// // 91. Symbol.toPrimitive()
// console.log(myArray.Symbol.toPrimitive('n'));
// console.log(myArray2.Symbol.toPrimitive('n'));

// // 92. Symbol.toStringTag()
// console.log(myArray.Symbol.toStringTag('n'));
// console.log(myArray2.Symbol.toStringTag('n'));

// // 93. Symbol.unscopables()
// console.log(myArray.Symbol.unscopables('n'));
// console.log(myArray2.Symbol.unscopables('n'));

// // 94. Symbol.hasInstance()
// console.log(myArray.Symbol.hasInstance('n'));
// console.log(myArray2.Symbol.hasInstance('n'));

// // 95. Symbol.isConcatSpreadable()
// console.log(myArray.Symbol.isConcatSpreadable('n'));
// console.log(myArray2.Symbol.isConcatSpreadable('n'));

// // 96. Symbol.match()
// console.log(myArray.Symbol.match('n'));
// console.log(myArray2.Symbol.match('n'));

// // 97. Symbol.replace()
// console.log(myArray.Symbol.replace('n'));
// console.log(myArray2.Symbol.replace('n'));

// // 98. Symbol.search()
// console.log(myArray.Symbol.search('n'));
// console.log(myArray2.Symbol.search('n'));

// // 99. Symbol.split()
// console.log(myArray.Symbol.split('n'));
// console.log(myArray2.Symbol.split('n'));

// // 100. Symbol.toPrimitive()
// console.log(myArray.Symbol.toPrimitive('n'));
// console.log(myArray2.Symbol.toPrimitive('n'));

// // 101. Symbol.isPrototypeOf()
// console.log(myArray.Symbol.isPrototypeOf('n'));
// console.log(myArray2.Symbol.isPrototypeOf('n'));

// // 102. Symbol.propertyIsEnumerable()
// console.log(myArray.Symbol.propertyIsEnumerable('n'));
// console.log(myArray2.Symbol.propertyIsEnumerable('n'));

// // 103. Symbol.valueOf()
// console.log(myArray.Symbol.valueOf('n'));
// console.log(myArray2.Symbol.valueOf('n'));

// // 104. Symbol.getPrototypeOf()
// console.log(myArray.Symbol.getPrototypeOf('n'));
// console.log(myArray2.Symbol.getPrototypeOf('n'));

// // 105. Symbol.setPrototypeOf()
// console.log(myArray.Symbol.setPrototypeOf('n'));
// console.log(myArray2.Symbol.setPrototypeOf('n'));

// // 106. Symbol.for()
// console.log(myArray.Symbol.for('n'));
// console.log(myArray2.Symbol.for('n'));

// // 107. Symbol.keyFor()
// console.log(myArray.Symbol.keyFor('n'));
// console.log(myArray2.Symbol.keyFor('n'));

// // 108. Symbol.asyncIterator()
// console.log(myArray.Symbol.asyncIterator('n'));
// console.log(myArray2.Symbol.asyncIterator('n'));

// // 109. Symbol.matchAll()
// console.log(myArray.Symbol.matchAll('n'));
// console.log(myArray2.Symbol.matchAll('n'));

// // 110. Symbol.toPrimitive()
// console.log(myArray.Symbol.toPrimitive('n'));
// console.log(myArray2.Symbol.toPrimitive('n'));

// // 111. Symbol.toStringTag()
// console.log(myArray.Symbol.toStringTag('n'));
// console.log(myArray2.Symbol.toStringTag('n'));

// // 112. Symbol.unscopables()
// console.log(myArray.Symbol.unscopables('n'));
// console.log(myArray2.Symbol.unscopables('n'));

// // 113. Symbol.hasInstance()
// console.log(myArray.Symbol.hasInstance('n'));
// console.log(myArray2.Symbol.hasInstance('n'));

// // 114. Symbol.isConcatSpreadable()
// console.log(myArray.Symbol.isConcatSpreadable('n'));
// console.log(myArray2.Symbol.isConcatSpreadable('n'));

// // 115. Symbol.match()
// console.log(myArray.Symbol.match('n'));
// console.log(myArray2.Symbol.match('n'));

// // 116. Symbol.replace()
// console.log(myArray.Symbol.replace('n'));
// console.log(myArray2.Symbol.replace('n'));

// // 117. Symbol.search()
// console.log(myArray.Symbol.search('n'));
// console.log(myArray2.Symbol.search('n'));

// // 118. Symbol.split()
// console.log(myArray.Symbol.split('n'));
// console.log(myArray2.Symbol.split('n'));

// // 119. Symbol.toPrimitive()
// console.log(myArray.Symbol.toPrimitive('n'));
// console.log(myArray2.Symbol.toPrimitive('n'));

// // 120. Symbol.isPrototypeOf()
// console.log(myArray.Symbol.isPrototypeOf('n'));
// console.log(myArray2.Symbol.isPrototypeOf('n'));

// // 121. Symbol.propertyIsEnumerable()
// console.log(myArray.Symbol.propertyIsEnumerable('n'));
// console.log(myArray2.Symbol.propertyIsEnumerable('n'));

// // 122. Symbol.valueOf()
// console.log(myArray.Symbol.valueOf('n'));
// console.log(myArray2.Symbol.valueOf('n'));

// // 123. Symbol.getPrototypeOf()
// console.log(myArray.Symbol.getPrototypeOf('n'));
// console.log(myArray2.Symbol.getPrototypeOf('n'));

// // 124. Symbol.setPrototypeOf()
// console.log(myArray.Symbol.setPrototypeOf('n'));
// console.log(myArray2.Symbol.setPrototypeOf('n'));

// // 125. Symbol.for()
// console.log(myArray.Symbol.for('n'));
// console.log(myArray2.Symbol.for('n'));

// // 126. Symbol.keyFor()
// console.log(myArray.Symbol.keyFor('n'));
// console.log(myArray2.Symbol.keyFor('n'));

// // 127. Symbol.asyncIterator()
// console.log(myArray.Symbol.asyncIterator('n'));
// console.log(myArray2.Symbol.asyncIterator('n'));

// // 128. Symbol.matchAll()
// console.log(myArray.Symbol.matchAll('n'));
// console.log(myArray2.Symbol.matchAll('n'));

// // 129. Symbol.toPrimitive()
// console.log(myArray.Symbol.toPrimitive('n'));
// console.log(myArray2.Symbol.toPrimitive('n'));

// // 130. Symbol.toStringTag()
// console.log(myArray.Symbol.toStringTag('n'));
// console.log(myArray2.Symbol.toStringTag('n'));

// // 131. Symbol.unscopables()
// console.log(myArray.Symbol.unscopables('n'));
// console.log(myArray2.Symbol.unscopables('n'));

// // 132. Symbol.hasInstance()
// console.log(myArray.Symbol.hasInstance('n'));
// console.log(myArray2.Symbol.hasInstance('n'));

// // 133. Symbol.isConcatSpreadable()
// console.log(myArray.Symbol.isConcatSpreadable('n'));
// console.log(myArray2.Symbol.isConcatSpreadable('n'));

// // 134. Symbol.match()
// console.log(myArray.Symbol.match('n'));
// console.log(myArray2.Symbol.match('n'));

// // 135. Symbol.replace()
// console.log(myArray.Symbol.replace('n'));
// console.log(myArray2.Symbol.replace('n'));

// // 136. Symbol.search()
// console.log(myArray.Symbol.search('n'));
// console.log(myArray2.Symbol.search('n'));

// // 137. Symbol.split()
// console.log(myArray.Symbol.split('n'));
// console.log(myArray2.Symbol.split('n'));

// // 138. Symbol.toPrimitive()
// console.log(myArray.Symbol.toPrimitive('n'));
// console.log(myArray2.Symbol.toPrimitive('n'));

// // 139. Symbol.isPrototypeOf()
// console.log(myArray.Symbol.isPrototypeOf('n'));
// console.log(myArray2.Symbol.isPrototypeOf('n'));

// // 140. Symbol.propertyIsEnumerable()
// console.log(myArray.Symbol.propertyIsEnumerable('n'));
// console.log(myArray2.Symbol.propertyIsEnumerable('n'));

// // 141. Symbol.valueOf()
// console.log(myArray.Symbol.valueOf('n'));
// console.log(myArray2.Symbol.valueOf('n'));

// // 142. Symbol.getPrototypeOf()
// console.log(myArray.Symbol.getPrototypeOf('n'));
// console.log(myArray2.Symbol.getPrototypeOf('n'));

// // 143. Symbol.setPrototypeOf()
// console.log(myArray.Symbol.setPrototypeOf('n'));
// console.log(myArray2.Symbol.setPrototypeOf('n'));

// // 144. Symbol.for()
// console.log(myArray.Symbol.for('n'));
// console.log(myArray2.Symbol.for('n'));

// // 145. Symbol.keyFor()
// console.log(myArray.Symbol.keyFor('n'));
// console.log(myArray2.Symbol.keyFor('n'));

// // 146. Symbol.asyncIterator()
// console.log(myArray.Symbol.asyncIterator('n'));
// console.log(myArray2.Symbol.asyncIterator('n'));

// // 147. Symbol.matchAll()
// console.log(myArray.Symbol.matchAll('n'));
// console.log(myArray2.Symbol.matchAll('n'));

// // 148. Symbol.toPrimitive()
// console.log(myArray.Symbol.toPrimitive('n'));
// console.log(myArray2.Symbol.toPrimitive('n'));

// // 149. Symbol.toStringTag()
// console.log(myArray.Symbol.toStringTag('n'));
// console.log(myArray2.Symbol.toStringTag('n'));

// // 150. Symbol.unscopables()
// console.log(myArray.Symbol.unscopables('n'));
// console.log(myArray2.Symbol.unscopables('n'));
