**PeanutButterGIF**
Comfiest GIF Decoder for the Web!

![npm](https://img.shields.io/npm/v/peanutbuttergif?style=flat-square) ![GitHub](https://img.shields.io/github/license/instafluff/peanutbuttergif?style=flat-square) [![](https://data.jsdelivr.com/v1/package/npm/peanutbuttergif/badge)](https://www.jsdelivr.com/package/npm/peanutbuttergif)

Special thanks to [@AlcaDesign](https://github.com/AlcaDesign) for the help in getting [Gifuct-js](https://github.com/matt-way/gifuct-js) library packaged into a parcel and parsing the frames!

# JSGif
We built this GIF decoder live on Twitch on [Instafluff](https://www.twitch.tv/instafluff)!

## Instafluff ##
> *Like these projects? The best way to support my open-source projects is by becoming a Comfy Sponsor on GitHub!*

> https://github.com/sponsors/instafluff

> *Come and hang out with us at the Comfiest Corner on Twitch!*

> https://twitch.tv/instafluff

## Instructions ##
1. Download and add `pbgif.min.js` from the `dist` folder or include from the JSDelivr CDN:
```javascript
<script src="pbgif.min.js"></script>
```
OR
```javascript
<script src="https://cdn.jsdelivr.net/npm/peanutbuttergif@latest/dist/pbgif.min.js"></script>
```

2. Get the GIF frames by calling `await fetchGif( url )`  and that's it!

For Example:
```JavaScript
( async () => {
	let gifData = await fetchGif( "https://media.giphy.com/media/6E5UgTuvUR0b3OLgWV/giphy.gif" );
	console.dir( gifData );
})();
```

Example rendering of the pixel data to canvas is in [dist/example.html](dist/example.html)
