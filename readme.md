# CSS-to-Snippet

I love using Atomic CSS libraries like [Tachyons](http://tachyons.io), so much so that I've found writing plain old CSS to be a little more confusing, given that I think of properties as Tachyons classes now.

Therefore, I made this little script that generates a `css.snippets` file from a given CSS file for use with Vim and UltiSnips.

## Usage Instructions

Clone this repo and copy your CSS file into this folder.

Run the following (replacing library.css with the name of your CSS file).

```
npm install
node script.js library.css
```

It will generate a `css.snippets` file that you can paste into your usual snippets directory. I use UltiSnips so for me its `~/.vim/UltiSnips/snippets` but your directory may be different.

### Note:

This isn't perfect. Especially when using it for large libraries like I did with tachyons, you get a bunch of useless snippets that you may not need. I couldn't think of a way to automate this step so if you see some you don't need just go ahead and delete them.
