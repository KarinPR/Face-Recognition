import React from 'react';
import './ImageLinkForm.css'


const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div>
			<p className = 'f3'>
				{'This Magic Brain will detect faces in your pictures. Give it a try.'}
			</p>
			<p className = 'f5 serif'>
				{' Just enter an image URL with a face'}  
			</p>
			<p className = 'f5 serif'>
				{'You can use this URL to start - " https://www.faceplusplus.com/scripts/demoScript/images/demo-pic4.jpg " '}
			</p>
			<div className = 'br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw8 center'>
				<div className = 'form center pa4 br3 shadow-5'>
					<input className = 'f4 pa2 w-70 br-pill center' type = 'text' onChange = {onInputChange}/>
					<button 
						className = 'w-30 f4 grow link no-underline br-pill ba bg-white-10 b--black ph3 pv2 mb2 dib black shadow-5' 
						onClick = {onButtonSubmit} > Detect 
					</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;