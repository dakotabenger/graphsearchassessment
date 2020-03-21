# Graph Assessment

In this assessment, you will write a function that allow you to perform some
calculations on an adjacency list for a graph.

The set of tests asks you to write a function named `friendsOf` that finds the
total set of friends a specified distance away from a person. It will take as
parameters

1. The adjacency list (which will always be an object with keys that always have
   arrays as values)
2. The name of the person whose friends you need to return
3. The distance away from the person that you'll use to collect the friends
   (this value will always be greater than or equal to 1)

The following table interprets the distance parameter:

| Distance | Meaning                                                                      |
|:--------:|------------------------------------------------------------------------------|
|    1     | Immediate friends                                                            |
|    2     | Immediate friends and friends of friends                                     |
|    3     | Immediate friends, friends of friends, and the friends of friends of friends |
|    n     | All the people accessible _n_ steps away from the indicated person           |

For example, say you had the following dependency graph.

```js
const graph = {
  'carrie':  ['humza', 'jun'],
  'farrah':  ['humza'],
  'humza':   ['carrie', 'farrah', 'jun', 'silla'],
  'jun':     ['carrie', 'silla'],
  'ophelia': ['travis'],
  'silla':   ['humza', 'yervand'],
  'travis':  ['ophelia'],
  'yervand': ['silla'],
};
```

Then, the following table shows the expected results for the person **jun** at
different distances.

| Distance | List of people returned by `friendsOf` |
|:--------:|----------------------------------------|
|    1     | carrie and silla                       |
|    2     | carrie, silla, humza, yervand          |
|    3     | carrie, silla, humza, yervand, farrah  |
|    4     | carrie, silla, humza, yervand, farrah  |

At distance 1, your traversal algorithm will find the friends of **jun**, carrie
and silla and return them.

At distance 2, your traversal algorithm will find carrie and silla, then find
their friends, humza and jun for carrie, and humza and yervand for silla. But,
jun is the person that you started with, so you don't include them in the return
value. Humza is both carrie's _and_ silla's friend, but you only include that
name once.

At a distance 3, you find carrie and silla, then humza and yervand. Then,
looking at humza's friends, you see that humza knows carrie, farrah, hun, and
silla. Only farrah is new, so that name will end up in the return value. When
your traversal looks at yervand, it sees that silla is that person's friend, but
is not a new value and does not end up getting added again to the return value.

At a distance four, you find carrie and silla, then humza and yervand, then
farrah. From there, you look at farrah's friends which is just humza. You
already have that name, so it doesn't get duplicated in the return value.

All distances 3 and greater will return the same list because you've exhausted
all of the distinct names of people. You've captured the entire circle of
friends.

The order in which you return the names is not important.

The tests also define edge cases that you also have to handle that are not in
this explanation.

## Important notes

1. When you do this project, _do not use the mocha command_. Instead, **use the
   npm test command**!
2. Do **NOT** modify the files in the "test" directory. _All_ of your work will
   happen in **01-friends-of.js** in this directory.

## Usage

1. Clone the assessment repository from
   https://github.com/appacademy/assessment-data-structures-graph-js-starter.
2. `cd` into the folder and `npm install` to install dependencies
3. **Run the tests by typing `npm test`**. DO NOT USE THE COMMAND `mocha`.
4. Your objective is to implement the code in each of the following JavaScript
   files so that when you run `npm test`, all tests pass.
   * **01-friends-of.js** will contain your implementation of the "friends of"
     traversal and collect algorithm.

## Submission

When you are ready to submit:

1. Delete the `node_modules` directory
2. Zip up your folder
3. Upload it
