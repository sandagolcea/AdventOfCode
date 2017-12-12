// http://adventofcode.com/2017/day/7
// Paste below code into the console of http://adventofcode.com/2017/day/7/input to get the result
var list = document.getElementsByTagName('pre')[0].innerHTML.split('\n');
list.splice(-1,1);

var nodes = [];
list.forEach(row => { nodes.push(row.split(' ')[0]); });
// => nodes are all the nodes in the tree;
nodes;

// get all chars after the -> sign & remove all leaves
var newList = list.filter(function(item) { return !!item.split('-&gt;')[1] });

// filtering to get the lists with each node's children:
var childrenList = newList.map( child => child.split('-&gt;')[1].replace(',','').split(' ').slice(1) );

// add all children to 1x big list
var allChildren = [];
childrenList.forEach(child => {
  child.forEach(item => {
    allChildren.push(item.replace(',',''));
  });
});

var result = [];

nodes.forEach(node => {
  if (! allChildren.includes(node)) {
    result.push(node);
  }
});

result;
