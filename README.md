# Higher Order Functions + Express

## Setup

```
npm install
node seeds.js
```

## JavaScript Training

Go through each of the files under `/examples` and run them at the command line using `node`.

```
node examples/00_basics.js
```

## Make it real-world: Refactor

Go to `routes/index.js` and extract all unirest and mongo calls to a separate file named `lib/data.js`.

So at the end, you should _not_ have any calls to `monk` or `unirest` inside `routes/index.js`

## Take it further: New code

Add functionality to the cities show page so that after it finds the city, it makes an API call and displays the results on the page.
