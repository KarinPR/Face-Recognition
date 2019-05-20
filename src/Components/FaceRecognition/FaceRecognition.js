import React from 'react';
import './FaceRecognition.css'


const FaceRecognition = ({ imageUrl , boxes }) => {
	return (
		<div className = 'center ma'>
			<p className = 'f3'>
				{`Magic Brain has detected ${boxes.length} faces in your picture.`}
			</p>
			<div className = 'relative mt2 ba bw2 br2 b--lightest-blue dib'>
				<img id = 'inputimage' alt = 'images' src = {imageUrl} width = '500px' height = 'auto'/>
				<div> 
				{
					boxes.map((box , index) => {
						return (
							<div
								key = {index}
								className = 'absolute bounding-box' 
								style = {{
									top : box.topRow , 
									left : box.leftCol , 
									bottom : box.bottomRow , 
									right : box.rightCol
								}}
							/>	
							// </div>
						)	
					})
				}
				</div>
			</div>
		</div>
	);
}

export default FaceRecognition;

// 

