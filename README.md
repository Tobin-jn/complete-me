# complete-me

## Complete-me Project


Autocomplete features are a very common convention for text inputs on search fields. In this project you are going to be building a low level version of an auto complete system in JavaScript. You’ll use the boilerplate repos you created during the project configuration lesson by following these steps:

Retrieve the git remote URL for your boilerplate repo by navigating to your repo at github.com. It should be something like https://github.com/brittanystoroz/boilerplate.git. Copy this to your clipboard.

In your terminal, create a new project directory called complete-me. CD into it and run git init

Add your boilerplate repo as a remote called boilerplate with the following command:

git remote add boilerplate https://github.com/brittanystoroz/boilerplate.git

Copy your boilerplate master into your complete-me master with the following command:
git pull boilerplate master

Go back to github in the browser and create a new repository called complete-me. Do not add a .gitignore file and do not add a license.

Click the ‘Create Repository’ button and copy the git URL for your new repo to your clipboard. It should be something like https://github.com/brittanystoroz/complete-me.git

In your terminal, in your complete-me directory, add your new github repo as a remote with the following command:

git remote add origin https://github.com/brittanystoroz/complete-me.git

Push up your current master branch to your origin remote:
git push origin master

Hint
You can use console.log along with JSON.stringify to view your trie in your console when running your tests. console.log(JSON.stringify(trie, null, 4))

### Requirements

#### Phase 1

The first thing your trie should be able to do is take in a word. It should also keep a count of how many words have been inserted.

```javascript
import Trie from "./lib/Trie";

var prefixTrie = new Trie();

prefixTrie.insert("hello");

prefixTrie.count();
=> 1

prefixTrie.insert('world');

prefixTrie.count();
=> 2
```

#### Phase 2

Once the words are placed into the trie it should be able to offer some suggestions based on a word prefix.

You will need to write a method called suggest that will take in a word prefix and return an array of words that match the desired prefix.


```javascript
prefixTrie.suggest('he');
=> ['hello']

prefixTrie.insert("hellen");

prefixTrie.suggest("he");
=> ["hello", "hellen"]

prefixTrie.suggest('w');
=> ["world"]
```

#### Phase 3

Our Trie won’t be very useful without a good dataset to populate it. Our computers ship with a special file containing a list of standard dictionary words.

It lives at /usr/share/dict/words

Using the unix utility wc (word count), we can see that the file contains 234371 words:
```javascript
$ cat /usr/share/dict/words | wc -l
=> 234371
```

Our next objective is to load the dictionary into our trie. It should have a method called populate that will take in the desired data set and inject it into our trie.

```javascript
import fs from 'fs';

const text = "/usr/share/dict/words";
const dictionary = fs.readFileSync(text).toString().trim().split('\n');

const prefixTrie = new Trie();

prefixTrie.populate(dictionary);

prefixTrie.count();
=> 234371

prefixTrie.suggest('world');
=> [ 'world', 'worlded', 'worldful', 'worldish', ...]
```

#### Phase 4 (not due upon evals)

Next week you will create a Weather App that needs an autocomplete feature. Package your complete-me trie in a node module so that you can import it into future projects. (Note: don’t publish to npm, you can install your package from github)

#### Extensions

Front Facing Application
See if you can implement a front facing application for your trie. The user should be able to submit a word and then receive the suggestions on the DOM.

Delete method
Sometimes auto-completes give suggestions which we never want to see. Add a delete method to your Trie.

```javascript
prefixTrie.suggest('world')
=> ['world', 'worlded', 'worldful', 'worldish', ...]

prefixTrie.delete('worldful');

prefixTrie.suggest('world')
=> ['world', 'worlded','worldish', ...]
```
