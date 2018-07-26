import React, { Component } from 'react'
import about from '../../static/img/about.jpg'
import styles from './styles.css'

class About extends Component {
	constructor(props) {
	    super(props)
	}

	render() {
		return(
		<div class="text-center" style={{marginTop: 5 + 'em'}}>
			<h3>MagraCats</h3>
				<p>Welcome to Magracats! Here you can explore cute kittens if you're interested in adoption or just cute stuff! ლ(●ↀωↀ●)ლ</p>
			<img src={about} className={styles.img} height="50%" width="50%" />
		</div>
		)
	}
}



export default About
