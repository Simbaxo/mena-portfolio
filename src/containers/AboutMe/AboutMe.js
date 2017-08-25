import React, { Component } from 'react';
import { Container, Flex } from 'theme/grid';
import { Title, VideoContainer } from './AboutMe.style';
import ReactPlayer from 'react-player';
import { H2, P } from 'theme/types'

export class AboutMe extends Component {
	render() {
		return (
			<Container>
				<Title>About Me</Title>
				<H2 align="right">Just an average guy who loves traveling, music, & sports.</H2>
				<Flex>	
					<P align="right">Check out some of the places I've been with this montage.</P>
					<VideoContainer>
						<ReactPlayer 
							width="100%"
							controls
							url={require('assets/dc.mov')}/>
					</VideoContainer>
				</Flex>
			</Container>
		);
	}
}

export default AboutMe;