import { parseGIF, decompressFrames } from 'gifuct-js';

window.parseGIF = parseGIF;
window.decompressFrames = decompressFrames;
window.fetchGif = ( url ) => {
	return fetch( url )
	.then( resp => resp.arrayBuffer() )
	.then( buff => parseGIF( buff ) )
	.then( gif => decompressFrames( gif, true ) );
}
